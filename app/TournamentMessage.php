<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TournamentMessage extends Model
{
    protected $table = "tournament_messages";
    protected $fillables = [
        'sender',
        'tournament_id',
        'message',
        'time',
	    'date'
    ];
    public function user(){
        return $this->belongsTo('App\User', 'sender');
    }
}
