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
            contact_details: '',
            chat_messages: [],
            message: '',
            chat_display: false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_watchstream_by_id',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                is_display:true,
                videolink:res.data.watchstream.videolink,
            })
        })

        const datasend = {
            user_id:this.props.user.data.id,
            tournament_id: this.props.match.params.id
        }

        Axios.post('/api/enrollment_check',datasend).then(res => {
            if (res.data.status == 200) {
                this.setState({
                    chat_display: true
                }) 
            }
        })
    }

    componentWillMount() {
        setInterval(()=>{
            Axios.post('/api/get_tournament_chat_messages',{id:this.props.match.params.id}).then(res=>{
                this.set_scroll();
                this.setState({
                    chat_messages: res.data.messages
                })
            })
            this.set_scroll();
        }, 5000)  
    }

    getMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    sendMessage(e) {
        e.preventDefault();
        let senddata = {
            message: this.state.message,
            tournament_id:this.props.match.params.id,
            sender_id:this.props.user.data.id
        }

        Axios.post('/api/send_tournament_chat_messages',senddata).then(res=>{
            this.setState({
                chat_messages: res.data.messages
            })
        })
    }

    set_scroll(){
        var d = $('#messages_div');
        d.scrollTop(d.prop("scrollHeight"));
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
                                    
                                </div>
                            </div>
                            <div className>
                            {
                                this.state.chat_display == true ? 
                                    <div className="col-md-12">
                                        <div className="mesgs-2 margin-top">
                                            <div className="msg_history-2" id="messages_div">
                                                {
                                                    this.state.chat_messages.map((data,index) => {
                                                        return(
                                                            <>
                                                            {
                                                                this.props.user.data.id == data.sender ?
                                                                <div className="outgoing_msg">
                                                                    <div className="sent_msg">
                                                                        <p>{data.message}</p>
                                                                        <span className="time_date"> {data.time}    |    {data.date}</span>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <div className="incoming_msg">
                                                                    <div className="incoming_msg_img"></div>
                                                                    <div className="received_msg">
                                                                        <div className="received_withd_msg">
                                                                            <p>{data.message}</p>
                                                                            <span className="time_date"> {data.time}    |    {data.date}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            }
                                                            </>
                                                            
                                                        )
                                                    })
                                                }
                        
                                            </div>
                                        <div className="type_msg">
                                            <div className="input_msg_write">
                                            <input type="text" className="write_msg" placeholder="Type a message" onChange={this.getMessage.bind(this)} />
                                            <button className="msg_send_btn" type="button" onClick={this.sendMessage.bind(this)}><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                : 
                                null
                            }
                            
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

const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}

export default connect(mapStateToProps,null) (Overview);
