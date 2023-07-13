<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgetRequest;
use App\Mail\FortgetMail;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail as FacadesMail;

class ForgetController extends Controller
{
    public function forgetPassword(ForgetRequest $request)
    {
        $email = $request->email;
        if(User::where('email',$email)->doesntExist()){
            return response([
                'message'=>'Email Invalid'
            ],401);

        }

        $token = rand(10,1000);
            
        try {
          
            DB::table('password_resets')->insert([
                'email'=>$email,
                'token'=>$token
            ]);
    
            /* Mail Send To User */
            FacadesMail::to($email)->send(new FortgetMail($token));

            return response([
                'message'=>'Please,Check Your Email. Mail Send to Email'
            ],200);

        } catch(Exception $error) {
            return response([
                'message'=>$error->getMessage(),
            ],400);

        }
    }
}
