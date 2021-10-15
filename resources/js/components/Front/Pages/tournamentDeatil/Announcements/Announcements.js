import React, { Component } from 'react'
import Axios from 'axios';

class Announcements extends Component {
    constructor(props) {
        super(props);
        this.state={
            announcement:[],
            is_display:false
            
        }
    }
    componentDidMount(){
        Axios.post('/api/get_announcement',{id:this.props.match.params.id}).then(res=>{
            // console.log(res);
            this.setState({
                is_display:true,
                announcement:res.data. announcement,
            })
        })
    }
    render() {
        return (
            <div>
                 {
                            this.state.announcement.map((data,index)=>{
                                return(
                    <div className="col-md-12 col-sm-12 matches-over">
                    
                            <div className="animated bfy-feed-item item-type-tournament-start bfy-feed-item item-type-tournament-start">
                             
                
                                <div className="item-timestamp-container">
                              
                                <div className="item-timestamp">8 days ago</div>
                                </div>
                                <div className="item-indicator-container">
                                <div className="item-indicator system" />
                                <div className="item-vertical-bar" />
                                </div>
                                <div className="item-body">
                                <div className="main-container">
                                    <div className="item-container">
                                    <div className="bfy-feed-message initial">
                                        <div className="message-details">
                                        <div className="bfy-avatar" style={{backgroundImage: 'url("https://cdn.battlefy.com/helix/images/live/battlebot.png")', backgroundSize: 'cover'}} />
                                        <div className="message-user-details">
                                            <p className="in-game-name" value="">{data.name}</p>
                                            <p className="username">[ System ]</p>
                                        </div>
                                        </div>
                                        <div className="message-content" translate><img height={25} src="/images/common/Confetti-Battlefy-Emoji.svg" /><span value="">{data.description}</span></div>
                                    </div>
                                    </div>
                                    <div className="reply-divider">
                                    <span className="divider" />
                                    </div>
                                    <div className="reply-container">
                                    <div className="item-replies">
                                    </div>
                                    </div>
                                    <a className="item-response-count inactive">
                                    0 Responses
                                    </a> 
                                </div>
                                </div>
                            </div>
                                                     
                 </div>
                  )
                })
            }  
             {
                                    this.state.announcement.length == 0 ? 
                                    <div className="col-md-12 col-sm-12 matches-over">
                                    <h3>No Announcement Available</h3>
                                          </div>:null
                                }
            </div>
        )
    }
}
export default Announcements;
