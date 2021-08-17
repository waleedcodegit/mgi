import React, { Component } from 'react';
import Nav from '../Common/Nav';
import Footer from '../Common/Footer';
import Landing from '../LandingComponents/Index';
import {Route} from 'react-router-dom';
import Tournament from '../Pages/tournament/Index';
import TournamentDeatil from '../Pages/tournamentDeatil/Index';
import AllArticle from '../Pages/articles/Index';
import AllVideos from '../Pages/videos/Index';
import Store from '../Pages/store/Products';
import SignUp from '../../Front/Auth/Signup';
import Login from '../../Front/Auth/Login';
import Subsciption from '../Pages/Subsciption/subsciption';
import Enrollment from '../Pages/tournamentDeatil/EnrollmentForm/Enrollmentform';
import Profile from '../Pages/UserProfile/Profile';
import PrivacyPolicy from '../Pages/privacy_policy/PrivacyPolicy';
import TermAndCondition from '../Pages/TermsAndCondition/TermAndCondition';
import Setting from '../Pages/Settings/Setting';
import CreateTeam from '../Pages/Teams/CreateTeam';
import JoinTeam from '../Pages/Teams/JoinTeam';
import ArticalDetail from '../Pages/articles/articalDetail/ArticalDetail';
import VideoDetail from '../Pages/videos/videosdetails/videodetails';

import Axios from 'axios';
import { connect } from 'react-redux';



class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true
        }
    }
    componentDidMount(){
        const senderdata = {
            token: window.localStorage.getItem('mgltokenlogin')
          }
          Axios.post('/api/user_check_auth', senderdata).then(res => {
            if (res.data.status == 200) {
               this.props.changeUser({is_login:true,data:res.data.user});
                this.setState({
                    loading:false
                })
            } else {
                this.setState({
                    loading:false
                })
            }
          })
    }
    
    render() {
        return (
            <div className="esport-black">
                <Nav></Nav>
                    {
                        this.state.loading ?
                        <h1 className="text-light text-center mt-5 pt-5">Loading</h1>
                        :
                        <>
                        <Route exact path="/" component={Landing}></Route>
                        <Route path="/tournament" component={Tournament}></Route>
                        <Route path="/tournamentDetail/:id" component={TournamentDeatil}></Route>
                        <Route path="/articles" component={AllArticle}></Route>
                        <Route path="/videos" component={AllVideos}></Route>
                        <Route path="/store" component={Store}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/signup" component={SignUp}></Route>
                        <Route path="/subsciption" component={Subsciption}></Route>
                        <Route path="/enrollment/:id" component={Enrollment}></Route>
                        <Route path="/profile" component={Profile}></Route>
                        <Route path="/privacy" component={PrivacyPolicy}></Route>
                        <Route path="/term-and-condition" component={TermAndCondition}></Route>
                        <Route path="/settings" component={Setting}></Route>
                        <Route path="/create-team" component={CreateTeam}></Route>
                        <Route path="/join-team" component={JoinTeam}></Route>
                        <Route path="/artical-detail/:id" component={ArticalDetail}></Route>
                        <Route path="/video-detail/:id" component={VideoDetail}></Route>
                        </>
                    }
                <Footer></Footer>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       changeUser:(user)=>{
           dispatch({
               type:'CHANGE_USER',payload:user
            })
        }
    }
}

export default connect(null,mapDispatchToProps) (Index);
