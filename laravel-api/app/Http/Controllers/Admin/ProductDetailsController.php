<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductDetails;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    public function getProductDetails(Request $request)
    {
        $pd_id = $request->id;
        $productDetails = ProductDetails::where('product_id',$pd_id)->get();
        $productLists = ProductList::where('id',$pd_id)->get();

        $ProductAllData = [
            'productDetails' => $productDetails,
            'productList' => $productLists,
        ];
    
       
    $item = [
            'title' =>  $ProductAllData['productList'][0]['title'],
            'brand' =>  $ProductAllData['productList'][0]['brand'],
            'category' =>  $ProductAllData['productList'][0]['category'],
            'subcategory' =>  $ProductAllData['productList'][0]['subcategory'],
            'image' =>  $ProductAllData['productList'][0]['image'],
            'image_one' =>  $ProductAllData['productDetails'][0]['image_one'],
             'price' =>  $ProductAllData['productList'][0]['price'],
            'product_code' =>  $ProductAllData['productList'][0]['product_code'],
            'remark' =>  $ProductAllData['productList'][0]['remark'],
            'special_price' =>  $ProductAllData['productList'][0]['special_price'],
            'star' =>  $ProductAllData['productList'][0]['star'],
            'image_one' =>  $ProductAllData['productDetails'][0]['image_one'],
            'image_two' =>  $ProductAllData['productDetails'][0]['image_two'],
            'image_three' =>  $ProductAllData['productDetails'][0]['image_three'],
            'image_four' =>  $ProductAllData['productDetails'][0]['image_four'],
            'color' =>  $ProductAllData['productDetails'][0]['color'],
            'size' =>  $ProductAllData['productDetails'][0]['size'],

            'product_id' =>  $ProductAllData['productDetails'][0]['product_id'],
            'short_description' =>  $ProductAllData['productDetails'][0]['short_description'],
            'long_description' =>  $ProductAllData['productDetails'][0]['long_description'], 
        ];
        

            return $item; 
    }

   
}
