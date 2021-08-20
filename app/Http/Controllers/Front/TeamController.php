<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Team;
use Validator;

class TeamController extends Controller
{
    public function get_user_team(Request $request) {
        $data = Team::where('user_id', $request->id)->first();
        $response = [
            'status' => 200,
            'msg' => 'Team Created',
            'team' => $data
        ];
        return $response;
    }
    public function create_team(Request $request) {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'type' => 'required',
        ]);
        if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;  
        }else{

            $check = Team::where('title',$request->title)->first();
            if(!$check) {
                $check_already_user = Team::where('user_id',$request->user_id)->first();
                if(!$check_already_user) {
                    $data = new Team();
                    $data->title = $request->title;
                    $data->type = $request->type;
                    $data->user_id = $request->user_id;
                    if ($request->image) {       
                        $name = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                        \Image::make($request->image)->resize(115, 115)->save(public_path('images/').  $name);
                        $data->image = $name;
                    }
                    $data->save();

                    $team = Team::where('id', $data->id)->first();
                    $response = [
                        'status' => 200,
                        'msg' => 'Team Created',
                        'team' => $team
                    ];
                    return $response;
                } else {
                    $response = [
                        'status' => 201,
                        'msg' => 'User Already Create Team',
                    ];
                    return $response;
                }
                
            } else {
                $response = [
                    'status' => 201,
                    'msg' => 'Team Name Already Exist',
                ];
                return $response;
            }

        }
        
        
    }
}
