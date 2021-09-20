import React, { Component } from 'react'
import Axios from 'axios';

class Details extends Component {
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
        )
    }
}
export default Details;