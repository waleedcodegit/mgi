<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Order;
use App\OrderProduct;

class OrderController extends Controller
{
    public function create_order(Request $request){  
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
    
    $product = new OrderProduct();

    
    $product->order_id = $order->id;
    $product->product_id = $request->product_id;
    $product->price = $request->cart_totals;
    $product->sub_cart_totals = $request->sub_cart_totals;
    $product->quantity = $request->quantity;
    $product->save();

    $response = ['msg'=> 'Your Order Placed', 'status'=> '200'];
    return $response;
  }
}
