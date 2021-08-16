import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            subscription:[],
            is_display:false
        }
    }
    
    componentDidMount(){
        Axios.get('/api/subscription_list').then(res=>{
            this.setState({
                is_display:true,
                subscription:res.data.subscription
            })
        })
    }
    deleteBanner(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/subscription_list',senderdata).then(res=>{
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
                            <h2 className="section_title">Subscription List</h2>
                        </div>
                        <table className="table table-hover table-bordered table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Duration</th>
                                    <th>Days</th>
                                    <th>Price</th>
                                    <th>Duration</th>
                                    <th width="15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.subscription.map((data,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td>{data.duration}</td>
                                                <td>{data.days}</td>
                                                <td>{data.price}</td>
                                                <td>{data.description}</td>
                                                <td><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></td>
                                               
                                            </tr>
                                        )
                                    })
                                }
                                {
                                            this.state.subscription.length == 0 ? 
                                            <tr><td colSpan="3">No records founded</td></tr>:null
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