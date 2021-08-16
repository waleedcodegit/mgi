import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
            image:'',
            error_string:'',
            image:'noimage.png',
            binary_img:'',
            id:this.props.match.params.id,
            loading: false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_game_by_id',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                title:res.data.game.title,
                description:res.data.game.description,
                image: res.data.game.image
            })
        })
    }
    title(e){
        this.setState({
            title:e.target.value
        })
    }
    description(e){
        this.setState({
            description:e
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
    create(e){
        this.setState({
            loading:true
        })
        if(this.state.description =="<p><br></p>"){
            this.setState({
                loading:false
            })
            Swal.fire({
                icon: 'warning',
                title: "Description Field Is Required.",
                showConfirmButton: false,
                timer: 1500
                })
        }
        else{
            Axios.post('/api/update_game',this.state).then(res=>{
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
                        window.open('/adminpanel/games-list', '_self');
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
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Edit Videos</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                
                <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Video Title</label>
                            <input value={this.state.title}  onChange={this.title.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                        </div>
                        <h1 className="col-md-1"></h1>
                       
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Description</label>
                            <ReactQuill 
                            value={this.state.description || ""}
                              onChange={this.description.bind(this)}
                              />

                        </div>
                        <h1 className="col-md-1"></h1>
                        <div class="form-group input_div col-md-4">
                            <label className="input_label" for="exampleInputEmail1">Thumb Image</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                                <input  onChange={this.handleFileChange.bind(this)} type="file" className="m-2"></input>
                            </div>
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
            </div>
        );
    }
}

export default Edit;