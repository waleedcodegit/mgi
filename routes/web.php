<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Admin Routes

Route::view('/adminpanel/edit-term_and_condition','admin');


Route::view('/adminpanel/add-subscription','admin');
Route::view('/adminpanel/subscriptions-list','admin');

Route::view('/adminpanel/term-and-condition-list','admin');
Route::view('/adminpanel/edit-term_and_condition/{id}','admin');

Route::view('/adminpanel','admin');
Route::view('/admin-login','admin');
Route::view('/adminpanel/Dashboard','admin');
Route::view('/adminpanel/create-news-articles','admin');
Route::view('/adminpanel/news-list','admin');
Route::view('/adminpanel/edit-news/{id}','admin');
Route::view('/adminpanel/edit-product/{id}','admin');
Route::view('/adminpanel/product-images/{id}','admin');
Route::view('/adminpanel/add-product','admin');
Route::view('/adminpanel/products-list','admin');
Route::view('/adminpanel/add-video','admin');
Route::view('/adminpanel/videos-list','admin');
Route::view('/adminpanel/edit-video/{id}','admin');

Route::view('/adminpanel/tickets-open','admin');
Route::view('/adminpanel/edit-ticket/{id}','admin');
Route::view('/adminpanel/tickets-closed','admin');

Route::view('/adminpanel/new-game','admin');
Route::view('/adminpanel/games-list','admin');
Route::view('/adminpanel/edit-game/{id}','admin');

Route::view('/adminpanel/add-banner','admin');
Route::view('/adminpanel/banners-list','admin');
Route::view('/adminpanel/edit-banner/{id}','admin');

//Web Settings Routes
Route::view('/adminpanel/slider-images','admin');
Route::view('/adminpanel/privacy-policy','admin');
Route::view('/adminpanel/terms-and-conditions','admin');
Route::view('/adminpanel/social-media-links','admin');

//Admins Management Routes
Route::view('/adminpanel/add-admin','admin');
Route::view('/adminpanel/edit-admin/{id}','admin');
Route::view('/adminpanel/admin-rights/{id}','admin');
Route::view('/adminpanel/admins','admin');

Route::view('/adminpanel/change-ads-banner','admin');


//Tournament Routes
Route::view('/adminpanel/tournament-create', 'admin');
// Route::view('/adminpanel/tournament-basic-details', 'admin');
// Route::view('/adminpanel/tournament-info', 'admin');
Route::view('/adminpanel/tournament-list', 'admin');
//Front-end Routes
Route::view('/tournamentDetail/{id}', 'front');
Route::view('/productDetail/{id}', 'front');
Route::view('/enrollment/{id}', 'front');
Route::view('/artical-detail/{id}', 'front');
Route::view('/video-detail/{id}', 'front');

Route::get('/{path?}', function () {
    return view('front');
});
Route::get('{reactRoutes}', function () {
    return view('front');
});

