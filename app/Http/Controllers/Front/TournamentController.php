<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Enrollment;

class TournamentController extends Controller
{
    public function get_user_enroll_tournament(Request $request) {
        $data = Enrollment::where('user_id', $request->id)->with('tournament')->get();
        $response = [
            'status' => 200,
            'msg' => 'User Enroll Tournaments', 
            'data' => $data
            ];
            return $response;
    }
}
