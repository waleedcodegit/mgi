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
            search_string:''
        }
    }
    
    componentDidMount(){
        Axios.post('/api/gat_all_posts').then(res=>{
            this.setState({
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
                <div className="top_section_title_div">
                    <h2 className="section_title">News/Articals List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                        
                        {/* <div class="form-group input_div col-md-12">
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    <input type="email" onChange={this.search.bind(this)} class="form-control ml-1 mt-2" 
                                    aria-describedby="emailHelp" placeholder="Search by Order Id, Customer Id, Name, Email, Phone, Date" />
                                </div>
                                <div className="col-md-2">
                                    <button onClick={this.search_records.bind(this)} className="btn btn-success ml-1 mt-2">Search</button>
                                </div>
                            </div>
                        </div> */}
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.posts.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td><img style={{width:'200px'}} src={img_base+data.image}></img></td>
                                        <td>{data.title}</td>
                                        <td>{data.status}</td>
                                        <td><Link to={`/adminpanel/edit-news/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link></td>
                                        <td><button className="btn btn-light" onClick={this.DeleteCategory.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i>
                                                        </button></td>
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
        );
    }
}

export default Orderslist;