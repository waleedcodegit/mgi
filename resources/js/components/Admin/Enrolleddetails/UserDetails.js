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
            first_name: '',
            last_name: '',
            image: '',
            user_id:'',
            email:'',
            gender:'',
            dob:'',
            country:'',
            city:'',
            address:'',
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
        Axios.post('/api/get_user_profile',{id:this.props.match.params.id}).then(res=>{
            console.log(res.data.data.first_name);
            this.setState({
                first_name: res.data.data.first_name,
                last_name: res.data.data.last_name,
                image: res.data.data.image,
                gender: res.data.data.gender,
                email: res.data.data.email,
                city: res.data.data.city,
                dob: res.data.data.dob,
                country: res.data.data.country,
                city: res.data.data.city,
                address: res.data.data.address,
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
                    <h2 className="section_title">Player Details</h2>
                </div>
                {/* <div className="card content_card_div mt-4 mb-5"> */}
                {/* <div className="col-md-3"> */}
                                    <div className="player-photo">
                                        <img className="img-responsive" style={{width:'200px'}} src={img_base+this.state.image}alt="player" />
                                    </div>
                                    
                                        <div className="summary">
                                        <div className="row">
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                                <div  className="item">Name:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.first_name + ' ' +this.state.last_name}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Email:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.email}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Date of Birth:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.dob}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Gender:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.gender}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Country:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.country}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">City:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.city}</div>
                                            </div>
                                            <div className="col-md-3 col-sm-3 col-xs-3">
                                            <div className="item">Address:</div>
                                            </div>
                                            <div className="col-md-9 col-sm-9 col-xs-9">
                                                <div className="item">{this.state.address}</div>
                                            </div>
                                           
                                        {/* </div> */}
                                        {/* </div> */}
                                        
                                    </div>
                                    
                    </div>
                   
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