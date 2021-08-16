<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;
use App\ProductImage;
use App\ProductVariation;
use App\Product;
USE App\Cart;
use DB;

class StoreController extends Controller
{
    public function get_all_products(Request $request){
        $products = Product::orderBy('id', 'DESC')->get();
        foreach($products as $p){
            $images = ProductImage::where('product_id',$p->id)->get();
            $p->images = $images;
        }
        return $products;
    }
    public function add_product(Request $request){
        $validator = Validator::make($request->all(), [
            'product_code' => 'required',
            'product_name' => 'required',
            'short_product_description' => 'required',
            'product_varient_type' => 'required',
            'product_quantity_type' => 'required',
            'varients' => 'required',
            'image' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $p_code = DB::table('products')
                        ->where('code',$request->p_code)
                        ->get();
        if(sizeof($p_code) == 0){
            $new_product = new Product();
            $new_product->name = $request->product_name;
            $new_product->code = $request->product_code;
            $new_product->varient_type = $request->product_varient_type;
            $new_product->quantity_type = $request->product_quantity_type;
            $new_product->enabled = $request->p_enabled;
            $new_product->out_of_stock = $request->out_of_stock;
            $new_product->slug = str_replace(" ", "-", $request->product_name);
            $new_product->short_description = $request->short_product_description;
            $new_product->save();
                $name = '';
                foreach ($request['image'] as $file) {
                    $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
                    \Image::make($file[0])->save(public_path('images/') . $name);
                    $p_image = new ProductImage();
                    $p_image->product_id = $new_product->id;
                    $p_image->image = $name;
                    $p_image->save();
                }
            
                foreach($request->varients as $v){
                    $p_variations = new ProductVariation();
                    $p_variations->product_id = $new_product->id;
                    $p_variations->name = $v['varient'];
                    $p_variations->price = $v['price'];
                    $p_variations->save();
                }
                $response = ['status' => 200 , 'msg' => 'Product Added SuccessFully.'];
                return $response;
        }else{
            $response = ['status' => 219 , 'msg' => 'Product Code already exists.'];
            return $response;
            
        }
        
    }
    // Update Product
    public function update_product(Request $request){
        $validator = Validator::make($request->all(), [ 
            'product_code' => 'required',
            'product_name' => 'required',
            'short_product_description' => 'required',
            'product_varient_type' => 'required',
            'product_quantity_type' => 'required',         
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $new_product = Product::find($request->id);
        $new_product->name = $request->product_name;
        $new_product->code = $request->product_code;
        $new_product->varient_type = $request->product_varient_type;
        $new_product->quantity_type = $request->product_quantity_type;
        $new_product->out_of_stock = $request->out_of_stock;
        $new_product->enabled = $request->p_enabled;
        $new_product->slug = str_replace(" ", "-", $request->product_name);
        $new_product->short_description = $request->short_product_description;
        $new_product->save();

        $response = ['status' => 200 , 'msg' => 'Product Updated SuccessFully.'];
        return $response;
    }
    public function get_product_by_slug(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('slug',$request->slug)
        ->get();
        $check = 0;
        foreach($products as $p){
            $images = DB::table('product_images')->where('product_id',$p->id)->get();
            $p->images = $images;
            $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
            $p->varients = $varients;
            $cheep_varient = $varients[0];
            $price = 0;
            foreach($varients as $v){
                $v->original_price = $v->price;
                if($cheep_varient->price > $v->price){
                    $cheep_varient = $v;
                }
            }
            $p->cheep_varient = $cheep_varient;
            }
            return $products;
        }
    public function update_varients(Request $request){
        if($request->id == 0){
            $p_variations = new ProductVariation();
            $p_variations->product_id = $request->pid;
            $p_variations->name = $request->name;
            $p_variations->price = $request->price;
            $p_variations->save();
        }else{
            $p_variations = ProductVariation::find($request->id);
            $p_variations->name = $request->name;
            $p_variations->price = $request->price;
            $p_variations->save();
        }
    }
    public function get_product_by_id(Request $request){
        $product =  Product::find($request->id);
        $product->images = DB::table('product_images')->where('product_id',$product->id)->get();
        $product->varients = DB::table('product_variations')->where('product_id',$product->id)->get();
        return $product;
    }
    public function add_product_img(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $p_image = new ProductImage();
            $p_image->product_id = $request->id;
            $p_image->image = $name;
            $p_image->save();
        }
    }
    public function delete_produc_img(Request $request){
        $p_img = ProductImage::find($request->id);
        $p_img->delete();
    }
    public function get_product_images(Request $request){
        $product_images = DB::table('product_images')
                            ->where('product_id',$request->id)
                            ->get();
        return $product_images;
    }
    public function delete_variations(Request $request){
        $p_variations = ProductVariation::find($request->id);
        $p_variations->delete();
    }
    public function get_all_enabled_products(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->get();
      
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function add_product_in_cart(Request $request){
        $cart = new Cart();
        $cart->product_id = $request->product_id;
        $cart->cart_cookie_id = $request->cart_cookie_id;
        $cart->quantity = $request->qty;
        $cart->price = $request->price;
        $cart->varient_id = $request->varient_id;
        $cart->original_price = (float) $request->original_price;

        $cart->save();
    }
    public function get_cookie_session_cart(Request $request){
        $cart = DB::table('carts')->where('cart_cookie_id',$request->cart_cookie_id)->get();
        if(sizeof($cart) > 0){
            $cart_products = [];
            $cart_totals = 0.1;
            $discount = 0;
            $sub_cart_totals = 0;
            foreach($cart as $key => $c){
                $sub_cart_totals = (float) $sub_cart_totals + (float)$c->original_price;
                $cart_totals =  $cart_totals + $c->price ;
                $product = DB::table('products')
                            ->where('id',$c->product_id)
                            ->get();
                foreach($product as $p){
                    $images = DB::table('product_images')->where('product_id',$p->id)->get();
                    $p->images = $images;
                    $varients = DB::table('product_variations')->where('id',$c->varient_id)->get();
                    $p->varients = $varients;
                    $cheep_varient = $varients[0];
                    $price = 0;
                }
                $cart[$key]->product = $product;
            }
            $cart[0]->sub_cart_totals = $sub_cart_totals;
            $cart[0]->cart_totals = $cart_totals - 0.1;
            $response = ['status' => 200 , 'cart' => $cart];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Cart Is Empty'];
            return $response;
        }
    }
}
