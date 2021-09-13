<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductComment extends Model
{
    protected $table = "product_comments";
    public $fillable = ['product_id', 'user_id', 'comment' ];

    public function user(){
        return $this->belongsTo('App\User', 'user_id');
    }
}
