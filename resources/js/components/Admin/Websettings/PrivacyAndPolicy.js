import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            privacyAndPolicy:[],
            privacies__and_policies:'',
            id: '',
            is_display:false
           
        }
    }
    
    componentDidMount(){
        Axios.get('/api/get_privacy_and_policy').then(res=>{
            // console.log(res);
            this.setState({
                is_display:true,
                privacyAndPolicy:res.data.privacyAndPolicy,
                  
            })
        })
    }
    deleteprivacy_and_policy(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_privacy_and_policy',senderdata).then(res=>{
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
                    <h2 className="section_title">Privacy & Policy List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Title</th>
                            
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.privacyAndPolicy.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                       
                                        <td dangerouslySetInnerHTML={{__html:data.privacies__and_policies}}></td>
                                        <td><Link to={`/adminpanel/edit-privacyandpolicy/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link>
                                        {/* <button className="btn btn-light" onClick={this.deleteprivacy_and_policy.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button> */}
                                        </td>

                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.privacyAndPolicy.length == 0 ? 
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