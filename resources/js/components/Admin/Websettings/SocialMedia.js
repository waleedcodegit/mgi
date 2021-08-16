import React, { Component } from 'react';
import Axios from 'axios';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
class SocialMedia extends Component {
    constructor(props) {
        super(props);
        this.state={
            facebook_link:'',
            twitter_link:'',
            linkedin_link:'',
            youtube_link:'',
            gaming_link:'',
            error_string:'',
            loading: false
        }
    }
    componentDidMount(){
        Axios.get('/api/websettings').then(res=>{
            this.setState({
                facebook_link:res.data.websettings.facebook_link,
                twitter_link:res.data.websettings.twitter_link,
                linkedin_link:res.data.websettings.linkedin_link,
                youtube_link:res.data.websettings.youtube_link,
                gaming_link:res.data.websettings.gaming_link,
            })
        })
    }
    facebook_link(e){
        this.setState({
            facebook_link:e.target.value
        })
    }
    twitter_link(e){
        this.setState({
            twitter_link:e.target.value
        })
    }
    linkedin_link(e){
        this.setState({
            linkedin_link:e.target.value
        })
    }
    youtube_link(e){
        this.setState({
            youtube_link:e.target.value
        })
    }
    gaming_link(e){
        this.setState({
            gaming_link:e.target.value
        })
    }
    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/social_media_links',this.state).then(res=>{
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
    render() {
        return (
            <div>
                <div className="row col-md-12">
                    <div class="form-group input_div col-md-7">
                        <label className="input_label" for="exampleInputEmail1">Facebook Link</label>
                        <input value={this.state.facebook_link || ""}  onChange={this.facebook_link.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row col-md-12">
                    <div class="form-group input_div col-md-7">
                        <label className="input_label" for="exampleInputEmail1">Twitter Link</label>
                        <input value={this.state.twitter_link || ""}  onChange={this.twitter_link.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row col-md-12">
                    <div class="form-group input_div col-md-7">
                        <label className="input_label" for="exampleInputEmail1">LinkedIn Link</label>
                        <input value={this.state.linkedin_link || ""}  onChange={this.linkedin_link.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row col-md-12">
                    <div class="form-group input_div col-md-7">
                        <label className="input_label" for="exampleInputEmail1">Youtube Link</label>
                        <input value={this.state.youtube_link || ""}  onChange={this.youtube_link.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row col-md-12">
                    <div class="form-group input_div col-md-7">
                        <label className="input_label" for="exampleInputEmail1">Gaming Platform Link</label>
                        <input value={this.state.gaming_link || ""}  onChange={this.gaming_link.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
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

export default SocialMedia;