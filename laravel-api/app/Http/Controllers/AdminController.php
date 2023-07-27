<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function adminLogout()
    {
        Auth::logout();
        return redirect('admin/login');
    }

    public function adminProfile()
    {
        //  $id = auth()->user()->id;
        $adminData = User::find(1);
         return view('backend.admin.admin_profile',compact('adminData'));
    }

    public function profileStore(Request $request)
    {
        $admin = User::findOrFail(1);

        $admin->name = $request->name;
        $admin->email = $request->email;

        if($request->file('profile_photo_path')){
            $file = $request->file('profile_photo_path');
            @unlink(public_path('upload/admin_images' . $admin->profile_photo_path));

            $fileName = rand(42,555) . $file->getClientOriginalName();
            $file->move(public_path('upload/admin_images'),$fileName);
            $admin->profile_photo_path = $fileName;
        }

        $notification = [
            'message'=>"Admin Profile Updated Successfully",
            'alert-type'=>"success"
        ];
        if($admin->save()){

            return redirect()->route('admin.profile')->with($notification);
        }


      
    }  
    public function changePassword() {

    return view('backend.admin.admin_password');

        }
    public function changePasswordUpdate(Request $request) {

        $admin = User::find(1);
        $oldPassword =  $admin->password;
        
        if(Hash::check($oldPassword,$request->password)){
            $newPassword = Hash::make($request->password);
            
            $admin->password = $newPassword;
            
            if($admin->save()){
                Auth::logout();

                return redirect()->route('admin.password.change')->with(['message'=>'Password Updated Successfully','alert-type'=>'success']);
            }

            else{

                return redirect()->back();
            }

        }
        else{
            return redirect()->back()->with(['message'=>'Sorry! Password Not Updated','alert-type'=>'error']);
        }

        }

}
