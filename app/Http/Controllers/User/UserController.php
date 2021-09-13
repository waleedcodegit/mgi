<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\UserAuthMeta;
use App\User;
use App\user_social_link;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function form_one_validation(Request $request) {
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required',
            'confirm_password' => 'required|same:password',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()     
            ]);
        }

        return response()->json([
            'status' => 200,
            'message' => 'validation',
        ]);
    }

    public function form_secound_validation(Request $request) {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'primary_game' => 'required',
            'game_id' => 'required',
            'dob' => 'required',
            'country' => 'required',
            'gender' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => false,
                'message' => $validator->errors()->first(),
                'errors' => $validator->errors()     
            ]);
        }

        return response()->json([
            'status' => 200,
            'message' => 'validation',
        ]);
    }


    public function register_user(Request $request) {
        // return $request->secound_form['first_name'];
            $data = User::where('email', $request->first_form['email'])->first();
            if($data) {
                return response()->json([
                    'status' => false,
                    'message' => 'Email Already Exist',
                ]);
            } else {
                $user = new User();
                $user->email = $request->first_form['email'];
                $user->password = Hash::make($request->first_form['password']);
                $user->first_name = $request->secound_form['first_name'];
                $user->last_name = $request->secound_form['last_name'];
                $user->primary_game = $request->secound_form['primary_game'];
                $user->game_id = $request->secound_form['game_id'];
                $user->dob = $request->secound_form['dob'];
                $user->country = $request->secound_form['country'];
                $user->gender = $request->secound_form['gender'];
                $user->save();

                $meta_check = UserAuthMeta::where('user_id',$user->id)
                                    ->where('ip',$request->ip())
                                    ->first();
                    if(!$meta_check){
                        $meta = new UserAuthMeta();
                        $meta->user_id = $user->id;
                        $meta->ip = $request->ip();
                        $meta->token = Hash::make(time());
                        $meta->save();
                        $token = $meta->token;
                    }else{
                        $token = $meta_check->token;
                    }
                    $user->token = $token;
                    $response = [
                        'status' => 200,
                        'message' => 'Success! User Authenticated Successfully',
                        'user' => $user
                    ];
                    return $response;
            }
            
    }

    public function userLogin(Request $request){
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() , 'errors' => $validator->errors()];
            return $response;
        }else{
            $user = User::where('email', $request->email)->where('is_delete', 0)->first();
            if($user){
                // if($user->role_id != '4'){
				// 	$response = ['status' => 401 , 'msg' => 'Error! Only users can login from here. '];
                // 	return $response;
				// }
                if(Hash::check($request->password, $user->password)){
                    $meta_check = UserAuthMeta::where('user_id',$user->id)
                                    ->where('ip',$request->ip())
                                    ->first();
                    if(!$meta_check){
                        $meta = new UserAuthMeta();
                        $meta->user_id = $user->id;
                        $meta->ip = $request->ip();
                        $meta->token = Hash::make(time());
                        $meta->save();
                        $token = $meta->token;
                    }else{
                        $token = $meta_check->token;
                    }
                    $user->token = $token;
                    $response = ['status' => 200 , 'msg' => 'Success!Admin Authenticated Successfully',
                        'user' => $user];
                    return $response;
                }else{
                    $response = ['status' => 401 , 'msg' => 'Error- Invalid Password'];
                return $response;
                }
            }else{
                $response = ['status' => 401 , 'msg' => 'Error- Invalid Email/Verification is not completed.'];
                return $response;
            }
        }

    }
    public function user_check_auth(Request $request){
        $admin_auth = UserAuthMeta::where('token',$request->token)
        ->where('ip',$request->ip())
        ->first();
        if($admin_auth){
            $user = User::find($admin_auth->user_id);
            $response = ['status' => 200 , 'user' => $user];
            return $response; 
        }else{
            $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Token'];
            return $response;
        }                                                       
    }
    public function get_user_profile(Request $request) {
        $data = User::find($request->id)->get();
        $response = [
                'status' => 200,
                'msg' => 'User profile', 
                'data' => $data
            ];
            return $response;
    }
    public function update_user_info(Request $request){


        $user = User::find($request->id);
        
                
                $user->email  = $request->email;
                $user->first_name = $request->first_name;
                $user->last_name = $request->last_name;
                $user->primary_game = $request->primary_game;
                $user->game_id = $request->game_id;
                $user->dob = $request->dob;
                $user->phone = $request->phone;
                $user->country = $request->country;
                $user->gender = $request->gender;
                $user->city = $request->city;
                $user->address = $request->address;
                $user->postcode = $request->postcode;
                if ($request->image == $user->image) {
                
                }else{
                    $users = time() . '.' . explode('/', explode(':', substr($request->image, 0, strpos($request->image, ';')))[1])[1];
                    \Image::make($request->image)->save(public_path('images/').  $users);
                    $user->image = $users;
                }
               
                $user->save();
        $response = [ 
            'msg'=>'User info Updated',
            'status'=>'200'
        ];
        return $response;
    }
    public function get_user_social_links($id) 
    {
        $data = user_social_link::find($id);
        return response ()->json([
                'status' => 200,
                'msg' => 'User social links', 
                'data' => $data
        ]);
            
    }
    public function update_user_social_links(Request $request){


        $user = user_social_link::find($request->id);
        
                
                $user->google  = $request->google;
                $user->facebook = $request->facebook;
                $user->twitter = $request->twitter;
                $user->apple = $request->apple;
                $user->battle = $request->battle;
                $user->vk = $request->vk;
                $user->discord = $request->discord;
                $user->save();
              $response = [ 
            'msg'=>'User Socail Links Updated',
            'status'=>'200'
        ];
        return $response;
    }
}
