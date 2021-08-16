import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Change extends Component {
    constructor(props) {
        super(props);
        this.state={
            header_image:'',
            footer_image:'',
            loading: false,
            binary_img_header: '',
            binary_img_footer: ''
        }
    }
    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/change-banner-ads',this.state).then(res=>{
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
            //  window.open('games-list', '_self')
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
    headerImage(e){
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
                    header_image: images[0],
                    binary_img_header: images
                })
            }, error => { console.error(error); });
           
        }
    }

    footerImage(e){
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
                    footer_image: images[0],
                    binary_img_footer: images
                })
            }, error => { console.error(error); });
           
        }
    }
    
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Create Game</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Header Image Ads (1400*232)</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img_header !=''? this.state.binary_img_header : img_base+this.state.image}></img>
                                <input onChange={this.headerImage.bind(this)} type="file" className="m-2"></input>
                            </div>
                        </div>
                        <h1 className="col-md-1"></h1>

                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Footer Image Ads (1400*232)</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img_footer !=''? this.state.binary_img_footer : img_base+this.state.image}></img>
                                <input onChange={this.footerImage.bind(this)} type="file" className="m-2"></input>
                            </div>
                        </div>
                        <h1 className="col-md-1"></h1>

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
                                  :<>Create</>
                                }
                    </button>
                   </div>
                  
                </div>
            </div>
        );
    }
}

export default Change;