import React, { Component } from 'react';
import Axios from 'axios';


class Participants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enroll_users:[],
        }
    }
    componentDidMount(){
        Axios.post('/api/get_tournament_enroll_user',{tournament_id: this.props.match.params.id}).then(res=>{
            console.log(res);
            this.setState({
                enroll_users: res.data.enrollment_users
            })
        })
    }
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 matches-over">
                            <h3>PLAYERS ({this.state.enroll_users.length})</h3>
                            <div className="row">
                            {
                                this.state.enroll_users.map((data,index)=>{
                                    return(
                                        <div className="col-md-4">
                                            <bf-player-card><div className="player-card-container">
                                                <div className="player-in-game-name">
                                                    <div className="avatar-container">
                                                    <bf-avatar><div className="wrapper sticker-boarder">
                                                        <p className="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase"> <img src="/images/common/match-list-team-img.png" /> </p>
                                                        </div>
                                                    </bf-avatar>
                                                    </div>
                                                    <div className="player-label">
                                                    <h1>{data.user.first_name} {data.user.first_name}</h1>
                                                    </div>
                                                </div>
                                                <div className="player-stat">
                                                    <div className="player-stat-label">
                                                    <bf-class-pick-displayer>
                                                    </bf-class-pick-displayer>
                                                    </div>
                                                </div>
                                                </div>
                                            </bf-player-card>
                                        </div> 
                                    )
                                })
                            }

                            {
                                this.state.enroll_users.length == 0 ? 
                                <h3 className="text-light text-center">No records founded</h3>:null
                            }
                                                               
                            </div>
                    </div>
            </div>
        )
    }
}
export default Participants;
