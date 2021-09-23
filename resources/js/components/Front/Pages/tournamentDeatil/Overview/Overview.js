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
            watchstream:'',
            videolink:'',
            contact_details: ''

        }
    }
    componentDidMount(){
        Axios.post('/api/get_watchstream_by_id',{id:this.props.match.params.id}).then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                videolink:res.data.watchstream.videolink,
                

            })
        })
    }
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12">
                            <div className="matches-over">
                                <img src="/images/common/article-list.jpg" />
                                <a href={"https://www.youtube.com/embed/"+this.state.videolink} target="_blank" className="btn-stream"><i className="fa fa-video-camera" aria-hidden="true" /> Watch Stream </a>
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
                               
                            </div>
                            </div>
            </div>
        )
    }
}

export default Overview;
