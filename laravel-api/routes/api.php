<?php

use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

 /////////////// 
// User Login API Start
  ////////////////////////
  /* User Login Route */
  Route::post('/login',[AuthController::class,'login']);

  /* User Register Route */
  Route::post('/register',[AuthController::class,'register']);

   /* User Forget Password */
   Route::post('/forget_password',[ForgetController::class,'forgetPassword']);

/* User Password Reset */
Route::post('/reset_password',[ResetController::class,'resetPassword']);

Route::get('/user',[UserController::class,'user'])->middleware('auth:api');

/* Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */
