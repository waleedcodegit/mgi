<?php

namespace App\Http\Controllers\Admin;

use App\Game;
use App\Http\Controllers\Controller;
use App\Tournament;
use App\TournamentField;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Support\Carbon;

class TournamentController extends Controller
{
    public function get_tournaments(){
        $tournaments = Tournament::orderBy('id', 'DESC')->where('delete_status',0)->with('game')->get();
        $response = ['msg'=> 'Tournament Sent', 'status'=> '200' , 'tournaments'=> $tournaments];
        return $response;
    }

    public function get_tournament_with_game_id(Request $request){
        $tournaments = Tournament::where('game_id', $request->game_id)->where('status', 'Publish')->where('delete_status',0)->with('game')->get();
        $response = [
            'msg'=> 'Tournaments',
            'status'=> '200',
            'tournaments'=> $tournaments
        ];
        return $response;
    }
    public function get_today_tournaments_by_id(Request $request) {
        $today_tournaments = Tournament::where('game_id',$request->id)->where('start_date', Carbon::now()->format('Y-m-d'))->where('status', 'Publish')->where('delete_status',0)->orderBy('start_time')->with('game')->get();
        $response = [
            'msg'=> 'Today Tournament',
            'status'=> '200',
            'todayTournaments'=> $today_tournaments
        ];
        return $response;
    }
    public function get_this_week_tournaments_by_id(Request $request) {
        $weekTournaments = Tournament::where('game_id',$request->id)->whereBetween('start_date', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->where('status', 'Publish')->where('delete_status',0)->orderBy('start_date')->orderBy('start_time')->with('game')->get();
        // return $week_tournaments;
        $response = [
            'msg'=> 'Today Tournament',
            'status'=> '200',
            'weekTournaments'=> $weekTournaments
        ];
        return $response;
    }
    public function get_this_month_tournaments_by_id(Request $request) {
        $month_tournaments = Tournament::where('game_id',$request->id)->whereYear('start_date', Carbon::now()->year)
                    ->whereMonth('start_date', Carbon::now()->month)
                    ->where('status', 'Publish')->where('delete_status',0)->orderBy('start_date')->orderBy('start_time')
                    ->with('game')->get();
        $response = [
            'msg'=> 'Today Tournament',
            'status'=> '200',
            'month_tournaments'=> $month_tournaments
        ];
        return $response;
    }

    public function get_today_tournaments(Request $request) {
        $today_tournaments = Tournament::where('start_date', Carbon::now()->format('Y-m-d'))->where('status', 'Publish')->where('delete_status',0)->orderBy('start_time','DESC')->with('game')->get();
        $response = [
            'msg'=> 'Today Tournament',
            'status'=> '200',
            'todayTournaments'=> $today_tournaments
        ];
        return $response;
    }
    public function get_this_week_tournaments(Request $request) {
        $week_tournaments = Tournament::whereBetween('start_date', [Carbon::now()->startOfWeek(), Carbon::now()->endOfWeek()])->where('status', 'Publish')->where('delete_status',0)->with('game')->get();
        $response = [
            'msg'=> 'Today Tournament',
            'status'=> '200' ,
            'weekTournaments'=> $week_tournaments
        ];
        return $response;
    }
    public function get_this_month_tournaments(Request $request) {
        $month_tournaments = Tournament::whereYear('start_date', Carbon::now()->year)
                    ->whereMonth('start_date', Carbon::now()->month)
                    ->where('status', 'Publish')->where('delete_status',0)
                    ->with('game')->get();
        $response = [
                'msg'=> 'Today Tournament',
                'status'=> '200' ,
                'monthTournaments'=> $month_tournaments
            ];
        return $response;
    }
    public function save_tournament(Request $request){
        $validator = Validator::make($request->all(), [
            'game_id' => 'required',
            'title' => 'required',
            'description' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'start_time' => 'required',
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            if($request->game_id){
        
                $tournament = new Tournament();
                $tournament->game_id = $request->game_id;
                $tournament->title = $request->title;
                $tournament->description = $request->description;
                $tournament->start_date = $request->start_date;
                $tournament->end_date = $request->end_date;
                $tournament->start_time = $request->start_time;
                $name = 'noimage.png';
                if ($request->image) {
                    $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->save(public_path('images/').  $name);
                }
                else{
                    $response = ['status' => 219 , 'msg' => 'Header Image Field is Required'];
                    return $response;  
                }
                $tournament->header_image = $name;
                $tournament->save();
                $response =  ['status'=> '200', 'msg'=> 'Tournament Basic Details Saved' , 'tournament_id' => $tournament->id];
                return $response;
              }
              else{
                $response =  ['status'=> '500', 'msg'=> 'Select Game to Proceed Further.'];
                return $response; 
              }
        }
     
    }
    public function update_tournament_info(Request $request){
        $validator = Validator::make($request->all(), [
            'contact_details' => 'required',
            'rules' => 'required',
            'critical_rules' => 'required',
            'prizez' => 'required'
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            if($request->id){ 
                $tournament = Tournament::find($request->id);
                $tournament->contact_details = $request->contact_details;
                $tournament->rules = $request->rules;
                $tournament->critical_rules = $request->critical_rules;
                $tournament->prizez = $request->prizez;
                $tournament->save();
                $response =  ['status'=> '200', 'msg'=> 'Tournament Information Saved' , 'tournament_id' => $tournament->id];
                return $response;  
            } 
                else{
                    $response =  ['status'=> '500', 'msg'=> 'Enter Tournament Basic Details To Proceed Further'];
                    return $response; 
                }
        }
       
    }
    public function update_tournament_modes(Request $request){
        $validator = Validator::make($request->all(), [
            'mode' => 'required',
            'fee' => 'required',
            'registration_limit' => 'required',
            'country' => 'required',
            'region' => 'required',
            'platforms' => 'required'
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            if($request->id){
                $tournament = Tournament::find($request->id);
                $tournament->mode= $request->mode;
                $tournament->fee= $request->fee;
                $tournament->registration_limit= $request->registration_limit;
                $tournament->country= $request->country;
                $tournament->region = $request->region;
                $tournament->platforms = $request->platforms;
                $tournament->save();
                $response =  ['status'=> '200', 'msg'=> 'Tournament Modes Saved' , 'tournament_id' => $tournament->id];
                return $response; 
            }
            else{
                $response =  ['status'=> '500', 'msg'=> 'Enter Tournament Basic Details To Proceed Further'];
                return $response; 
            }
        }

      
        
    }
    public function update_tournament_status(Request $request){
        $validator = Validator::make($request->all(), [
            'status' => 'required'
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{
            $tournament = Tournament::find($request->id);
            $tournament->status = $request->status;
            $tournament->save();
            $fields = $request->fields;
            TournamentField::where('tournament_id', $request->id)->delete();
            foreach($fields as $value){
                $tournament_field = new TournamentField();
                foreach($value as $key=>$val){  
                    if($key=="name" || $key="type"){
                        $tournament_field->$key = $val;
                    }        
                }
                $tournament_field->tournament_id = $request->id;
                $tournament_field->save();
                
            }
            $response =  ['status'=> '200', 'msg'=> 'Tournament Status Saved'];
            return $response;
        }
       

    }
    public function get_tournament_by_id(Request $request){
        $tournament = Tournament::where('id',$request->id)->with('game','tournament_field')->first();
        $response =  [
            'status'=> '200',
             'msg'=> 'Tournament Sent' , 
             'tournament' => $tournament
            ];
        return $response;   
    }
   
    public function update_tournament(Request $request )
    
     {

                $user =Tournament::find($request->id);
                $user->title  = $request->title;
                $user->description = $request->description;
                $user->start_date = $request->start_date;
                $user-> end_date = $request-> end_date;
                $user->start_time = $request->start_time;
                $user->contact_details = $request->contact_details;
                $user->rules = $request->rules;
                $user->critical_rules = $request->critical_rules;
                $user->prizez = $request->prizez;
                $user->mode = $request->mode;
                $user->status = $request->status;
                $user->registration_limit = $request->registration_limit;
                $user->region = $request->region;
                $user->platforms = $request->platforms;
                if ($request->header_image == $user->header_image) {
                
                }else{
                    $users = time() . '.' . explode('/', explode(':', substr($request->header_image, 0, strpos($request->header_image, ';')))[1])[1];
                    \Image::make($request->header_image)->save(public_path('images/').  $users);
                    $user->header_image = $users;
                }
                $user-> country = $request-> country;
             
                $user->save();
                $fields = $request->fields;
              TournamentField::where('tournament_id', $request->id)->delete();
             
                foreach($fields as $value){
                $tournament_field = new TournamentField();
                foreach($value as $key=>$val){  
                    if($key=="name" || $key=="type"){
                        $tournament_field->$key = $val;
                    }        
                }
                $tournament_field->tournament_id = $request->id;
                $tournament_field->save();
                
            }
               
                $response = [ 
                        'msg'=>'Tournament Updated',
                        'status'=>'200'
                    ];
                    return $response;
    
        
        //  $tournament_fields =TournamentField::find($request->id);
        //  $tournament_fields-> name = $request-> name;
        //  $tournament_fields-> type = $request-> type;
        //  $ftournament_fields->save();
        //  $response = [ 
        //     'msg'=>'Tournament Updated',
        //     'status'=>'200'
        // ];
        // return $response;
    
     }
    
     
    // public function edit_feilds($id) 
    // {
    //     $data = TournamentField::find($id);
    //     return response ()->json([
    //             'status' => 200,
    //             'msg' => 'Feilds detail', 
    //             'data' => $data
    //     ]);
            
    
    public function edit_tournament(Request $request) 
    {
        $data = Tournament::where('id',$request->id)->with('tournament_field')->first();
        return response ()->json([
                'status' => 200,
                'msg' => 'Tournament detail', 
                'data' => $data
        ]);
            
    }
    // public function delete_tournament(Request $request){
    //     $data = Tournament::where('id',$request->id)->delete();
    //     $response = [ 'msg'=>'Tournament', 'status'=>'200'];
    //     return $response;
    // }
    public function delete_tournament(Request $request) {
        
        $data = Tournament::where('id', $request->id)->update([
            'delete_status' => true,
           
        ]);
        $response = [
            'status' => 200,
            'msg' => 'Successfully Deleted'
        ];
        return $response;
    }

}
