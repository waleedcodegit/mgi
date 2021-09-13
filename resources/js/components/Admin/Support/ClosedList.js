import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class ClosedList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tickets:[],
            search_string:'',
            is_display: false
        }
    }
    
    componentDidMount(){
        Axios.get('/api/get_closed_tickets').then(res=>{
            console.log(res);
            this.setState({
                tickets:res.data.tickets,
                is_display: true
            })
        })
    }
    // search(e){
    //     this.setState({
    //         search_string:e.target.value
    //     })
    // }
    // search_records(){
    //     let senderdata = {
    //         string:this.state.search_string
    //     }
    //     Axios.post('/api/search_orders',senderdata).then(res=>{
    //         this.setState({
    //             orders:res.data
    //         })
    //     })
    // }
   
    render() {
        return (
            <div className="container">
                 {
                    this.state.is_display ? 
                    <div> 
                        <div className="top_section_title_div">
                    <h2 className="section_title">Closed Tickets List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Email</th>
                            <th>Reply</th>
                            <th>Replied By</th>
                           
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
                                        <td dangerouslySetInnerHTML={{__html:data.reply}}></td>
                                        <td>{data.replier.email}</td>
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

export default ClosedList;