<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategory()
    {
        $categories = Category::all();
        $subCategoryDetails = [];
        foreach($categories as $category){
            $sub_category_name = SubCategory::where('category_name',$category['category_name'])->get();

            $item = [
                'category_name'=>$category['category_name'],
                'category_image'=>$category['category_image'],
                'sub_category_name'=>$sub_category_name
            ];

            array_push($subCategoryDetails,$item);
        }

        return $subCategoryDetails;
    }

}
