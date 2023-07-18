<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ProductList;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
        public function productListByRemark(Request $request)
        {
            $remark = $request->remark;
            $productList = ProductList::where('remark',$remark)->get();
            return $productList;
        }
        public function productByCategory(Request $request)
        {
            $category = $request->category;
            $productList = ProductList::where('category',$category)->get();
            return $productList;
            
        }
        public function productBySubCategory(Request $request)
        {
            $category = $request->category;
            $subCategory = $request->subcategory;
            $productList = ProductList::where('category',$category)->where('subcategory',$subCategory)->get();
            return $productList;
        }

        public function productBySearch(Request $request)
        {
            $search_key = $request->key;
            $productList = ProductList::where('title','LIKE',"%{$search_key}%}")->orWhere('brand','LIKE',"%{$search_key}%")->get();
            return $productList;
        }

        public function similarProduct(Request $request)
        {
            $subCategory = $request->sub_category;
            $productList = ProductList::where('sub_category',$subCategory)->limit(6)->get();
            return $productList;
        }

        public function getAllProducts()
        {
            $products = ProductList::latest()->paginate(10);

            return view('backend.product.product_all',compact('products'));
        }
}
