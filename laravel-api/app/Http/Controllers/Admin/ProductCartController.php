<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductCart;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductCartController extends Controller
{
    public function addToCart(Request $request)
    {
        $email = $request->input('email');
        $size =  $request->input('size');
        $color =  $request->input('color');

       $quantity = $request->input('quantity');
       $product_code = $request->product_code;
       $productList = ProductList::where('product_code',$product_code)->get();

       $price = $productList[0]['price'];
       $special_price = $productList[0]['special_price'];
        if($special_price!='na'){
            $unit_price = $price;
            $total_price = $price * $quantity;

        }else{
            $unit_price = $special_price;
            $total_price = $special_price * $quantity;
        }

        $productCarts = ProductCart::insert([
            'email' => $email,
            'image' => $productList[0]['image'],
            'product_name' => $productList[0]['title'],
            'product_code' => $productList[0]['product_code'],
            'size' => "Size: ".$size,
            'color' => "Color: ".$color,
            'quantity' => $quantity,
            'unit_price' => $unit_price,
            'total_price' => $total_price, 
        ]);

        return $productCarts;
    }
}

/* $table->string('email');
$table->string('image');
$table->string('product_name');
$table->string('product_code');
$table->string('size');
$table->string('color');
$table->string('quantity');
$table->string('unite_price');
$table->string('total_price'); */