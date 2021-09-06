<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListUserTeams extends Model
{
    protected $table = "list_user_teams";
    protected $fillable = [
        'user_id',
        'team_id'
    ];

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }

    public function team(){
        return $this->belongsTo('App\Team', 'team_id');
    }
}
