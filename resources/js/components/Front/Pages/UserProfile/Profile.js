import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';


class Profile extends Component {

    constructor(props) {
        super(props);
        this.state={
            tournaments:[],
        }
    }

    componentDidMount(){
        Axios.post('/api/get_user_enroll_tournament',{id:this.props.user.data.id}).then(res=>{
            this.setState({
                
            })
        })
    }
    render() {
        return (
            <div>
                <div className="ad-banner2">
                    <a href="#"><img src="/images/common/top-banner.jpg" /></a>
                </div>
                <div id="news" className>
                    {/*ESPORT TEAM LANDING NEWS BEGIN*/} 
                    <div className="esport-team-player-profile">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12 text-center">
                            <img src="/images/common/heading.png" />	
                        </div>
                        <div className="col-md-2 col-sm-4">
                            <div className="profile-img">
                            <img src="/images/common/stuff-person.jpg" />
                            </div>
                        </div>
                        <div className="col-md-10 col-sm-8">
                            <div className="profile-sec">
                            <div className="row">
                                <div className="col-md-5 col-sm-4 col-xs-12">
                                <h3>{this.props.user.data.first_name} {this.props.user.data.last_name}</h3>
                                {/* <img src="/images/common/usa-flag.png" /> */}
                                <span> {this.props.user.data.country}</span>
                                </div>
                                <div className="col-md-4 col-sm-8 col-xs-12">
                                
                                </div>
                                <div className="col-md-3 col-xs-12">
                                <div className="profile-buttons">
                                    <a href="chat.html" className="btn-prf">
                                    Message
                                    </a>
                                    
                                </div>
                                </div>
                                
                            </div>
                            <div className="divide-line-pr" />
                            <div className="row">
                                <div className="col-md-8">
                                <span> Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</span>
                                </div>
                                <div className="col-md-4">
                                <div className="profile-count">
                                    <span>20</span>
                                    <p>Badges Earned</p>
                                </div>
                                <div className="profile-count">
                                    <span>20</span>
                                    <p>Games Played</p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="divide-line-pr" />
                    </div>
                    </div>
                </div>
                <div className="esport-fvrt-game">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6">
                        <h2>Tournaments</h2>
                                               
                        <div className="gems-section">
                            <div className="row">
                            <div className="col-md-3">
                                <div className="profile-img">
                                <img src="/images/common/stuff-person3.jpg" />
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="profile-sec">				
                                <h3>Pubg: Player Unknown Battleground</h3>
                                <div className="divide-line-pr2" />
                                <div className="prf-batch2">
                                    <ul>
                                    <li><img src="images/common/bounty_hunter_icon.png" /></li>
                                    <li><img src="images/common/Arbeiderpartiet-logo.png" /></li>
                                    <li><img src="images/common/beastmaster_icon.png" /></li>
                                    <li><img src="images/common/centaur_icon.png" /></li>
                                    <li><img src="images/common/earth_spirit_icon.png" /></li>
                                    <li><img src="images/common/ember_spirit_icon.png" /></li>
                                    <li><img src="images/common/juggernaut_icon.png" /></li>
                                    <li><img src="images/common/enigma_icon.png" /></li>
                                    </ul>
                                    <ul>
                                    <li><img src="images/common/bounty_hunter_icon.png" /></li>
                                    <li><img src="images/common/Arbeiderpartiet-logo.png" /></li>
                                    <li><img src="images/common/beastmaster_icon.png" /></li>
                                    <li><img src="images/common/centaur_icon.png" /></li>
                                    <li><img src="images/common/earth_spirit_icon.png" /></li>
                                    <li><img src="images/common/ember_spirit_icon.png" /></li>
                                    <li><img src="images/common/juggernaut_icon.png" /></li>
                                    <li><img src="images/common/enigma_icon.png" /></li>
                                    </ul>
                                    <div className="prog-sec2">
                                    <h3>Achivments</h3>
                                    <div className="progress">
                                        <div className="progress-bar2" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{width: '30%'}}>
                                        <span className="sr-only">70% Complete</span>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="divide-line-pr2" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="profile-count2">
                                <span>25</span>
                                <p>Tournmants Played</p>
                                </div>
                                <div className="profile-count2">
                                <span>20</span>
                                <p>Achivments</p>
                                </div>
                                <div className="profile-count2">
                                <span>03</span>
                                <p>Skitform Played</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                        
                        <div className="full-sec">
                            <h2>Team 
                            </h2>
                            <div className="gems-section-vb">
                            <div className="row padding-bt">
                                <div className="col-md-5 col-sm-5">
                                <div className="calnder-img">
                                    <img src="/images/common/cl-1.jpg" />
                                </div>
                                </div>
                                <div className="col-md-7 col-sm-7">
                                <div className="calnder-div">
                                    <h3>Team Name Here</h3>
                                    <p> 26 members</p>
                                    <span>Wins  20</span>
                                    <h5>Loses 30</h5>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                            <div className="full-sec">
                                <h2>Team 
                                </h2>
                                <div className="gems-section-vb">
                                    <div className="row padding-bt">
                                    <div className="create-btn">
                                        <a href="create-team.html">Create Team</a>
                                    </div>
                                    <div className="join-btn">
                                        <a href="join-team.html">Join Team</a>
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    </div>
                </div>
                <div className="ad-banner">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <a href="#"><img src="/images/common/e-photo2.jpg" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="divide-line" />
                </div>
                </div>

        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,null) (Profile);
