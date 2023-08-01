<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProductCart;
use App\Models\ProductList;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    public function cartCount(Request $request)
    {
        $carts = ProductCart::where('email',$request->email)->count();
        return $carts;
    }

    public function cartListByUser(Request $request)
    {
        $cartList = ProductCart::where('email',$request->email)->get();
        return  $cartList;
    }

    public function removeCartList(Request $request)
    {
        $removeCart = ProductCart::where('id',$request->id)->delete();
        return $removeCart;
    }

    public function cartItemPlus(Request $request)
    {
        $CartId = $request->id;
        $cartQuantity = $request->quantity;
        $cartPrice = $request->price;
        $newQuantity = $cartQuantity + 1;
        $total_price = $cartPrice * $newQuantity;
        $updatedCart = ProductCart::where('id',$CartId)->update(['quantity'=>$newQuantity,'total_price'=>$total_price]);
        return $updatedCart;
    }

    public function cartItemMinus(Request $request)
    {
        $cartId = $request->id;
        $quantity = $request->quantity;
        $price = $request->price;
        $newQuantity = $quantity - 1;
        $total_price = $price * $newQuantity;
        $updatedCart = ProductCart::where('id',$cartId)->update(['quantity'=>$newQuantity,'total_price'=>$total_price]);
        return $updatedCart;
    }
 // email	name	payment_method	delivery_address	city	delivery_charge	order_date	order_time	order_status	created_at	updated_at	
    public function cartOrder(Request $request)
    {
        $city = $request->input('city');
        $name = $request->input('name');
        $email = $request->input('email');
        $payment_method = $request->input('payment_method');
        $delivery_address = $request->input('delivery_address');
        $delivery_charge = $request->input('delivery_charge');
        date_default_timezone_set('Asia/Dhaka');
        $order_date = date('d-m-Y');
        $order_time = date('h:i:sa');
        $invoice_no = $request->input('invoice_no');

// product_cats = image product_name	product_code	size	color	quantity	unite_price	total_pric

        $cartList = ProductCart::where('email',$email)->get();

        foreach($cartList as $cartListItem){
            $cartInsertDelete = "";
            $cartOrderts = DB::table('cart_orders')->insert([
                'invoice_no'=>  'mkpd' . $invoice_no,
                'product_name'=> $cartListItem['product_name'],
                'product_code'=> $cartListItem['product_code'],
                'size'=>         $cartListItem['size'],
                'color'=>	     $cartListItem['color'],
                'quantity'	=>   $cartListItem['quantity'],
                'unit_price'=>   $cartListItem['unit_price'],
                'total_price'=>  $cartListItem['total_price'],
                'email'	=>       $cartListItem['email'],
                'name'=>         $name,
            'payment_method'=>   $payment_method,
            'delivery_address'=> $delivery_address,
                'city'	=>       $city,
            'delivery_charge'=>  $delivery_charge,
                'order_date'=>   $order_date,
                'order_time'=>   $order_time,
                'order_status'=> 'pending',

            ]);

            if($cartOrderts==1){
                $cartDeletedFromProductCart = ProductCart::where('id',$cartListItem['id'])->delete();
                if($cartDeletedFromProductCart==1){
                    $cartInsertDelete = 1;
                }else{
                    $cartInsertDelete = 0;
                }

            }

        }
        
        return $cartInsertDelete;

    }

    public function orderListByUser(Request $request)
    {
        $carts = DB::table('cart_orders')->where('email',$request->email)->orderBy('id','DESC')->get();
        return $carts;
    }

    public function orderDetails($id)
    {
        $order = DB::table('cart_orders')->where('id',$id)->first();
        return view('backend.orders.order_details',compact('order'));
    }

    public function pendingOrder()
    {
        $orders = DB::table('cart_orders')->where('order_status','pending')->get();
        return view('backend.orders.pending_orders',compact('orders'));
    }
    public function processingOrder()
    {
        $orders = DB::table('cart_orders')->where('order_status','processing')->get();
        return view('backend.orders.processing_orders',compact('orders'));
    }
    public function completeOrder()
    {
        $orders = DB::table('cart_orders')->where('order_status','complete')->get();
        return view('backend.orders.complete_orders',compact('orders'));
    }

public function pendingToProcessing($id)
{
    DB::table('cart_orders')->where('id',$id)->update(['order_status'=>'processing']);
    $notification = array(
        'message' => 'Order Processing Successfully',
        'alert-type' => 'success'
    );

    return redirect()->route('pending.order')->with($notification);
}

public function processingToComplete($id)
{
    DB::table('cart_orders')->find($id)->update(['order_status','complete']);
    $notification = array(
        'message' => 'Order Complete Successfully',
        'alert-type' => 'success'
    );

    return redirect()->route('complete.order')->with($notification);
}

}

