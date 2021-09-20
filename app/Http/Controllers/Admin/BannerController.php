<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\Banner;

class BannerController extends Controller
{
    public function get_all_banner(){
        $sliderImages  = Banner::orderBy('id', 'DESC')->where('delete_status',0)->get();
        $response = [ 
            'msg'=>'Video Sent',
            'status'=>'200',
            'sliderImages'=> $sliderImages
        ];
        return $response;
    }
    public function add_banner(Request $request){
        $validator = Validator::make($request->all(), [
            'image' => 'required'
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $banner = new Banner();
            if ($request->image) {
                $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                \Image::make($request->image)->save(public_path('images/').  $name);
            }
            $banner->image = $name;
            $banner->save();
            $response = [ 
                'msg'=>'Banner Saved', 
                'status'=>'200'
            ];
            return $response;
        }
    }
    public function get_banner_by_id(Request $request){
        $banner = Banner::find($request->id);
        $response = [ 'msg'=>'Banner', 'status'=>'200', 'banner'=> $banner];
        return $response;
    }
    public function update_banner(Request $request){
        $validator = Validator::make($request->all(), [
            'image' => 'required'
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $b = Banner::find($request->id);
            if ($request->image == $b->image) {
                
            }else{
                $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                \Image::make($request->image)->save(public_path('images/').  $name);
                $b->image = $name;
            }
            $b->save();
            $response = [ 'msg'=>'Banner Updated', 'status'=>'200'];
            return $response;
        }
    }
    public function delete_banner(Request $request){
        $banner = Banner::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    }
}
