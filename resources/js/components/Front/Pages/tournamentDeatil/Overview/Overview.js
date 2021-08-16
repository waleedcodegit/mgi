import React, { Component } from 'react';
import Axios from 'axios';

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game_name: '',
            regions: '',
            start_date: '',
            start_time: '',
            end_date: '',
            rules: '',
            prizez: '',
            contact_details: ''

        }
    }

    componentDidMount(){
        Axios.post('/api/get-tournament-by-id',{id:this.props.match.params.id}).then(res=>{
            console.log(res.data.tournament);
            this.setState({
                game_name: res.data.tournament.game.title,
                regions: res.data.tournament.region,
                start_date: res.data.tournament.start_date,
                start_time: res.data.tournament.start_time,
                end_date: res.data.tournament.end_date,
                rules: res.data.tournament.rules,
                prizez: res.data.tournament.prizez,
                contact_details: res.data.tournament.contact_details,
            })
        })
    }
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12">
                            <div className="matches-over">
                                <img src="/images/common/article-list.jpg" />
                                <a href className="btn-stream"><i className="fa fa-video-camera" aria-hidden="true" /> Watch Stream </a>
                            </div>
                            </div>
                            <div className>
                            <div className="col-md-12 col-sm-12 matches-over">
                                <div className="divide-line-pr" />
                                <h3>ABOUT THIS TOURNAMENT</h3>
                                <p>The First Md1 Format Simple Elimination of HS History<br />
                                No Second Chance, No Forgiveness, NO MISERICOOOORDIAAAAI!</p>
                            </div>
                            </div>
                            <div className>
                            <div className="col-md-12">
                                <div className="mesgs-2 margin-top">
                                <div className="msg_history-2">
                                    <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                        <p>Test which is a new approach to have all
                                            solutions</p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                    </div>
                                    </div>
                                    <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Test which is a new approach to have all
                                        solutions</p>
                                        <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                                    </div>
                                    <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                        <p>Test, which is a new approach to have</p>
                                        <span className="time_date"> 11:01 AM    |    Yesterday</span></div>
                                    </div>
                                    </div>
                                    <div className="outgoing_msg">
                                    <div className="sent_msg">
                                        <p>Apollo University, Delhi, India Test</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span> </div>
                                    </div>
                                    <div className="incoming_msg">
                                    <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                    <div className="received_msg">
                                        <div className="received_withd_msg">
                                        <p>We work directly with our designers and suppliers,
                                            and sell direct to you, which means quality, exclusive
                                            products, at a price anyone can afford.</p>
                                        <span className="time_date"> 11:01 AM    |    Today</span></div>
                                    </div>
                                    </div>
                                </div>
                                <div className="type_msg">
                                    <div className="input_msg_write">
                                    <input type="text" className="write_msg" placeholder="Type a message" />
                                    <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="champ-navigation">
                                <ul className="champ-nav-list">
                                    <li className="active"><a href="#details">DETAILS</a></li>
                                    <li><a href="#rules">RULES</a></li>
                                    <li><a href="#prizes"> PRIZES</a></li>
                                    {/* <li><a href="#schedule">SCHEDULE</a></li> */}
                                    <li><a href="#contact">CONTACT</a></li>
                                </ul>		
                                </div>
                                <div className="champ-tab-wrap tab-content">
                                <div className="tab-item part-wrap tab-pane active" id="details">
                                    <div className="part-list">
                                        <div className="col-md-12">
                                            <div className="prt-list-sec">
                                                <h2>Game &amp; Region</h2>
                                                <h3>{this.state.game_name}</h3>
                                                <p>This tournament is only open for players in these regions: {this.state.regions}</p>
                                            </div>
                                            <div className="divide-line-pr" />
                                            <div className="prt-list-sec">
                                                <h2>Start Date &amp; Time</h2>
                                                <h3>{this.state.start_date}</h3>
                                                <p>{this.state.start_time}</p>
                                            </div>
                                            <div className="divide-line-pr" />
                                            <div className="prt-list-sec prt-list-sec-last">
                                                <h2>End Date &amp; Time</h2>
                                                <h3>{this.state.end_date}</h3>
                                                {/* <p>6:00 AM PDT</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-item match-wrap tab-pane" id="rules">
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="prt-list-sec">
                                                <h3>Rules</h3>
                                                <p dangerouslySetInnerHTML={{__html:this.state.rules}}></p>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="tab-item tournament-tab tab-pane" id="prizes">
                                    <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="prt-list-sec">
                                            <h3>Prizes</h3>
                                            <p dangerouslySetInnerHTML={{__html:this.state.prizez}}></p>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                {/* <div className="tab-item news-tab tab-pane" id="schedule">
                                    <div className="news-list">
                                    <div className="container">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="prt-list-sec">
                                            <h3>Schedule</h3>
                                            <p>
                                                12: 00H Brasília time 04/27/2021<br />
                                                TRANSMISSION - TWITCH.TV/KERB</p>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>	
                                </div> */}
                                <div className="tab-item news-tab tab-pane" id="contact">
                                    <div className="news-list">
                                    <div className="container">
                                        <div className="row">
                                        <div className="col-md-12">
                                            <div className="prt-list-sec">
                                            <p dangerouslySetInnerHTML={{__html:this.state.contact_details}}></p>
                                            </div>
                                        </div> 
                                        </div>
                                    </div>
                                    </div>	
                                </div>
                                </div>
                            </div>
                            </div>
            </div>
        )
    }
}

export default Overview;
