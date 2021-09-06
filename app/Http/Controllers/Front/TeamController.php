<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Team;
use Validator;
use App\ListUserTeams;

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

    public function get_all_teams() {
        $teams = Team::all();
        $response = [
            'status' => 200,
            'msg' => 'All Teams',
            'teams' => $teams
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

                    $enroll_user_team = new ListUserTeams();
                    $enroll_user_team->user_id = $request->user_id;
                    $enroll_user_team->team_id = $data->id;
                    $enroll_user_team->status = 1;
                    $enroll_user_team->save();

                    $team = Team::where('id', $data->id)->where('user_id', $request->user_id)->first();
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

    public function search_team(Request $request){
        $teams = Team::where('title', 'like', '%' . $request->string . '%')->get();
        return $teams;
    }

    public function team_detail(Request $request) {
        $team = Team::where('id', $request->id)->first();
        $team->team_user = ListUserTeams::where('team_id', $request->id)->with('user')->get();
        $response = [
            'status' => 200,
            'msg' => 'Team Detail',
            'team_detail' => $team
        ];
        return $response;
    }

    public function join_team_request(Request $request) {
        $userAlready = ListUserTeams::where('team_id', $request->team_id)->where('user_id', $request->user_id)->first();
        if($userAlready) {
            $response = [
                'status' => 201,
                'msg' => 'User Already In This Team',
            ];
            return $response;
        } else {

            $team = Team::where('id', $request->team_id)->first();

            $teamLimit = ListUserTeams::where('team_id', $request->team_id)->where('status', 1)->count();
            if($team->type == "Private") {
                if($teamLimit < 4) {
                    $enr = new ListUserTeams();
                    $enr->user_id = $request->user_id;
                    $enr->team_id = $request->team_id;
                    $enr->save();
     
                    $response = [
                     'status' => 200,
                     'msg' => 'User Add',
                     ];
                     return $response;
                 } else {
                     $response = [
                         'status' => 201,
                         'msg' => 'Team Full',
                     ];
                     return $response;
                 }
            } else {
                if($teamLimit < 4) {
                    $enr = new ListUserTeams();
                    $enr->user_id = $request->user_id;
                    $enr->team_id = $request->team_id;
                    $enr->status = 1;
                    $enr->save();
     
                    $response = [
                     'status' => 200,
                     'msg' => 'User Add',
                    ];

                    return $response;
                 } else {
                     $response = [
                         'status' => 201,
                         'msg' => 'Team Full',
                     ];
                     return $response;
                 }
            }           
        }
    }

    public function team_add_request(Request $request) {
        $team = Team::where('user_id', $request->id)->first();
        if($team) {
            $notification_list = ListUserTeams::where('team_id', $team->id)->where('status', 0)->with('user')->get();
            $response = [
                'status' => 200,
                'msg' => 'Request Notification List',
                'data' => $notification_list
            ];
            return $response;
        } else {
            $response = [
                'status' => 201,
                'msg' => 'No Data Available'
            ];
            return $response;
        }
        
    }

    public function approve_team_request(Request $request) {
        $teamLimit = ListUserTeams::where('team_id', $request->team_id)->where('status', 1)->count();
        if($teamLimit < 4) {
            if($request->check == "Approve") {
                $approve = ListUserTeams::where('team_id', $request->team_id)->where('user_id', $request->user_id)->update([
                    'status' => 1
                ]);
    
                $response = [
                    'status' => 200,
                    'msg' => 'Approved',
                ];
                return $response;
            } else {
                $disapprove = ListUserTeams::where('team_id', $request->team_id)->where('user_id', $request->user_id)->delete();
                $response = [
                    'status' => 201,
                    'msg' => 'Disapproved',
                ];
                return $response;
            }
        } else {
            $response = [
                'status' => 201,
                'msg' => 'Team Full',
            ];
            return $response;
        }        
    }
}
