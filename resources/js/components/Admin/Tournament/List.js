import React, { Component } from 'react';
import Axios from 'axios';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            tournaments:[],
            is_display: true,
        }
    }
    componentDidMount(){
        Axios.get('/api/get_tournaments').then(res=>{
            console.log(res);
            this.setState({
                is_display: true,
                tournaments:res.data.tournaments
            })
        })
    }
    Deletetournament(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_tournament',senderdata).then(res=>{
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
                    <h2 className="section_title">Tournament List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Title</th>
                            <th>Image</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th colSpan="2">Actions</th>
                            {/* <th colSpan="2">Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tournaments.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.title}</td>
                                        <td><img style={{width:'200px'}} src={img_base+data.header_image}></img></td>
                                        <td>{data.start_date}</td>
                                        <td>{data.end_date}</td>
                                        <td>{data.status}</td>
                                        {/* <td><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link></td> */}
                                        <td><Link to={`/adminpanel/edit-tournament/${data.id}`}><button  className="btn btn-success"> Manage Tournament</button></Link>
                                        <button className="btn btn-light" onClick={this.Deletetournament.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button></td>
                                        {/* <td><button className="btn btn-light" onClick={this.Deletetournament.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i>
                                                        </button></td> */}
                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.tournaments.length == 0 ? 
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