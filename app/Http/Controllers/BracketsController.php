<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Game;
use App\Http\Controllers\Controller;
use App\Tournament;
use App\TournamentField;
use App\Brackets;
use Validator;
use DB;
use Illuminate\Support\Carbon;

class BracketsController extends Controller
{
    public function create_brackets(Request $request ){  
           $bracket = Brackets::where('tournament_id', $request->title)->first();
         
           if($bracket){
            $image = '';
            if ($request->image) {
                
                $image = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->save(public_path('images/').  $image);
                
            }
            $bracket->image = $image;
            $bracket->save();
            $response = ['msg'=> 'Bracket Already Exist an Update Image', 'status'=> '200'];
            return $response;
           }else{
            $bracket = new Brackets();
            $bracket->tournament_id = $request->title;
            $image = '';
            if ($request->image) {
                
                $image = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->save(public_path('images/').  $image);
                
            }
            $bracket->image = $image;
            $bracket->save();
            $response = ['msg'=> 'Bracket Saved', 'status'=> '200'];
            return $response;
           }
            
        }
           
        
        
        public function get_brackets(){
            $bracket = Brackets::where('delete_status',0)->with('tournament')->get();
            $response = ['msg'=> 'bracket Sent', 'status'=> '200' , 'brackets'=> $bracket];
            return $response;
        }
        public function get_brackets_by_id(Request $request){
            $bracket = Brackets::where('tournament_id', $request->id)->where('delete_status',0)->first();
            $response = [ 'msg'=>'Brackets', 'status'=>'200', 'bracket'=> $bracket ];
            return $response;
        }
        public function update_brackets(Request $request )
    
        {
            $bracket = Brackets::where('tournament_id', $request->title)->first();
            if($bracket){
                $image = '';
                if ($request->image) {
                    
                    $image = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                        \Image::make($request->image)->save(public_path('images/').  $image);
                    
                }
                $bracket->image = $image;
                $bracket->update();
                $response = ['msg'=> 'Bracket Updated', 'status'=> '200'];
                return $response;
               }else{
                $bracket = Brackets::find($request->title);
                $bracket->tournament_id = $request->title;
                $image = '';
                if ($request->image) {
                    
                    $image = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                        \Image::make($request->image)->save(public_path('images/').  $image);
                    
                }
                $bracket->image = $image;
                $bracket->save();
                $response = ['msg'=> 'Bracket  Updated', 'status'=> '200'];
                return $response;
               }
            }
        // public function delete_brackets(Request $request){
        //     $b = Brackets::where('id',$request->id)->delete();
        //     $response = [ 'msg'=>'Brackets Deleted', 'status'=>'200'];
        //     return $response;
        // }
        public function delete_brackets(Request $request) {
        
            $Brackets = Brackets::where('id', $request->id)->update([
                'delete_status' => true,
               
            ]);
            $response = [
                'status' => 200,
                'msg' => 'Successfully Deleted'
            ];
            return $response;
        }
       
        }
               
        
    

