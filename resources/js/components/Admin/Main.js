import React, { Component } from 'react';
import Axios from 'axios';
import ReactDOM from 'react-dom';
import {Route , BrowserRouter , Switch} from 'react-router-dom';
import Dashboard from '../Admin/Pages/Dashboard';

import CreateNews from '../Admin/Manage News_Articals/Create';
import NewsList from '../Admin/Manage News_Articals/List';
import EditNews from '../Admin/Manage News_Articals/Edit';

import Addproduct from '../Admin/Manage Store/Addproduct';
import EditProduct from '../Admin/Manage Store/EditProduct';
import ProductLists from '../Admin/Manage Store/ProductsList';
import ProductImages from '../Admin/Manage Store/ProductImages';

import CreateVideo from '../Admin/ManageVideos/Create';
import EditVideo from '../Admin/ManageVideos/Edit';
import VideosList from '../Admin/ManageVideos/List';

import OpenTickets from '../Admin/Support/List';
import ClosedTickets from '../Admin/Support/ClosedList';
import EditTicket from '../Admin/Support/Edit';

import CreateGame from '../Admin/Games/Create';
import GamesList from '../Admin/Games/List';
import EditGame from '../Admin/Games/Edit';

import SliderImages from '../Admin/Websettings/SliderImages';
import PrivacyPolicy from '../Admin/Websettings/PrivacyPolicy';
import SocialLinks from '../Admin/Websettings/SocialMedia';
import TermsConditions from '../Admin/Websettings/TermsConditions';
import CreateSubAdmins from '../Admin/SubAdmins/Create';
import EditAdmins from '../Admin/SubAdmins/Edit';
import SubAdmins from '../Admin/SubAdmins/List';
import AdminRights from '../Admin/SubAdmins/Rights';
import Games from '../Admin/Tournament/Game';
import BasicInfo from '../Admin/Tournament/BasicDetails';
import TournamentInfo from './Tournament/Index';
import TournamentList from './Tournament/List';
import EditTournament from './Tournament/EditTournament';
import EditFeilds from './Tournament/EditTournament';

import CreateBanner from '../Admin/Banner/create';
import BannersList from '../Admin/Banner/list';
import EditBanner from '../Admin/Banner/Edit';

import CreateSubscription from '../Admin/Subscription/create';
import SubscriptionList from '../Admin/Subscription/list';
import EditSubscription from '../Admin/Subscription/Edit';
import EditPrivacyAndPolicy from '../Admin/PrivacyAndPolicy/Edit';
import CreatePrivacyAndPolicy from '../Admin/PrivacyAndPolicy/Create';
import PrivacyAndPolicyList from '../Admin/PrivacyAndPolicy/List';
import EditTermAndCondition from '../Admin/TermAndCondition/Edit';
import TermAndConditionList from '../Admin/TermAndCondition/list';
import CreateTermAndCondition from '../Admin/TermAndCondition/Create';

import UserEnrolledsList from '../Admin/UserEnrolled/List';

import ChangeAdsBanner from '../Admin/ManageHeaderFooterBanner/Change';

import CreateBrackets from '../Admin/Brackets/create';
import BracketsList from '../Admin/Brackets/list';
import EditBrackets from '../Admin/Brackets/edit';

import CreateAnnouncements from '../Admin/Announcements/create';
import AnnouncementsList from '../Admin/Announcements/list';
import EditAnnouncement from '../Admin/Announcements/edit';

import CreateWatchstream from '../Admin/Watchstream/create';
import WatchstreamList from '../Admin/Watchstream/list';
import EditWatchstream from '../Admin/Watchstream/edit';


import props from 'prop-types';

class Main extends Component {
   constructor(props){
       super(props);
       this.state = {
        user:[],
        token:'',
       }     
   }
    componentDidMount(){
        let senderdat = {
            token:window.localStorage.getItem('sop256skikl')
        }
        if(this.state.token){

        }
        else{
            Axios.post('/api/admin_check_auth', senderdat).then(res => {
                if (res.data.status == 200) { 
                    this.setState({
                        user:res.data.user,
                    })
                } else {
                  window.open('/admin-login', '_self');
                }
              })
        }
           
          
    }
    render() {
        return (
            <div>
                        <Route exect path="/adminpanel/Dashboard"  component={Dashboard}></Route>
                        <Route path="/adminpanel/create-news-articles" component={CreateNews}></Route>
                        <Route path="/adminpanel/news-list" component={NewsList}></Route>
                        <Route path="/adminpanel/edit-news/:id" component={EditNews}></Route>
                        <Route path="/adminpanel/edit-product/:id" component={EditProduct}></Route>
                        <Route path="/adminpanel/product-images/:id" component={ProductImages}></Route>
                        <Route path="/adminpanel/add-product" component={Addproduct}></Route>
                        <Route path="/adminpanel/products-list" component={ProductLists}></Route>
                        <Route path="/adminpanel/add-video" component={CreateVideo}></Route>
                        <Route path="/adminpanel/videos-list" component={VideosList}></Route>
                        <Route path="/adminpanel/edit-video/:id" component={EditVideo}></Route>
                        <Route path="/adminpanel/tickets-open" component={OpenTickets}></Route>
                        <Route path="/adminpanel/tickets-closed" component={ClosedTickets}></Route>
                        <Route path="/adminpanel/edit-ticket/:id" component={EditTicket}></Route>
                        <Route path="/adminpanel/new-game" component={CreateGame}></Route>
                        <Route path="/adminpanel/games-list" component={GamesList}></Route>
                        <Route path="/adminpanel/edit-game/:id" component={EditGame}></Route>
                        <Route path="/adminpanel/slider-images" component={SliderImages}></Route>
                        <Route path="/adminpanel/privacy-policy" component={PrivacyPolicy}></Route>
                        <Route path="/adminpanel/terms-and-conditions" component={TermsConditions}></Route>
                        <Route path="/adminpanel/social-media-links" component={SocialLinks}></Route>
                        <Route path="/adminpanel/add-admin" component={CreateSubAdmins}></Route>
                        <Route path="/adminpanel/admins" component={SubAdmins}></Route>
                        <Route path="/adminpanel/edit-admin/:id" component={EditAdmins}></Route>
                        <Route path="/adminpanel/admin-rights/:id" component = {AdminRights}></Route>
                        <Route path="/adminpanel/tournament-create" component={TournamentInfo}></Route>
                        <Route path="/adminpanel/tournament-list" component={TournamentList}></Route>
                        <Route path="/adminpanel/edit-tournament/:id" component={EditTournament}></Route>
                        <Route path="/adminpanel/edit-fields/:id" component={EditFeilds}></Route>
                        <Route path="/adminpanel/add-banner" component={CreateBanner}></Route>
                        <Route path="/adminpanel/banners-list" component={BannersList}></Route>
                        <Route path="/adminpanel/edit-banner/:id" component={EditBanner}></Route>
                        <Route path="/adminpanel/change-ads-banner" component={ChangeAdsBanner}></Route>

                        <Route path="/adminpanel/edit-privacyandpolicy/:id" component={EditPrivacyAndPolicy}></Route>
                        <Route path="/adminpanel/create-privacyandpolicy" component={CreatePrivacyAndPolicy}></Route>
                        <Route path="/adminpanel/privacyandpolicy-list" component={PrivacyAndPolicyList}></Route>


                        <Route path="/adminpanel/add-subscription" component={CreateSubscription}></Route>
                        <Route path="/adminpanel/subscriptions-list" component={SubscriptionList}></Route>
                        <Route path="/adminpanel/edit-subscriptions/:id" component={EditSubscription}></Route>

                        <Route path="/adminpanel/term-and-condition-list" component={TermAndConditionList}></Route>
                        <Route path="/adminpanel/edit-term_and_condition/:id" component={EditTermAndCondition}></Route>
                        <Route path="/adminpanel/create-term_and_condition" component={CreateTermAndCondition}></Route>

                        <Route path="/adminpanel/create-brackets" component={CreateBrackets}></Route>
                        <Route path="/adminpanel/brackets-list" component={BracketsList}></Route>
                        <Route path="/adminpanel/edit-brackets/:id" component={EditBrackets}></Route>

                        <Route path="/adminpanel/user_enrolled_list" component={UserEnrolledsList}></Route>

                        <Route path="/adminpanel/create-announcements" component={CreateAnnouncements}></Route>
                        <Route path="/adminpanel/announcements-list" component={AnnouncementsList}></Route>
                        <Route path="/adminpanel/edit-announcement/:id" component={EditAnnouncement}></Route>

                        <Route path="/adminpanel/create-watchstream" component={CreateWatchstream}></Route>
                        <Route path="/adminpanel/watchstream-list" component={WatchstreamList}></Route>
                        <Route path="/adminpanel/edit-watchstream/:id" component={EditWatchstream}></Route>


                        
                        
            </div>
        );
    }
}

export default Main;