<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tournament;
use App\WatchStream;

class WatchStreamController extends Controller
{

public function create_watchstream(Request $request ){  
    $watchstream = WatchStream::where('tournament_id', $request->title)->where('delete_status', 0)->first();
  
    if($watchstream){
     $response = ['msg'=> 'Stream Already Exist', 'status'=> '200'];
     return $response;
    }else{
        $watchstream = new WatchStream();
        $watchstream->tournament_id = $request->title;
        $watchstream->videolink = $request->videolink;
         
        $watchstream->save();
         $response = ['msg'=> ' Watchstream Saved', 'status'=> '200'];
         return $response;
        }
    }
   
        public function get_watchstream(){
            $watchstream = WatchStream::where('delete_status',0)->with('tournament')->get();
            $response = ['msg'=> 'WatchStream Sent', 'status'=> '200' , 'WatchStream'=>  $watchstream];
            return $response;
        }
        public function get_watchstream_by_id(Request $request){
            $watchstream = WatchStream::where('tournament_id', $request->id)->first();
            $response = [ 'msg'=>'Stream', 'status'=>'200', 'watchstream'=> $watchstream ];
            return $response;
        }     
        public function delete_watchstream(Request $request) {
        
        $watchstream = WatchStream::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    }    
    // public function delete_watchstream(Request $request){
    //     $watchstream = WatchStream::where('id',$request->id)->delete();
    //     $response = [ 'msg'=>'WatchStream Deleted', 'status'=>'200'];
    //     return $response;
    // }
     
}
