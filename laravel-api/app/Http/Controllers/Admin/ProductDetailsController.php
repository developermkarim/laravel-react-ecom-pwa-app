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
        $item = [
            'productDetails' => $productDetails,
            'productList' => $productLists,
        ];
        return response($item);
    }
   
}
