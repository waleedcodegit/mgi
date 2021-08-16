import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            term_and_condition:[],
            is_display:false
            
        }
    }
    
    componentDidMount(){
        Axios.get('/api/term_and_condition_list').then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                term_and_condition:res.data.term_and_condition
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
                    <h2 className="section_title">Terms & Conditions List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                           
                            <th>Terms & Conditions</th>
                            
                            
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.term_and_condition.map((data,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        
                                        <td dangerouslySetInnerHTML={{__html:data.terms_and_conditions}}></td>
                                        
                                        <td><Link to={`/adminpanel/edit-term_and_condition/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link></td>
                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.term_and_condition.length == 0 ? 
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