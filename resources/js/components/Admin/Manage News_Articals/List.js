import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class Orderslist extends Component {
    constructor(props) {
        super(props);
        this.state={
            posts:[],
            customers:[],
            search_string:'',
            is_display:false
        }
    }
    
    componentDidMount(){
        Axios.post('/api/gat_all_posts').then(res=>{
            this.setState({
                is_display:true,
                posts:res.data
            })
        })
    }
    search(e){
        this.setState({
            search_string:e.target.value
        })
    }
    search_records(){
        let senderdata = {
            string:this.state.search_string
        }
        Axios.post('/api/search_orders',senderdata).then(res=>{
            this.setState({
                orders:res.data
            })
        })
    }
    DeleteCategory(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_post',senderdata).then(res=>{
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
                    <h2 className="section_title">News/Articles List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                    </div>
                <table className="table table-hover table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.title}</td>
                                        <td>{data.status}</td>
                                        <td width="15%"><Link to={`/adminpanel/edit-news/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link>
                                        <button className="btn btn-light" onClick={this.DeleteCategory.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button></td>
                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.posts.length == 0 ? 
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

export default Orderslist;