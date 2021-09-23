import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
import Axios from 'axios';


class Create extends Component {
        constructor(props) {
                super(props);
                this.state={
                    term_and_condition: '',
                  
                }
            }
            term_and_condition(value){
                this.setState({
                    term_and_condition:value
                })
            }
            create(e){
                this.setState({
                    loading:true
                })
                
                    Axios.post('/api/add_term_and_condition',this.state).then(res=>{
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
                                 window.open('term-and-condition-list', '_self')
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
                
            
            handleFileChange(e){
                if (e.target.files) {
                    const files = Array.from(e.target.files);
        
                    const promises = files.map(file => {
                        return (new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.addEventListener('load', (ev) => {
                                resolve(ev.target.result);
                            });
                            reader.addEventListener('error', reject);
                            reader.readAsDataURL(file);
                        }))
                    });
                    let img_arr = [];
                    Promise.all(promises).then(images => {
                        this.setState({
                            image: images[0],
                            binary_img: images
                        })
                    }, error => { console.error(error); });
                   
                }
            }
        
    
        render() {
            return (
                    <div id="page-content">
                        <div className="row">
                            <div className="col-sm-12">
                            <div className="panel panel-bordered">
                                <div className="panel-heading">
                                <h3 className="panel-title">Terms & Conditions</h3>
                                </div>
                               
                                <div className="panel-body">
                                    <label htmlFor="price">Terms & Conditions</label>
                                        <ReactQuill onChange={this.term_and_condition.bind(this)}   value={this.state.term_and_condition || ""}/>
                                        <div className="ml-3">                    
                                            <button onClick={this.create.bind(this)} className="btn btn-success">
                                            {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Create</>
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
    
    


export default Create ;