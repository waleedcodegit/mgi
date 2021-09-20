<?php

namespace App\Http\Controllers\Admin;

use App\Game;
use App\Http\Controllers\Controller;
use App\Tournament;
use Illuminate\Http\Request;
use Validator;

class GameController extends Controller
{
    public function create_game(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'image' => 'required'
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            $game = new Game();
            $game->title = $request->title;
            $game->description = $request->description;
            $name = 'noimage.png';
            if ($request->image) {
                
                    $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->save(public_path('images/').  $name);
                
            }
            $game->image = $name;
            $game->save();
            $response = ['msg'=> 'Game Saved', 'status'=> '200'];
            return $response;
        }
    }
    public function update_game(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'description' => 'required',
            'image' => 'required'
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
            $game = Game::find($request->id);
            if ($request->image == $game->image) {
                
            }else{
                $name = 'noimage.png';
                $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                \Image::make($request->image)->save(public_path('images/').  $name);
                $game->image = $name;
            }
            $game->title = $request->title;
            $game->description = $request->description;
            $game->save();
            $response = ['msg'=> 'Game Updated', 'status'=> '200'];
            return $response;
        }
    }
    public function get_games(){
        $games = Game::where('delete_status',0)->get();
        $response = ['msg'=> 'Games Sent', 'status'=> '200' , 'games'=> $games];
        return $response;
    }
    public function get_game_by_id(Request $request){
        $game = Game::find($request->id);
        $response = ['msg'=> 'Game Sent', 'status'=> '200' , 'game'=> $game];
        return $response;
    }
    public function delete_game(Request $request) {
        
        $game = Game::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    }
   
}
