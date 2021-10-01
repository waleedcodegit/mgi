<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserChat extends Model
{
    protected $table = "user_team_member_chats";
    protected $fillable = [
        'sender_id',
        'reciver_id',
        'last_active',
        'last_msg_id',
        'status'
    ];

    public function reciver_user(){
        return $this->belongsTo('App\User', 'reciver_id');
    }

    public function sender_user(){
        return $this->belongsTo('App\User', 'sender_id');
    }

}
