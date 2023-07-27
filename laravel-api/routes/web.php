<?php

use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\Contactcontroller;
use App\Http\Controllers\Admin\SiteInfoController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin/home',function(){
    return view('admin.index');
});

Route::get('/admin/login',function(){
    return view('auth.login');
});

Route::prefix('/admin')->name('admin.')->controller(AdminController::class)->group(function(){

    Route::get('/logout','adminLogout')->name('logout');

    Route::get('/profile','adminProfile')->name('profile');

    Route::post('/profile-store','profileStore')->name('profile.store');

    Route::get('/password-change','changePassword')->name('password.change');

    Route::post('/password-update','changePasswordUpdate')->name('password.update');
});

/* Category Route Group  */
Route::prefix('/category')->name('category.')->controller(CategoryController::class)->group(function(){
    Route::get('/add','addCategory')->name('add');
    Route::get('/all','getAllCategory')->name('all');
    Route::post('/store','storeCategory')->name('store');
    Route::get('/edit/{id}','editCategory')->name('edit');
    Route::post('/update/{id}','updateCategory')->name('update');
    Route::get('/delete/{id}','deleteCategory')->name('delete');
    // Route::get('/add','')->name('add');
        
});

 /* Sub Category Routes Here */

 Route::prefix('/subcategory')->group(function(){

    Route::get('/all',[CategoryController::class, 'GetAllSubCategory'])->name('all.subcategory');
    
    Route::get('/add',[CategoryController::class, 'AddSubCategory'])->name('add.subcategory');
    
    Route::post('/store',[CategoryController::class, 'StoreSubCategory'])->name('subcategory.store');
    
    Route::get('/edit/{id}',[CategoryController::class, 'EditSubCategory'])->name('subcategory.edit');
    
    Route::post('/update',[CategoryController::class, 'UpdateSubCategory'])->name('subcategory.update');
     
    Route::get('/delete/{id}',[CategoryController::class, 'DeleteSubCategory'])->name('subcategory.delete');
    });
    
    /* Home Page Slider Route Here */

    Route::prefix('slider')->controller(SliderController::class)->group(function(){

        Route::get('/all',  'GetAllSlider')->name('all.slider');
        
        Route::get('/add',  'AddSlider')->name('add.slider');
        
        Route::post('/store',  'StoreSlider')->name('slider.store');
        
        Route::get('/edit/{id}',  'EditSlider')->name('slider.edit');
        
        Route::post('/update',  'UpdateSlider')->name('slider.update');
         
        Route::get('/delete/{id}',  'DeleteSlider')->name('slider.delete');
        });
        

        /// Contact Message Route 
Route::get('/all/message',[Contactcontroller::class, 'GetAllMessage'])->name('contact.message');

Route::get('/message/delete/{id}',[Contactcontroller::class, 'DeleteMessage'])->name('message.delete');

/// Product Review Route 
Route::get('/all/review',[ReviewController::class, 'GetAllReview'])->name('all.review');

/// Site Info Route 
Route::get('/getsite/info',[SiteInfoController::class, 'GetSiteInfo'])->name('getsite.info');

Route::post('/update/siteinfo',[SiteInfoController::class, 'UpdateSiteInfo'])->name('update.siteinfo');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});
