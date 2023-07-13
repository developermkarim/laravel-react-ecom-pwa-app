<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
       
        try{

            if(Auth::attempt($request->only('email','password'))){

                $user = Auth::user();
                $token = $user->createToken('app')->accessToken;
                return response([
                    'message'=>'User Logged In Successfully',
                    'user'=> $user,
                    'token'=>$token,
            ],200);
            }
        }catch(Exception $error){
            return response([
                'message'=>$error->getMessage(),
            ],400);
        }

        return response([
            'message'=>'Email or Password Not Matched',
        ],401);
    }


   public function register(RegisterRequest $request){

        try {
           
               $user = User::create([
                'name'=>$request->name,
                'email'=>$request->email,
                'password'=>Hash::make($request->password),

            ]);
            $token = $user->createToken('app')->accessToken;
            return response([
                'message'=>"Registration Successfully",
                'token'=> $token,
                'user'=>$user
            ],200);


        } catch (Exception $error) {
            return response([
                'message'=>$error->getMessage(),
            ],400);
        }

    }
}
