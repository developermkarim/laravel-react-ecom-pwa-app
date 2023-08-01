<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\Contactcontroller;
use App\Http\Controllers\Admin\NotificationController;
use App\Http\Controllers\Admin\ProductCartController;
use App\Http\Controllers\Admin\ProductDetailsController;
use App\Http\Controllers\Admin\ProductListController;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\VisitorController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;

use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\User\UserController;
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
 /////////////// User Login API Start ////////////////////////

 // Login Routes 
 Route::post('/user-login',[AuthController::class, 'Login']);

 // Register Routes 
Route::post('/register',[AuthController::class, 'Register']);

 // Forget Password Routes 
Route::post('/forget-password',[ForgetController::class, 'ForgetPassword']);

 // Reset Password Routes 
Route::post('/reset-password',[ResetController::class, 'ResetPassword']);

 // Current User Route 
Route::get('/user-data',[UserController::class, 'User']);/* ->middleware('auth:api'); */


 /////////////// End User Login API Start ////////////////////////

/* Visitor API */

Route::get('/getvisitor',[VisitorController::class,'GetVisitorDetails']);
/* Contact API */
Route::post('/getcontact',[Contactcontroller::class,'getContact']);

/* Contact API */
Route::get('/getsiteinfo',[SiteInfoController::class,'getAllSiteInfo']);

/* Category and SubCategory  */
Route::get('/getcategory',[CategoryController::class,'getCategory']);

/* ProductList Route Here */
/* Important note that Here all Parameter  (that is bind {} ) can reqeust object properties such $request->remark  is {remark}  param with the belowing route */

Route::get('/productlistbyremark/{remark}',[ProductListController::class,'productListByRemark']);

Route::get('/productbycategory/{category}',[ProductListController::class,'productByCategory']);

Route::get('/productbysubcategory/{category}/{subcategory}',[ProductListController::class,'productBySubCategory']);

Route::get('/product-search/{searchkey}',[ProductListController::class,'productBySearch']);

/* Similar Product Here */
Route::get('/suggested-product/{sub_category}',[ProductListController::class,'similarProduct']);

/* ProductDetails Here */
Route::get('/product-details/{id}',[ProductDetailsController::class,'getProductDetails']);

/* Slider Route Here */
Route::get('/getslider',[SliderController::class,'getSlider']);
/* Notification Here */
Route::get('/notification',[NotificationController::class,'getNotification']);

// Product Cart Route
Route::post('/addtocart',[ProductCartController::class, 'addToCart']);

// Product Cart Route
Route::post('/cartorder',[ProductCartController::class, 'cartOrder']);

/* Product Reviews Rotue Here */

// Post Product Review Route
Route::post('/post-review',[ReviewController::class, 'postReviews']);

// Review Product Route
Route::get('/product-reviews/{product_code}',[ReviewController::class, 'productWiseReview']);






Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();

});
