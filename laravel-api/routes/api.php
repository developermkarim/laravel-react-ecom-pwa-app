<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\Contactcontroller;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\SliderController;
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

/* Contact API */
Route::get('/getsiteinfo',[SiteInfoController::class,'getSiteInfo']);

/* Category and SubCategory  */
Route::get('/getcategory',[CategoryController::class,'getCategory']);

/* ProductList Route Here */
/* Important note that Here all Parameter  (that is bind {} ) can reqeust object properties such $request->remark  is {remark}  param with the belowing route */

Route::get('/productlistbyremark/{remark}',[ProductListController::class,'productListByRemark']);

Route::get('/productbycategory/{category}',[ProductListController::class,'productByCategory']);

Route::get('/productbysubcategory/{category}/{subcategory}',[ProductListController::class,'productBySubCategory']);

/* Slider Route Here */
Route::get('/getslider',[SliderController::class,'getSlider']);

/* ProductDetails Here */
Route::get('/product-details/{id}',[ProductDetailsController::class,'getProductDetails']);

/* Notification Here */
Route::get('/notification',[NotificationController::class,'getNotification']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
