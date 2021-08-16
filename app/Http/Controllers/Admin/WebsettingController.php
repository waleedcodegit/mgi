<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Websetting;
use Illuminate\Http\Request;
use Validator;

class WebsettingController extends Controller
{
    public function slider_image(Request $request){
        $validator = Validator::make($request->all(), [
            'image' => 'required',
            'image2' => 'required',
            'image3' => 'required'
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $settings = Websetting::find(1);
            // $name = 'esport-team-landing-main-slider-slide-1.jpg';
            if ($request->image==null || $request->image == $settings->slider_image1) {
                
            }
            else{
                $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                \Image::make($request->image)->save(public_path('images/').  $name);
                $settings->slider_image1 = $name;
            }
            // $name = 'esport-team-landing-main-slider-slide-2.jpg';
            if ($request->image2==null || $request->image2 == $settings->slider_image2) {
                
            }else{
            
                $name = time() . '.' . explode('/', explode(':', substr($request->image2, 0, strpos($request->image2, ';')))[1])[1];
                \Image::make($request->image2)->save(public_path('images/').  $name);
                $settings->slider_image2 = $name;
            }
            // $name = 'esport-team-landing-main-slider-slide-3.jpg';
            if ( $request->image3 ==null || $request->image3 == $settings->slider_image3) {
                
            }else{
            
                $name = time() . '.' . explode('/', explode(':', substr($request->image3, 0, strpos($request->image3, ';')))[1])[1];
                \Image::make($request->image3)->save(public_path('images/').  $name);
                $settings->slider_image3 = $name;
            }
            $settings->save();
            $response = ['msg'=> 'Data Saved' , 'status'=>'200'];
            return $response;
        }
    }
    public function privacy_policy(Request $request){
        $validator = Validator::make($request->all(), [
            'privacy_policy' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $settings = Websetting::find(1);
            $settings->privacy_policy = $request->privacy_policy;
            $settings->save();
            $response = ['msg'=> 'Data Saved' , 'status'=>'200'];
            return $response;
        }
    }
    public function terms_conditions(Request $request){
        $validator = Validator::make($request->all(), [
            'terms_and_conditions' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $settings = Websetting::find(1);
            $settings->terms_and_conditions = $request->terms_and_conditions;
            $settings->save();
            $response = ['msg'=> 'Data Saved' , 'status'=>'200'];
            return $response;
        }
    }
    public function social_media_links(Request $request){
        $validator = Validator::make($request->all(), [
            'facebook_link' => 'required',
            'twitter_link' => 'required',
            'linkedin_link' => 'required',
            'youtube_link' => 'required',
            'gaming_link' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $settings = Websetting::find(1);
            $settings->facebook_link = $request->facebook_link;
            $settings->twitter_link = $request->twitter_link;
            $settings->linkedin_link = $request->linkedin_link;
            $settings->youtube_link = $request->youtube_link;
            $settings->gaming_link = $request->gaming_link;
            $settings->save();
            $response = ['msg'=> 'Data Saved' , 'status'=>'200'];
            return $response;
        }
    }
    public function websettings(){
        $settings = Websetting::find(1);
        $response = ['msg'=> 'Data Sent' , 'status'=>'200', 'websettings'=> $settings];
        return $response;
    }
}
