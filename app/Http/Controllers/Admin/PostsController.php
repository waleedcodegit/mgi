<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;
use Validator;
use App\ChangeAdsImage;

class PostsController extends Controller
{
    public function addnewpost(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'body' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            if($validator->errors()->first() == "The body field is required." ){
                $msg = "The Description field is required.";
                $response = ['status' => 219 , 'msg' => $msg];
                return $response;
            }
            else{
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;
            }
           
        }else{
        $name = 'noimage.png';
            if ($request->image) {
                    $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->save(public_path('images/').  $name); 
            }
            else{
                $msg = "The Image field is required.";
                $response = ['status' => 219 , 'msg' => $msg];
                return $response;
            }
            $post = new Post();
            $post->title = $request->title;
            $post->slug = str_replace(" ", "-", $request->title);
            $post->body= $request->body;
            $post->image = $name;
            $post->type = $request->type;
            $post->status = $request->status;
            $post->feature = $request->feature;
            $post->save();
            $response = ['status' => 200 , 'msg' => 'Post Created Successfully.'];
            return $response;
        }
    }
    public function get_allposts(){
        $posts = Post::where('delete_status',0)->orderBy('id', 'DESC')->get();
        return $posts;
    }
    public function get_posts(){
        $posts = Post::where('status','Public')->orderBy('id', 'DESC')->where('delete_status',0)->limit(50)->get();
        return $posts;
    }
    public function get_feature_posts(){
        $posts = Post::where('status','Public')->where('feature',1)->orderBy('id', 'DESC')->where('delete_status',0)->limit(3)->latest()->get();
        return $posts;
    }

    public function get_articals(){
        $posts = Post::where('status','Public')->where('feature',1)->orderBy('id', 'DESC')->where('delete_status',0)->limit(6)->paginate(15);
        return $posts;
    }

    public function get_post_by_id(Request $request){
        $post = Post::find($request->id);
        return $post;
    }

    public function update_post(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'body' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
        $post = Post::find($request->id);
        
            if ($request->image == $post->image) {
               
            }else{
                $name = 'noimage.png';
                $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                \Image::make($request->image)->save(public_path('images/').  $name);
                $post->image = $name;
            }
        
            $post->title = $request->title;
            $post->slug = str_replace(" ", "-", $request->title);
            $post->body= $request->body;
            
            $post->type = $request->type;
            $post->status = $request->status;
            $post->feature = $request->feature;
            $post->save();
            $response = ['status' => 200 , 'msg' => 'Post Updated Successfully.'];
            return $response;
        }
    }
    public function delete_post(Request $request){
        $post = Post::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    
    }
    public function get_post_by_slug(Request $request){
        $post = Post::where('slug',$request->slug)->where('delete_status',0)->first();
        return $post;
    }


    public function change_banner_ads(Request $request) {

        $ads = ChangeAdsImage::find(1);
        if ($request->header_image == $ads->header_image) {
                
        }else{
            $nameheader = time() . '.' . explode('/', explode(':', substr($request->header_image, 0, strpos($request->header_image, ';')))[1])[1];
            \Image::make($request->header_image)->resize(1400, 232)->save(public_path('images/').  $nameheader);
            ChangeAdsImage::where('id', 1)->update([
                'header_image' => $nameheader,
            ]);
            
        }

        if ($request->footer_image == $ads->footer_image) {
                
        }else{
            $namefooter = time() . '.' . explode('/', explode(':', substr($request->footer_image, 0, strpos($request->footer_image, ';')))[1])[1];
            \Image::make($request->footer_image)->resize(1400, 232)->save(public_path('images/').  $namefooter);
            ChangeAdsImage::where('id', 1)->update([
                'footer_image' => $namefooter,
            ]);
        }

        $data = ChangeAdsImage::first();
        $response = [
            'msg'=> 'Image Change',
             'status'=> '200',
             'data' => $data
            ];
        return $response;

    }

    public function get_change_banner_ads(Request $request) {
        $data = ChangeAdsImage::find(1);
        $response = [
            'msg'=> 'Images',
             'status'=> '200',
             'data' => $data
            ];
        return $response;
    }
    public function show($id){
        $posts = Post::find($id);
        
        return response()->json([
         'status' =>200,
         'posts' => $posts
        ]);
       
    }
    public function get_articals_latest(){
        $posts = Post::where('delete_status',0)->where('status','Public')->where('feature',1)->orderBy('id', 'DESC')->latest()->limit(3)->get();
        return $posts;
    }
    
  
}
