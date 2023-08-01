<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\ProductDetails;
use App\Models\ProductList;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\Facades\Image;

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

        public function addProduct()
        {
            $category = Category::orderBy('category_name','DESC')->get();
            $subCategory = DB::table('subcategories')->orderBy('sub_category_name','ASC')->get();
            return view('backend.product.product_add',compact('category','subCategory'));
        }


        public function storeProduct(Request $request)
        {
            $request->validate([
                'product_code'=>'required',
            ],
            [
                'product_code.required'=>"product Code must be filled",
            ]);

            if($request->hasFile('image')){
                $imageFile = $request->file('image');
                
                $optimizeImg = str_replace(['_',' ','(',',',')'],'-',$request->title);

                $imageExtension = $imageFile->getClientOriginalExtension();
                $imageName = $optimizeImg . '-' . rand(99,9999) . '.' . $imageExtension;
                Image::make($imageFile)->resize(450,null,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName);

                $save_url = "http://localhost:8000/upload/product/" . $imageName;
                // dd($save_url);

            }

                $product_id = ProductList::insertGetId([
                    'title' => $request->title,
                    'price' => $request->price,
                    'special_price' => $request->special_price,
                    'category' => $request->category,
                    'subcategory' => $request->subcategory,
                    'remark' => $request->remark,
                    'brand' => $request->brand,
                    'product_code' => $request->product_code,
                    'image' => $save_url, 
                ]);


                /* Image One  */
                if($request->hasFile('image_one')){

                    $image_one = $request->file('image_one');
                    $image_one_optimize = str_replace(['_',' ','(',',',')'],'-',$request->title);
                    $imageName1 = $image_one_optimize . '-' . 'image_one' . '.'.$image_one->getClientOriginalExtension();
                    Image::make($image_one)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName1);
                    $save_url1 = "http://localhost:8000/upload/product/" . $imageName1;
                }

                if($request->hasFile('image_two')){

                    $image_two = $request->file('image_two');
                    $image_two_optimize = str_replace(['_',' ','(',',',')'],'-',$request->title);
                    $imageName2 = $image_two_optimize . '-' . 'image_two' . '.'.$image_two->getClientOriginalExtension();
                    Image::make($image_two)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName2);
                    $save_url2 = "http://localhost:8000/upload/product/" . $imageName2;
                }

                if($request->hasFile('image_three')){

                    $image_three = $request->file('image_three');
                    $image_three_optimize = str_replace(['_',' ','(',',',')'],'-',$request->title);
                    $imageName3 = $image_three_optimize . '-' . 'image_three' . '.'.$image_three->getClientOriginalExtension();
                    Image::make($image_three)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName3);
                    $save_url3 = "http://localhost:8000/upload/product/" . $imageName3;
                }

                if($request->hasFile('image_four')){

                    $image_four = $request->file('image_four');
                    $image_four_optimize =str_replace(['_',' ','(',',',')'],'-',$request->title);
                    $imageName4 = $image_four_optimize . '-' . 'image_four' . '.'.$image_four->getClientOriginalExtension();
                    Image::make($image_four)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName4);
                    $save_url4 = "http://localhost:8000/upload/product/" . $imageName4;
                    // dd($save_url4);
                }

                $productDetails = ProductDetails::insert([
                    'product_id'=>$product_id,
                    'image_one' => $save_url1,
                    'image_two' => $save_url2,
                    'image_three' => $save_url3,
                    'image_four' => $save_url4,
                    'short_description' => $request->short_description,
                    'color' =>  $request->color,
                    'size' =>  $request->size,
                    'long_description' => $request->long_description,
                ]);



                if($productDetails){
                    return redirect()->route('product.all')->with(['message'=>'Product Details Successfully Saved','alert-type'=>'success']);
                }
            
        }

        public function getAllProducts()
        {
            $products = ProductList::latest()->paginate(10);

            return view('backend.product.product_all',compact('products'));
        }

        public function editProduct($id)
        {
            $product = ProductList::findOrFail($id);
            $product_details = ProductDetails::where('product_id',$id)->first();
            $category = Category::orderBy('category_name','ASC')->get();
            $subCategory = SubCategory::orderBy('category_name','ASC')->get();
            return view('backend.product.product_edit',compact('product','product_details','category','subCategory'));
        }

        public function updateProduct(Request $request, $id)
        {
            $request->validate([
                'product_code'=>'required',
            ],
            [
                'product_code.required'=>"product Code must be filled",
            ]);

            if($request->hasFile('image')){

                $productImage = ProductList::find($id);
                $getImagePath = $this->getImage($productImage->image);
                // dd($getImagePath);
                unlink($getImagePath);

                $imageFile = $request->file('image');
                
                $optimizeImg = str_replace(['_',' ','(',',',')'],'-',$request->title);

                $imageExtension = $imageFile->getClientOriginalExtension();
                $imageName = $optimizeImg . '-' . rand(99,9999) . '.' . $imageExtension;
                Image::make($imageFile)->resize(450,null,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName);

                $save_url = "http://localhost:8000/upload/product/" . $imageName;
                // dd($save_url);

            }else{
                $oldimage = ProductList::find($id);
                $save_url = $oldimage->image;
                // dd($save_url);
            }

            // dd($save_url);
            $update_product = ProductList::where('id',$id)->update([

                    'title' => $request->title,
                    'price' => $request->price,
                    'special_price' => $request->special_price,
                    'category' => $request->category,
                    'subcategory' => $request->subcategory,
                    'remark' => $request->remark,
                    'brand' => $request->brand,
                    'product_code' => $request->product_code,
                    'image' => $save_url, 
            ]);

            /* Product Details Image Optimization Here */
 /* Image One  */
 $product_list_image = ProductList::find($id);
 $product_detaiils_image = ProductDetails::where('product_id',$id)->first();
 
  $unlink_image_one = $this->getImage($product_detaiils_image['image_one']);
  $unlink_image_two = $this->getImage($product_detaiils_image['image_two']);
  $unlink_image_three = $this->getImage($product_detaiils_image['image_three']);
  $unlink_image_four = $this->getImage($product_detaiils_image['image_four']);

/*  $unlink_all_images = [$unlink_image,$unlink_image_one,$unlink_image_two,$unlink_image_three,$unlink_image_four]; */

 if($request->hasFile('image_one')){
    // dd($unlink_image_one);
    unlink($unlink_image_one);

    $image_one = $request->file('image_one');
    $image_one_optimize = str_replace(['_',' ','(',',',')'],'-',$request->title);
    $imageName1 = $image_one_optimize . '-' . 'image_one' . '.'.$image_one->getClientOriginalExtension();
    Image::make($image_one)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName1);
    $save_url1 = "http://localhost:8000/upload/product/" . $imageName1;

}else{
    $save_url1 = $product_detaiils_image->image_one;
}

if($request->hasFile('image_two')){

        //  dd($unlink_image_two);
        unlink($unlink_image_two);

    $image_two = $request->file('image_two');
    $image_two_optimize = str_replace(['_',' ','(',',',')'],'-',$request->title);
    $imageName2 = $image_two_optimize . '-' . 'image_two' . '.'.$image_two->getClientOriginalExtension();
    Image::make($image_two)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName2);
    $save_url2 = "http://localhost:8000/upload/product/" . $imageName2;

}else{
    $save_url2 = $product_detaiils_image->image_two;
}

if($request->hasFile('image_three')){
    // dd($unlink_image_three);
     unlink($unlink_image_three);

    $image_three = $request->file('image_three');
    $image_three_optimize = str_replace(['_',' ','(',',',')'],'-',$request->title);
    $imageName3 = $image_three_optimize . '-' . 'image_three' . '.'.$image_three->getClientOriginalExtension();
    Image::make($image_three)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName3);
    $save_url3 = "http://localhost:8000/upload/product/" . $imageName3;

}else{
    $save_url3 = $product_detaiils_image->image_three;
}

if($request->hasFile('image_four')){
    // dd($unlink_image_four);
     unlink($unlink_image_four);

    $image_four = $request->file('image_four');
    $image_four_optimize =str_replace(['_',' ','(',',',')'],'-',$request->title);
    $imageName4 = $image_four_optimize . '-' . 'image_four' . '.'.$image_four->getClientOriginalExtension();
    Image::make($image_four)->resize(450,function($contraint){$contraint->aspectRatio();})->save('upload/product/' . $imageName4);
    $save_url4 = "http://localhost:8000/upload/product/" . $imageName4;
    // dd($save_url4);

}else{
    $save_url4 = $product_detaiils_image->image_four;
}


            if($update_product){

             /*   foreach($unlink_all_images as $unlink_image){
                unlink($unlink_image);
               }; */

               ProductDetails::where('product_id',$id)->update([

                'image_one'=>$save_url1,
                'image_two'=>$save_url2,
                'image_three'=>$save_url3,
                'image_four'=>$save_url4,
                'short_description' => $request->short_description,
                'color' =>  $request->color,
                'size' =>  $request->size,
                'long_description' => $request->long_description,
               ]);

               $notification = [
                'message'=>'Product List and details Updated',
                'alert-type'=>'success'
               ];

            }else{
                $notification = [
                    'message'=>'Product List and details Not Update',
                    'alert-type'=>'error'
                   ];
            }

            return redirect()->route('product.all')->with($notification);

        }


        public function deleteProduct($id)
        {
            $product = ProductList::findOrFail($id);
            $ImageUrl = $product->image;
            $imageUrlArr = explode('/',$ImageUrl);
            $image = $imageUrlArr[count($imageUrlArr) - 1];
            $image_path = 'upload/product/'.$image;

           $product_details = ProductDetails::where('product_id',$id)->first();
           $details_image = $product_details;
           $image1arr = explode('/',$details_image['image_one']);
        //    dd($image1arr);
           $image_one = $image1arr[count($image1arr)-1];
        //    dd($image_one);
         $image_one_path = 'upload/product/'.$image_one;

           $image2arr = explode('/',$details_image['image_two']);
           $image_two = $image2arr[count($image2arr)-1];
           $image_two_path = 'upload/product/'.$image_two;

           $image3arr = explode('/',$details_image['image_three']);
           $image_three = $image3arr[count($image3arr)-1];
            $image_three_path ='upload/product/'.$image_three;

           $image4arr = explode('/',$details_image['image_four']);
           $image_four = $image4arr[count($image4arr)-1];
            $image_four_path = 'upload/product/'.$image_four;
            // dd($image_four_path);
           if($product->delete()){

            ProductDetails::where('product_id',$id)->delete();
            unlink($image_path);
            unlink($image_one_path);
            unlink($image_two_path);
            unlink($image_three_path);
            unlink($image_four_path);
            $notification = [
                'message'=>'Product List and Details deleted Successfully',
                'alert-type'=>'success',
            ];

           }else{
            $notification = [
                'message'=>'Sorry! Product List and Details not deleted',
                'alert-type'=>'error',
            ];
           }
           return redirect()->back()->with($notification);
          
        }

        public function getImage($image)
        {
        //    $product_details_image = ProductDetails::where('product_id',$id)->first();
           $imageArr = explode('/',$image);
           $getImage = $imageArr[count($imageArr)-1];
            $image_path = 'upload/product/'.$getImage;
           return $image_path;
        }
}
