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
import TeamDetail from '../Pages/Teams/TeamDeatil';
import ProductDetail from '../Pages/store/productDetail/index';
import Cart from '../Pages/store/cart/Cart';
import CheckOut from '../Pages/store/CheckOut/CheckOut';
import Support from '../Pages/Support/Support';
import CreateTicket from '../Pages/Support/CreateTicket';
import TicketDetail from '../Pages/Support/TicketDetail';

import Axios from 'axios';
import { connect } from 'react-redux';






class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            display:false
        }
    }
    componentDidMount(){
        const senderdata = {
            token: window.localStorage.getItem('mgltokenlogin')
          }
          Axios.post('/api/user_check_auth', senderdata).then(res => {
              setTimeout(()=>{
                this.setState({
                    display:true
                })
              },5000)
            if (res.data.status == 200) {
               this.props.changeUser({is_login:true,data:res.data.user});
                this.setState({
                    loading:false
                })
            } 
            else {
                this.setState({
                    loading:false
                })
            }
          })
    }
    
    render() {
        return (
            <div className="esport-black">
                {
                        this.state.loading ?
                        <div class="modal fade in" id="myModal" role="dialog" style={{display: "block"}}>
                        <div class="modal-dialog">
                        
                          <div class="modal-content">
                     
                            <div class="modal-body">
                             <div class="loader"></div>
                            </div>
                         
                          </div>
                          
                        </div>
                      </div>
                        :
                        <>
                        {
                            !this.state.display ?
                        
                         <div class="modal fade in" id="myModal" role="dialog" style={{display: "block"}}>
                        <div class="modal-dialog">
                        
                          <div class="modal-content">
                     
                            <div class="modal-body">
                             <div class="loader"></div>
                            </div>
                         
                          </div>
                          
                        </div>
                      </div>
                      :
                      null
                      }
                            <Nav></Nav>
                                
                                    
                                    <Route exact path="/" component={Landing}></Route>
                                    <Route path="/tournament" component={Tournament}></Route>
                                    <Route path="/tournamentDetail/:id" component={TournamentDeatil}></Route>
                                    <Route path="/articles" component={AllArticle}></Route>
                                    <Route path="/videos" component={AllVideos}></Route>
                                    <Route path="/store" component={Store}></Route>
                                    <Route path="/login" component={Login}></Route>
                                    <Route path="/signup" component={SignUp}></Route>
                                    <Route path="/subscription" component={Subsciption}></Route>
                                    <Route path="/enrollment/:id" component={Enrollment}></Route>
                                    <Route path="/profile" component={Profile}></Route>
                                    <Route path="/privacy" component={PrivacyPolicy}></Route>
                                    <Route path="/term-and-condition" component={TermAndCondition}></Route>
                                    <Route path="/settings" component={Setting}></Route>
                                    <Route path="/create-team" component={CreateTeam}></Route>
                                    <Route path="/join-team" component={JoinTeam}></Route>
                                    <Route path="/team-detail/:id" component={TeamDetail}></Route>
                                    <Route path="/artical-detail/:id" component={ArticalDetail}></Route>
                                    <Route path="/video-detail/:id" component={VideoDetail}></Route>
                                    <Route path="/product-detail/:id" component={ProductDetail}></Route>
                                    <Route path="/cart" component={Cart}></Route>
                                    <Route path="/check-out" component={CheckOut}></Route>
                                    <Route path="/support" component={Support}></Route>
                                    <Route path="/create-ticket" component={CreateTicket}></Route>
                                    <Route path="/ticket-detail/:id" component={TicketDetail}></Route>
                                    
                            <Footer></Footer>
                        </>
                    }
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
