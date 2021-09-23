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
                privacies__and_policies:'',
                privacy_and_policy:'',
                id:this.props.match.params.id,
                error_string:'',
                loading:false
                
            };
            
        
        }

        async componentDidMount(){
            const privacy_and_policy_id = this.props.match.params.id;
            console.log(privacy_and_policy_id);
          const res = await Axios.get(`/api/edit_privacy_and_policy/${privacy_and_policy_id}`);
          console.log(res.data.privacyAndPolicy.privacies__and_policies);
          if(res.data.status === 200)
          {
              this.setState({
                privacy_and_policy: res.data.privacyAndPolicy.privacies__and_policies,
              });
          }
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
                        window.open('/adminpanel/privacyandpolicy-list', '_self');
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
                                        <ReactQuill onChange={this.privacy_and_policy.bind(this)}  id="privacy_and_policy"  value={this.state.privacy_and_policy || ""}/>
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