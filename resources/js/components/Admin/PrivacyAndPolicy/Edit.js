import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
import Axios from 'axios';


class Edit extends Component {
    
        constructor(props) {
            super(props);
            this.state = {
                privacy_and_policy:'',
                id: '',
                loading: false
                
            };
            
        
        }

        componentDidMount(){
            Axios.get('/api/edit_privacy_and_policy').then(res=>{
                console.log(res);
                this.setState({
                    privacy_and_policy: res.data.privacyandpolicy.privacies__and_policies,
                    id: res.data.privacyandpolicy.id
                })
            })
        }
      
      
        privacy_and_policy(value){
        
            this.setState({
                privacy_and_policy:value
            })
        }
        
    
      update(e){
        this.setState({
            loading:true
        })
        if(this.state.privacy_and_policy =="<p><br></p>"){
            this.setState({
                loading:false
            })
            Swal.fire({
                icon: 'warning',
                title: "privacy_and_policy Field Is Required.",
                showConfirmButton: false,
                timer: 1500
                })
        } else {
            Axios.post('/api/update_privacy_and_policy',this.state).then(res=>{
                console.log(res);
                this.setState({
                    loading:false
                })
                if(res.data.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                        window.location.reload();
                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                }
            })
        }
        }
    
    
        render() {
            return (
                    <div id="page-content">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="panel panel-bordered">
                                <div className="panel-heading">
                                <h3 className="panel-title">Privacy & Policy Edit </h3>
                                </div>
                               
                                <div className="panel-body">
                                    <label htmlFor="price">Privacy & Policy </label>
                                        <ReactQuill onChange={this.privacy_and_policy.bind(this)}   value={this.state.privacy_and_policy || ""}/>
                                        <div className="ml-3">                    
                                            <button onClick={this.update.bind(this)} className="btn btn-success">
                                            {
                                                            this.state.loading ?
                                                            <div id="displayspinner" >
                                                            <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                                            <span className="sr-only">Loading...</span>
                                                            </div>
                                                        </div>
                                                        :<>Update</>
                                                        }
                                            </button>
                                        </div>
                                </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                    
            );
        }
    }
    
    


export default Edit ;