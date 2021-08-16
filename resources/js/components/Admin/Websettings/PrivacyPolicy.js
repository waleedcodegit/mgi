import React, { Component } from 'react';
import Axios from 'axios';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
class PrivacyPolicy extends Component {
    constructor(props) {
        super(props);
        this.state={
            privacy_policy:'',
            loading:false,
        }
    }
    componentDidMount(){
        Axios.get('/api/websettings').then(res=>{
            this.setState({
                privacy_policy:res.data.websettings.privacy_policy,
            })
        })
    }
    privacy_policy(e){
        console.log(e);
        this.setState({
            privacy_policy:e
        })
    }
    create(e){
        this.setState({
            loading:true
        })
        if(this.state.privacy_policy =="<p><br></p>"){
            this.setState({
                loading:false
            })
            Swal.fire({
                icon: 'warning',
                title: "Privacy Policy Field Is Required.",
                showConfirmButton: false,
                timer: 1500
                })
        }
        else{
            Axios.post('/api/privacy_policy',this.state).then(res=>{
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
            <div>
                <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Privay and Policy</label>
                            <ReactQuill 
                             value={this.state.privacy_policy || ""}
                              onChange={this.privacy_policy.bind(this)}
                              />

                        </div>
                   </div>
                   <div className="ml-3">                  
                    <button onClick={this.create.bind(this)} className="btn btn-success">
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
        );
    }
}

export default PrivacyPolicy;