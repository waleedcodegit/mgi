<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
    protected $table = 'tournaments';

    public function game(){
        return $this->belongsTo('App\Game', 'game_id');
    }

    public function tournament_field(){
        return $this->hasMany('App\TournamentField');
    }
}
