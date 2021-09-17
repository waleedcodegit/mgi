import React, { Component } from 'react';
import Axios from 'axios';
import Details from './Details/Details';
import Rules from './Rules/Rules';
import Prizes from './Prizes/Prizes';
import Contact from './Contact/Contact';
import { connect } from 'react-redux';

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
            // console.log(res.data.tournament);
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
                                <ul className="champ-nav-list" role="tablist">
                                    <li className="active"><a href="#details" role="tab" data-toggle="tab">DETAILS</a></li>
                                    <li><a href="#rules" role="tab" data-toggle="tab">RULES</a></li>
                                    <li><a href="#prizes" role="tab" data-toggle="tab"> PRIZES</a></li>
                                    
                                    <li><a href="#contact" role="tab" data-toggle="tab">CONTACT</a></li>
                                </ul>		
                                </div>
                                <div className="tab-content">
                                <div className="tab-pane active" id="details" role="tabpanel">

                                    <Details {...this.props}></Details>

                                </div>
                                <div className="tab-pane" id="rules" role="tabpanel">

                                    <Rules {...this.props}></Rules>

                                </div>
                                <div className="tab-pane" id="prizes" role="tabpanel">
                                    
                                    <Prizes {...this.props}></Prizes>

                                </div>
                               
                                <div className="tab-pane" id="contact" role="tabpanel">
                                    
                                    <Contact {...this.props}></Contact>
                                    
                                </div>
                            </div><br></br>
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
                              
                               
                               
                                
                                
                                </div>
                            </div>
                            </div>
            </div>
        )
    }
}

export default Overview;
