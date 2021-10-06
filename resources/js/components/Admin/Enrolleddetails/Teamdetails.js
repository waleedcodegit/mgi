import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            team:[],
            user:[],
            title: '',
            type: '',
            image: '',
            user_id:'',
            id:'',
            tournaments:[],
            userList: [],
            id:this.props.match.params.id,
            is_display:false
            
        }
    }
    
    componentDidMount(){
        Axios.post('/api/get_team_details',{id:this.props.match.params.id}).then(res=>{
            // console.log(res);
            this.setState({
                is_display:true,
                team:res.data.team
            })
        })
        Axios.post('/api/team-detail',{id:this.props.match.params.id}).then(res=>{
            console.log(res);
            this.setState({
                title: res.data.team_detail.title,
                type: res.data.team_detail.type,
                image: res.data.team_detail.image,
                userList: res.data.team_detail.team_user,
                user_id: res.data.team_detail.user_id
            })
        })
       
    }
    deleteenrollments(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_enrollments',senderdata).then(res=>{
           this.componentDidMount();
        });
       }

    render() {
        return (
            <div className="container">
                 {
                    this.state.is_display ? 
                    <div>
                         <div className="top_section_title_div">
                    <h2 className="section_title">Team Details</h2>
                </div>
                {/* <div className="card content_card_div mt-4 mb-5"> */}
                {/* <div className="col-md-3"> */}
                                    <div className="player-photo">
                                        <img className="img-responsive" src={img_base+this.state.image} alt="player" />
                                    </div>
                                    <h6 className="player-info-title">summary</h6>	
                                        <div className="summary">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                                <div className="item">Title:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.title}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Type:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.type}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Players:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.userList.length}</div>
                                            </div>
                                           
                                        {/* </div> */}
                                        {/* </div> */}
                                    </div>
                    </div>
                    <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Player Name</th>
                            <th>Team Name</th>
                            <th >Phone</th>
                            {/* <th >Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.team.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td><img style={{width:'200px'}} src={img_base+data.user.image}></img></td>
                                        <td>{data.user.first_name + ' ' +data.user.last_name}</td>
                                        <td>{data.user.phone}</td>
                  
                                        <td> <Link to={`/adminpanel/user_details/${data.user.id}`}> <button className="btn btn-warning">Player Details</button></Link></td>
                                    </tr>
                                )
                            }) 
                         } 
                        {
                                    this.state.team.length == 0 ? 
                                    <tr><td colSpan="9">No records founded</td></tr>:null
                        }
                    </tbody>
                </table>
                    </div> : 
                     <div>
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '48%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format mb-5"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                 }
               
            </div>
        );
    }
}

export default List;