<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Video;
use Illuminate\Http\Request;
use Validator;

class VideoController extends Controller
{
    public function get_all_video(){
        $videos  = Video::orderBy('id', 'DESC')->get();
        $response = [ 'msg'=>'Video Sent', 'status'=>'200', 'videos'=> $videos];
        return $response;
    }
    public function add_video(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'video_youtube_id' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $video = new Video();
            $video->title = $request->title;
            $video->description = $request->description;
            $video->video_youtube_id = $request->video_youtube_id;
            $video->save();
            $response = [ 'msg'=>'Video Saved', 'status'=>'200'];
            return $response;
        }
    }
    public function get_video_by_id(Request $request){
        $video = Video::find($request->id);
        $response = [ 'msg'=>'Video Sent', 'status'=>'200', 'video'=> $video];
        return $response;
    }
    public function update_video(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'video_youtube_id' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $video = Video::find($request->id);
            $video->title = $request->title;
            $video->description = $request->description;
            $video->video_youtube_id = $request->video_youtube_id;
            $video->save();
            $response = [ 'msg'=>'Video Updated', 'status'=>'200'];
            return $response;
        }
    }
    public function delete_video(Request $request){
        $video = Video::find($request->id);
        $video->delete();
        $response = [ 'msg'=>'Video Deleted', 'status'=>'200'];
        return $response;
    }

    public function get_videos(){
        $video = Video::limit(3)->get();
        return $video;
    }

    public function get_videos_list(){
        $video = Video::limit(6)->get();
        return $video;
    }
    public function show($id){
        $video = Video::find($id);
        
        return response()->json([
         'status' =>200,
         'video' => $video
        ]);
       
    }

}
