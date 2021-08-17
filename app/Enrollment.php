<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Enrollment extends Model
{
    protected $table = "enrollments";

    public function tournament(){
        return $this->belongsTo('App\Tournament', 'tournament_id');
    }
}
