<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('adminLogin','Admin\AdminController@adminLogin');
Route::post('admin_check_auth','Admin\AdminController@admin_check_auth');

Route::post('add-admin', 'Admin\AdminController@add_admin');
Route::post('get-admin-by-id', 'Admin\AdminController@get_admin_by_id');
Route::post('delete-admin', 'Admin\AdminController@delete_admin');
Route::get('admins','Admin\AdminController@admins');
Route::post('get-admin-rights', 'Admin\AdminController@admin_rights');
Route::post('save-right', 'Admin\AdminController@save_right');

// Posts Controller
Route::post('create_post','Admin\PostsController@addnewpost');
Route::post('gat_all_posts','Admin\PostsController@get_allposts');
Route::post('delete_post','Admin\PostsController@delete_post');
Route::post('get_post_by_id','Admin\PostsController@get_post_by_id');
Route::post('update_post','Admin\PostsController@update_post');
Route::post('get_posts','Admin\PostsController@get_posts');
Route::post('get_post_by_slug','Admin\PostsController@get_post_by_slug');
Route::post('get_feature_posts','Admin\PostsController@get_feature_posts');
Route::post('get_articals','Admin\PostsController@get_articals');

Route::post('change-banner-ads','Admin\PostsController@change_banner_ads');
Route::post('get-change-banner-ads','Admin\PostsController@get_change_banner_ads');



// Store Controller 

Route::post('add_product','Admin\StoreController@add_product');
Route::post('get_all_products','Admin\StoreController@get_all_products');
Route::post('get_product_images','Admin\StoreController@get_product_images');
Route::post('add_product_img','Admin\StoreController@add_product_img');
Route::post('delete_produc_img','Admin\StoreController@delete_produc_img');
Route::post('get_product_images','Admin\StoreController@get_product_images');
Route::post('get_product_by_id','Admin\StoreController@get_product_by_id');
Route::post('update_product','Admin\StoreController@update_product');
Route::post('update_varients','Admin\StoreController@update_varients');
Route::post('get_all_enabled_products','Admin\StoreController@get_all_enabled_products');
Route::post('get_product_by_slug','Admin\StoreController@get_product_by_slug');
Route::post('add_product_in_cart','Admin\StoreController@add_product_in_cart');
Route::post('delete_variations','Admin\StoreController@delete_variations');
Route::post('get_cookie_session_cart','Admin\StoreController@get_cookie_session_cart');

//Videos Routes
Route::post('create_video','Admin\VideoController@add_video');
Route::get('get_all_videos','Admin\VideoController@get_all_video');
Route::post('update_video','Admin\VideoController@update_video');
Route::post('delete_video','Admin\VideoController@delete_video');
Route::post('get_video_by_id','Admin\VideoController@get_video_by_id');
Route::post('get-videos','Admin\VideoController@get_videos');
Route::post('get_videos_list','Admin\VideoController@get_videos_list');


//Banner Routes
Route::post('create_banner','Admin\BannerController@add_banner');
Route::get('get_all_banners','Admin\BannerController@get_all_banner');
Route::post('update_banner','Admin\BannerController@update_banner');
Route::post('delete_banner','Admin\BannerController@delete_banner');
Route::post('get_banner_by_id','Admin\BannerController@get_banner_by_id');

//tickets Routes
Route::get('get_open_tickets','Admin\TicketController@get_open_tickets');
Route::get('get_closed_tickets','Admin\TicketController@get_closed_tickets');
Route::post('get_ticket_by_id','Admin\TicketController@get_ticket_by_id');
Route::post('update_ticket','Admin\TicketController@update_ticket');

//Game Routes
Route::get('get_games','Admin\GameController@get_games');
Route::post('get_game_by_id','Admin\GameController@get_game_by_id');
Route::post('update_game','Admin\GameController@update_game');
Route::post('create_game','Admin\GameController@create_game');

//Web Setting Routes
Route::post('slider_image','Admin\WebsettingController@slider_image');
Route::post('privacy_policy','Admin\WebsettingController@privacy_policy');
Route::post('terms_conditions','Admin\WebsettingController@terms_conditions');
Route::post('social_media_links','Admin\WebsettingController@social_media_links');
Route::get('websettings','Admin\WebsettingController@websettings');


//Tournament Routes
Route::get('get_tournaments','Admin\TournamentController@get_tournaments');
Route::get('get_today_tournaments','Admin\TournamentController@get_today_tournaments');
Route::get('get_this_week_tournaments','Admin\TournamentController@get_this_week_tournaments');
Route::get('get_this_month_tournaments','Admin\TournamentController@get_this_month_tournaments');
Route::post('create-tournament','Admin\TournamentController@save_tournament');
Route::post('update-tournament-info','Admin\TournamentController@update_tournament_info');
Route::post('update-tournament-modes','Admin\TournamentController@update_tournament_modes');
Route::post('get-tournament-by-id','Admin\TournamentController@get_tournament_by_id');
Route::post('update-tournament-status','Admin\TournamentController@update_tournament_status');

Route::post('get_user_enroll_tournament','Front\TournamentController@get_user_enroll_tournament');





Route::post('enrollment_check','User\EnrollmentController@enrollment_check');
Route::post('create_enrollment','User\EnrollmentController@create_enrollment');


// Subscription Api
Route::post('add_subscription','SubscriptionController@add_subscription');
Route::get('subscription_list','SubscriptionController@subscription_list');
//privacy_and_policy

Route::get('edit_privacy_and_policy','PrivacyAndPolicyController@get_privacy_policy');
Route::post('update_privacy_and_policy','PrivacyAndPolicyController@update_privacy_and_policy');

//term_and_condition
Route::get('Edit_term_and_condition/{id}','TermsAndConditionsController@Edit_term_and_condition');
Route::get('term_and_condition_list','TermsAndConditionsController@term_and_condition_list');
Route::post('Update_term_and_condition','TermsAndConditionsController@Update_term_and_condition');

Route::post('form_one_validation', 'User\UserController@form_one_validation');
Route::post('form_secound_validation', 'User\UserController@form_secound_validation');
Route::post('register_user', 'User\UserController@register_user');

Route::post('user-login','User\UserController@userLogin');
Route::post('user_check_auth','User\UserController@user_check_auth');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


