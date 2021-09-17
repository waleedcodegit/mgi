<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Tournament;
use App\Announcement;

class AnnouncementsController extends Controller
{
    public function create_announcement(Request $request){  
            
        $announcement = new Announcement();
        $announcement->tournament_id = $request->title;
        $announcement->name = $request->name;
        $announcement->description = $request->description;
        $announcement->save();
        $response = ['msg'=> 'Announcement Saved', 'status'=> '200'];
        return $response;
    }
    public function get_announcement(Request $request){
        $announcement = Announcement::where('tournament_id',$request->id)->get();
        $resopnse  = [
            'msg'=> 'Announcement',
            'status' => '200',
             'announcement' => $announcement
        ];
        return  $resopnse;
        
    }
    public function get_announcements(){
        $announcement = Announcement::all();
        $response = ['msg'=> 'announcement Sent', 'status'=> '200' , 'announcement'=>  $announcement];
        return $response;
    }
    public function get_announcement_by_id(Request $request){
        $announcement = Announcement::find($request->id);
        $response = [ 'msg'=>'Announcement', 'status'=>'200', 'announcement'=> $announcement ];
        return $response;
    }
             public function update_announcement(Request $request)
    
         {
              $announcement = Announcement::find($request->id);
              $announcement->name = $request->name;
              $announcement->description = $request->description;
              $announcement->save();
              $response = ['msg'=> 'Announcement Updated', 'status'=> '200'];
              return $response;
    
     }
     public function delete_announcement(Request $request){
        $announcement = Announcement::where('id',$request->id)->delete();
        $response = [ 'msg'=>'Brackets Deleted', 'status'=>'200'];
        return $response;
    }
    
}
