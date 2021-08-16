import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            tickets:[],
            search_string:'',
            is_display: false
        }
    }
    
    componentDidMount(){
        Axios.get('/api/get_open_tickets').then(res=>{
            console.log(res);
            this.setState({
                tickets:res.data.tickets,
                is_display: true
            })
        })
    }
    render() {
        return (
            <div className="container">
                 {
                    this.state.is_display ? 
                    <div> 
                         <div className="top_section_title_div">
                    <h2 className="section_title">Tickets List</h2>
                </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            
                            <th>Title</th>
                            <th>Description</th>
                            <th>Email</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tickets.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.title}</td>
                                        <td>{data.description}</td>
                                        <td>{data.user.email}</td>
                                        <td><Link to={`/adminpanel/edit-ticket/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link></td>
                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.tickets.length == 0 ? 
                                    <tr><td colSpan="9">No records founded</td></tr>:null
                        }
                    </tbody>
                </table>
                    </div>
                     :
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