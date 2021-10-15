import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            games:[],
            is_display:false
            // customers:[],
            // search_string:''
        }
    }
    
    componentDidMount(){
        Axios.get('/api/get_games').then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                games:res.data.games
            })
        })
    }
    deleteBanner(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_game',senderdata).then(res=>{
           this.componentDidMount();
        });
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
    // DeleteVideo(id){
    //     let senderdata={
    //       id:id
    //     }
    //     Axios.post('/api/delete_video',senderdata).then(res=>{
    //        this.componentDidMount();
    //     });
    //    }
    render() {
        return (
            <div className="container">
                 {
                    this.state.is_display ? 
                    <div>
                         <div className="top_section_title_div">
                    <h2 className="section_title">Games List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.games.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.title}</td>
                                        <td style={{width:'100px'}} dangerouslySetInnerHTML={{__html:data.description}}></td>
                                        <td><img style={{width:'200px'}} src={img_base+data.image}></img></td>
                                        <td><Link to={`/adminpanel/edit-game/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link>
                                        <button className="btn btn-light" onClick={this.deleteBanner.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button></td>

                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.games.length == 0 ? 
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