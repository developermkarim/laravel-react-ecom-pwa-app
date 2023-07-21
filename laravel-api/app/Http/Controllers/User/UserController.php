<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth as FacadesAuth;

class UserController extends Controller
{
     public function User(){

      
      return  FacadesAuth::user();
       /*  return  [
            'name'=>$user->name,
            'email'=>$user->email,
            'id'=>$user->id,
        ]; */
    } // End Mehtod
}
