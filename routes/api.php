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

Route::post('add-admin', 'Admin\AdminController@create_admin');
Route::post('update-admin', 'Admin\AdminController@update_admin');
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
Route::post('get_articals_latest','Admin\PostsController@get_articals_latest');

Route::post('change-banner-ads','Admin\PostsController@change_banner_ads');
Route::post('get-change-banner-ads','Admin\PostsController@get_change_banner_ads');



// Store Controller 

Route::post('add_product','Admin\StoreController@add_product');
Route::post('get_all_products','Admin\StoreController@get_all_products');
Route::get('get_all_products_counter','Admin\StoreController@get_all_products_counter');
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
Route::post('delete_product','Admin\StoreController@delete_product');

Route::post('get_product_reviews','Admin\StoreController@get_product_reviews');
Route::post('add_product_review','Admin\StoreController@add_product_review');


Route::post('/remove_product_from_cart', 'Admin\StoreController@remove_product_from_cart');
Route::post('/update_cart', 'Admin\StoreController@update_cart');
Route::post('/check_customer_auth', 'Admin\StoreController@check_customer_auth');

//Videos Routes
Route::post('create_video','Admin\VideoController@add_video');
Route::get('get_all_videos','Admin\VideoController@get_all_video');
Route::post('update_video','Admin\VideoController@update_video');
Route::post('delete_video','Admin\VideoController@delete_video');
Route::post('get_video_by_id','Admin\VideoController@get_video_by_id');
Route::post('get-videos','Admin\VideoController@get_videos');
Route::post('get_videos_list','Admin\VideoController@get_videos_list');
Route::post('get_videos_latest','Admin\VideoController@get_videos_latest');


//Support 
Route::post('get_user_ticket','Front\SupportController@get_user_ticket');
Route::post('create_ticket','Front\SupportController@create_ticket');
Route::post('get_support_comment','Front\SupportController@get_support_comment');
Route::post('create_comment_in_detail','Front\SupportController@create_comment_in_detail');
Route::get('get_open_tickets','Front\SupportController@get_open_tickets');
Route::post('create_comment_admin','Front\SupportController@create_comment_admin');
Route::get('get_closed_tickets','Front\SupportController@get_closed_tickets');
Route::post('update_ticketstatus','Front\SupportController@update_ticketstatus');





//Banner Routes
Route::post('create_banner','Admin\BannerController@add_banner');
Route::get('get_all_banners','Admin\BannerController@get_all_banner');
Route::post('update_banner','Admin\BannerController@update_banner');
Route::post('delete_banner','Admin\BannerController@delete_banner');
Route::post('get_banner_by_id','Admin\BannerController@get_banner_by_id');
Route::get('get_ad_banners','Admin\BannerController@get_ad_banners');
// Route::post('change-banners-ads','Admin\BannerController@change_banners_ads');

// //tickets Routes
// Route::get('get_open_tickets','Admin\TicketController@get_open_tickets');
// Route::get('get_closed_tickets','Admin\TicketController@get_closed_tickets');
// Route::post('get_ticket_by_id','Admin\TicketController@get_ticket_by_id');
// Route::post('update_ticket','Admin\TicketController@update_ticket');
Route::post('delete_deleteTickets','Admin\TicketController@delete_deleteTickets');

//Game Routes
Route::get('get_games','Admin\GameController@get_games');
Route::post('get_game_by_id','Admin\GameController@get_game_by_id');
Route::post('update_game','Admin\GameController@update_game');
Route::post('create_game','Admin\GameController@create_game');
Route::post('delete_game','Admin\GameController@delete_game');

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
Route::post('delete_tournament','Admin\TournamentController@delete_tournament');
// Route::post('get_tournaments_by_id','Admin\TournamentController@get_tournaments_by_id');

Route::post('get_tournament_chat_messages','Front\TournamentController@get_tournament_chat_messages');
Route::post('send_tournament_chat_messages','Front\TournamentController@send_tournament_chat_messages');
Route::post('get_user_enroll_tournament','Front\TournamentController@get_user_enroll_tournament');
Route::post('get_tournament_with_game_id','Admin\TournamentController@get_tournament_with_game_id');


Route::post('create_team','Front\TeamController@create_team');
Route::get('all_teams','Front\TeamController@get_all_teams');
Route::post('get_user_team','Front\TeamController@get_user_team');
Route::post('/search_team', 'Front\TeamController@search_team');
Route::post('/team-detail', 'Front\TeamController@team_detail');
Route::post('/join-team-request', 'Front\TeamController@join_team_request');
Route::post('/team_add_request', 'Front\TeamController@team_add_request');
Route::post('/approve_team_request', 'Front\TeamController@approve_team_request');



Route::post('enrollment_check','User\EnrollmentController@enrollment_check');
Route::post('create_enrollment','User\EnrollmentController@create_enrollment');
Route::post('get_enrollments','User\EnrollmentController@get_enrollments');
Route::post('get_tournament_enroll_user','User\EnrollmentController@get_tournament_enroll_user');
Route::post('delete_enrollments','User\EnrollmentController@delete_enrollments');




Route::get('get_all_users','User\UserController@get_all_users');
Route::get('get_onsubscription_users','User\UserController@get_onsubscription_users');
Route::get('get_withoutsubscription_users','User\UserController@get_withoutsubscription_users');
Route::get('get_all_users_counter','User\UserController@get_all_users_counter');



// Subscription Api
Route::post('add_subscription','SubscriptionController@add_subscription');
Route::get('subscription_list','SubscriptionController@subscription_list');
Route::post('delete_subscription','SubscriptionController@delete_subscription');
Route::post('get_subscription_by_id','SubscriptionController@get_subscription_by_id');
Route::post('update_subscription','SubscriptionController@update_subscription');
Route::post('delete_subscription','SubscriptionController@delete_subscription');

//privacy_and_policy

Route::post('create_privacy_and_policy','PrivacyAndPolicyController@create_privacy_and_policy');
Route::get('edit_privacy_and_policy/{id}','PrivacyAndPolicyController@edit_privacy_and_policy');
Route::get('get_privacy_and_policy','PrivacyAndPolicyController@get_privacy_and_policy');
Route::post('update_privacy_and_policy','PrivacyAndPolicyController@update_privacy_and_policy');
Route::post('delete_privacy_and_policy','PrivacyAndPolicyController@delete_privacy_and_policy');
Route::post('privacy_policy_front_page','PrivacyAndPolicyController@privacy_policy_front_page');

//term_and_condition
Route::get('Edit_term_and_condition/{id}','TermsAndConditionsController@Edit_term_and_condition');
Route::get('term_and_condition_list','TermsAndConditionsController@term_and_condition_list');
Route::post('Update_term_and_condition','TermsAndConditionsController@Update_term_and_condition');
Route::post('delete_TermsandConditions','TermsAndConditionsController@delete_TermsandConditions');
Route::post('add_term_and_condition','TermsAndConditionsController@add_term_and_condition');
Route::post('term_and_condition_front_page','TermsAndConditionsController@term_and_condition_front_page');

Route::get('show_articals/{id}','Admin\PostsController@show');
Route::get('show_videos/{id}','Admin\VideoController@show');

Route::post('form_one_validation', 'User\UserController@form_one_validation');
Route::post('form_secound_validation', 'User\UserController@form_secound_validation');
Route::post('register_user', 'User\UserController@register_user');

Route::post('user-login','User\UserController@userLogin');
Route::post('user_check_auth','User\UserController@user_check_auth');
Route::post('get_user_profile','User\UserController@get_user_profile');
Route::post('update_user_info','User\UserController@update_user_info');

Route::post('create_team','Front\TeamController@create_team');
Route::post('get_user_team','Front\TeamController@get_user_team');

Route::get('edit_tournament/{id}','Admin\TournamentController@edit_tournament');
Route::post('update_tournament','Admin\TournamentController@update_tournament');
Route::get('edit_feilds/{id}','Admin\TournamentController@edit_feilds');

Route::post('update_user_social_links','User\UserController@update_user_social_links');
Route::get('get_user_social_links/{id}','User\UserController@get_user_social_links');

Route::post('create_brackets','BracketsController@create_brackets');
Route::post('get_brackets','BracketsController@get_brackets');
Route::post('get_brackets_by_id','BracketsController@get_brackets_by_id');
Route::post('update_brackets','BracketsController@update_brackets');
Route::post('delete_brackets','BracketsController@delete_brackets');
// Route::post('get_bracket_by_id','BracketsController@get_bracket_by_id');

Route::post('create_announcement','AnnouncementsController@create_announcement');
Route::post('get_announcement','AnnouncementsController@get_announcement');
Route::post('get_announcements','AnnouncementsController@get_announcements');
Route::post('get_announcement_by_id','AnnouncementsController@get_announcement_by_id');
Route::post('update_announcement','AnnouncementsController@update_announcement');
Route::post('delete_announcement','AnnouncementsController@delete_announcement');

Route::post('create_watchstream','WatchStreamController@create_watchstream');
Route::post('get_watchstream','WatchStreamController@get_watchstream');
Route::post('get_watchstream_by_id','WatchStreamController@get_watchstream_by_id');
Route::post('delete_watchstream','WatchStreamController@delete_watchstream');


Route::post('leave_team','Front\TeamController@leave_team');
Route::post('kickout','Front\TeamController@kickout');
Route::post('get_user_id','Front\TeamController@get_user_id');



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


