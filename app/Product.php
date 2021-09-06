<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table="products";
    protected $fillables = [
        'name',
        'code',
        'short_description',
        'varient_type',
        'quantity_type',
        'enabled',
        'out_of_stock',
        'slug'
    ];

    public function images() {
        return $this->hasMany('App\ProductImage');
    }
    public function varients() {
        return $this->hasMany('App\ProductVariation');
    }
}
