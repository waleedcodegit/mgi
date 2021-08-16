<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Subscription;


class SubscriptionController extends Controller
{
    public function add_subscription(Request $request){
        $validator = Validator::make($request->all(), [
            'duration' => 'required',
            'days' => 'required',
            'price' => 'required',
            'description' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() , 
            'errors' => $validator->errors()];
            return $response;
        }else{
            $subscription = new Subscription();
            $subscription->duration = $request->duration;
            $subscription->days  = $request->days;
            $subscription->price = $request->price;
            $subscription->description = $request->description;
            
            $subscription->save();
            $response = ['status' => 200 , 'msg' => 'Subscription Added successfully.' , 
                         'subscription' => $subscription];
            return $response;   
        }
    }
    public function subscription_list(Request $request){
        $subscriptions = Subscription::all();
        $response = [ 'msg'=>'Subscription', 'status'=>'200', 'subscription'=> $subscriptions];
        return $response;
    }
}
