import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import {img_base} from '../../../Configs/baseUrls';

class JoinTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: [],
            search_string: ''
        }
    }

    componentDidMount() {
        Axios.get('/api/all_teams').then(res=>{
            this.setState({
                teams: res.data.teams
            })
        })
    }

    search(e){
        this.setState({
            search_string:e.target.value
        })
    }

    search_teams(e){
        e.preventDefault();
        let senderdata = {
            string:this.state.search_string
        }
        Axios.post('/api/search_team',senderdata).then(res=>{
            this.setState({
                teams:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container">
                    <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Join Team</h4>
                            <div className="search-field">
                            <form>
                                <div className="wrap">
                                <input type="text" onChange={this.search.bind(this)} />
                                <button onClick={this.search_teams.bind(this)}><i className="fa fa-search" aria-hidden="true" /></button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="overflow-scroll">
                            <table>
                                <tr>
                                    <th>Date</th>
                                    <th className="club">Title</th>
                                    <th>Type</th>
                                </tr>

                                {
                                    this.state.teams.map((data,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{data.created_at}</td>
                                                <td className="club">
                                                    <a href={`/team-detail/${data.id}`}>
                                                        <span className="team"><img src={img_base+data.image} width={30} height={30} alt="team" /></span> <span style={{margin: 'auto'}}>{data.title}</span>
                                                    </a>
                                                </td>
                                                <td>{data.type}</td>
                                            </tr>
                                        )
                                    })
                                }
                                </table>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default JoinTeam;
