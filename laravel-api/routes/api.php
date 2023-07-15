<?php

use App\Http\Controllers\Admin\Contactcontroller;
use App\Http\Controllers\Admin\VisitorController;
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
/* Visitor API */

Route::get('/getvisitor',[VisitorController::class,'GetVisitorDetails']);
/* Contact API */
Route::post('/getcontact',[Contactcontroller::class,'getContact']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
