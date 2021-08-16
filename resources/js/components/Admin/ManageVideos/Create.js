import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            video_youtube_id:'',
            description: '',
            status:'',
            error_string:'',
            loading:false
        }
    }
    title(e){
        this.setState({
            title:e.target.value
        })
    }
    description(e){
        this.setState({
            description:e.target.value
        })
    }
    youtube_id(e){
        this.setState({
            video_youtube_id:e.target.value
        })
    }
    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/create_video',this.state).then(res=>{
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
                    this.props.history.push('/adminpanel/videos-list');
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
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Create Videos</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Video Title</label>
                            <input  onChange={this.title.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                        </div>
                        <h1 className="col-md-1"></h1>
                       
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Youtube Video Id</label>
                            <input  onChange={this.youtube_id.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                        </div>
                        <h1 className="col-md-1"></h1>
                       
                   </div>

                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Description</label>
                            <textarea class="form-control" onChange={this.description.bind(this)}></textarea>
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
                                  :<>Create</>
                                }
                    </button>
                   </div>
                </div>
            </div>
        );
    }
}

export default Create;