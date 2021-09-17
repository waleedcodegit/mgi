<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WatchStream extends Model
{
    protected $table = "watchsteams";
    public function tournament(){
        return $this->belongsTo('App\Tournament');
    }
}
