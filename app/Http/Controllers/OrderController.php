<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;
use App\OrderProduct;

class OrderController extends Controller
{
    public function create_order(Request $request){  
     $cart = $this->get_cookie_session_cart($request);
    $order = new Order();
    $order->customer_id	 = $request->user_id;
    $order->first_name = $request->first_name;
    $order->last_name = $request->last_name;
    $order->email = $request->email;
    $order->phone = $request->phone;
    $order->address = $request->address;
    $order->city = $request->city;
    $order->country = $request->country;
    $order->postcode = $request->postcode;
    $order->totals = $request->totals;
    $order->subtotal = $request->subtotal;
   
    $order->save();

   
    foreach($cart['cart'] as $c){
    $product = new OrderProduct();
    $product->order_id = $order->id;
    $product->product_id = $c->product_id[0];
    $product->price = $c->cart_totals;
    $product->sub_cart_totals = $c->sub_cart_totals;
    $product->quantity = $c->quantity;
    $product->save();
  }
  $response = ['status' => 200 , 'msg' => 'Order Placed SuccessFully'];
  return $response;
  }
}
