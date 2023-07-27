<?php
namespace App\Http\Controllers;
use App\Models\ProductReview;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function productWiseReview(Request $request)
    {
        $product_code = $request->product_code;
        $reviews = ProductReview::where('product_code',$product_code)->orderBy('id','desc')->limit(4)->get();

        return $reviews;
    }

    public function postReviews(Request $request)
    {
        $product_name = $request->input('product_name');
        $product_code = $request->input('product_code');
        $user_name = $request->input('reviewer_name');
        $reviewer_photo = $request->input('reviewer_photo');
        $reviewer_rating = $request->input('reviewer_rating');
        $reviewer_comments = $request->input('reviewer_comments');

        $result = ProductReview::insert([
            'product_name' => $product_name,
            'product_code' => $product_code,
            'reviewer_name' => $user_name,
            'reviewer_photo' => $reviewer_photo,
            'reviewer_rating' => $reviewer_rating,
            'reviewer_comments' => $reviewer_comments,

         ]);
         return $result;

    }

    public function getAllReviews(Request $request)
    {
        $review = ProductReview::latest()->get();
        // return $allReviews;
        return view('backend.review.review_all',compact('review'));
    }
}
