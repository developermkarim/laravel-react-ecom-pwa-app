<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

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

    public function getAllCategory()
    {
        $categories = Category::latest()->get();
        return view('backend.category.category_view',compact('categories'));
    }

    public function addCategory()
    {
        return view('backend.category.category_add');
    }

    public function storeCategory(Request $request)
    {
        
        $request->validate([
            'category_name'=>'required',
        ],
     [
        'category_name.required'=>"category Name must be inserted",
     ]
    );

        if($request->file('category_image')){

         /*    $img = Image::make('public/foo.jpg')->resize(320, 240)->insert('public/watermark.png'); */
            $mainImg = $request->file('category_image');
            $imageStr = str_replace(array(' ','_'),'-',$request->category_name);
            $imgOriginal = $imageStr . "-" . rand(500,999) . "." . $mainImg->getClientOriginalExtension();
            Image::make($mainImg)->resize(320, 240)->save('upload/category/' . $imgOriginal);

            $save_url = "http://localhost:8000/upload/category/" . $imgOriginal; 
           
        }

        $category = Category::insert([
            'category_name'=>$request->category_name,
            'category_image'=>$save_url,
        ]);

        if($category){
            $notifcation  = [
                'message'=>"Category Saved Successfully",
                'alert-type'=>"success",
            ];
            return redirect()->route('category.all')->with($notifcation);
        }
    }

    public function editCategory($id)
    {
        $categoryEdit = Category::findOrFail($id);
        return view('backend.category.category_add',compact('categoryEdit'));
    }

    public function updateCategory(Request $request,$id)
    {
        $request->validate([
            'category_name'=>'required',
        ],[
            'category_name.required'=>'Category Name can\'t be empty',
        ]);

        $category = Category::findOrFail($id);
        $category->category_name = $request->category_name;
        $image_path = public_path('upload/category/' . $category->category_image);
        if($request->file('category_image')){
            unlink($image_path);
            $fileName = $request->file('category_image');
            $category_name =  str_replace(['_',' '],'-',$request->category_name);
            $mainImage = $category_name.'-'.rand(600,999).'.'. $fileName->getClientOriginalExtension();
            Image::make($fileName)->resize(320, 240)->save('upload/category/' . $mainImage);
            // Image::make($fileName)->resize(300, 200)->save('upload/category/',$mainImage);
            $save_img = "http://localhost:8000/upload/category/" . $mainImage;

        }else{

            $save_img = $request->old_image;
        }

        $category->category_image = $save_img;

        $notification = [
            'message'=>'Category Updated Successfully',
            'alert-type'=>"success",
        ];
        if($category->save()){
            return  redirect()->route('category.all')->with($notification);
        }
    

    }  

         public function deleteCategory($id){
        $category = Category::findOrFail($id);
        //   $image_path = public_path('upload/category/' . $category->category_image);
  /*     $image =   unlink($category->category_image);
      dd($image); */
            if($category->delete()){

  /*               unlink($category->category_image); */

            }

            return redirect()->route('category.all')->with(['message'=>"Category Deleted Successfully",'alert-type'=>"success"]);
        }


        ///////////// Start Sub Category All Methods. ////////////////


    public function GetAllSubCategory(){
        $subcategory = Subcategory::latest()->get();
             return view('backend.subcategory.subcategory_view',compact('subcategory'));
     
         } //End Method 
     
     
         public function AddSubCategory(){
     
             $category = Category::latest()->get();
              return view('backend.subcategory.subcategory_add',compact('category'));
         } //End Method 
     
     
         public function StoreSubCategory(Request $request){
     
     
             $request->validate([
                 'subcategory_name' => 'required',
             ],[
                 'subcategory_name.required' => 'Input SubCategory Name'
     
             ]);
     
             
     
             Subcategory::insert([
                 'category_name' => $request->category_name,
                 'subcategory_name' => $request->subcategory_name,
             ]);
     
             $notification = array(
                 'message' => 'SubCategory Inserted Successfully',
                 'alert-type' => 'success'
             );
     
             return redirect()->route('all.subcategory')->with($notification);
     
         } //End Method 
     
     
         public function EditSubCategory($id){
     
             $category = Category::orderBy('category_name','ASC')->get();
             $subcategory = Subcategory::findOrFail($id);
             return view('backend.subcategory.subcategory_edit',compact('category','subcategory'));
     
         } //End Method 
     
         public function UpdateSubCategory(Request $request){
     
             $subcategory_id = $request->id;
     
             Subcategory::findOrFail($subcategory_id)->update([
                 'category_name' => $request->category_name,
                 'subcategory_name' => $request->subcategory_name,
             ]);
     
             $notification = array(
                 'message' => 'SubCategory Updated Successfully',
                 'alert-type' => 'success'
             );
     
             return redirect()->route('all.subcategory')->with($notification);
     
         } //End Method 
     
     
         public function DeleteSubCategory($id){
     
             Subcategory::findOrFail($id)->delete();
              $notification = array(
                 'message' => 'SubCategory Deleted Successfully',
                 'alert-type' => 'success'
             );
     
             return redirect()->back()->with($notification);
     
         } //End Method 
     
     

}
