import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:[],
            is_display:false
            
        }
    }
    
    componentDidMount(){
        Axios.post('/api/get_emails').then(res=>{
             console.log(res);
            this.setState({
                is_display:true,
                email:res.data.email
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
                    <h2 className="section_title">Emails List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Image</th>
                            <th>User Name</th>
                            <th>Email Address</th>
                            <th>Email</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.email.map((data,index)=>{
                                // console.log(data.user.image);
                               
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td><img style={{width:'120px'}} src={img_base+data.user.image}></img></td>
                                        <td>{data.user.first_name + ' ' + data.user.last_name}</td>
                                        <td>{data.user.email}</td>
                                        <td>{data.email}</td>
                                    </tr>
                                )
                              }) 
                         }   
                         {
                                    this.state.email.length == 0 ? 
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