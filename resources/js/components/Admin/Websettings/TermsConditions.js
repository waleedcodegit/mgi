import React, { Component } from 'react';
import Axios from 'axios';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
class TermsConditions extends Component {
    constructor(props) {
        super(props);
        this.state={
            terms_and_conditions:'',
            error_string:'',
            loading:false
        }
    }
    componentDidMount(){
        Axios.get('/api/websettings').then(res=>{
            this.setState({
                terms_and_conditions:res.data.websettings.terms_and_conditions,
            })
        })
    }
    terms_and_conditions(e){
        this.setState({
            terms_and_conditions:e
        })
    }
    create(e){
        this.setState({
            loading:true
        })
        if(this.state.terms_and_conditions =="<p><br></p>"){
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
            this.setState({
                loading:false
            })
            Axios.post('/api/terms_conditions',this.state).then(res=>{
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
                            <label className="input_label" for="exampleInputEmail1">Term and Conditions</label>
                            <ReactQuill 
                             value={this.state.terms_and_conditions || ""}
                              onChange={this.terms_and_conditions.bind(this)}
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

export default TermsConditions;