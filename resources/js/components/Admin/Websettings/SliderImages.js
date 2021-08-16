import React, { Component } from 'react';
import Axios from 'axios';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
class SliderImages extends Component {
    constructor(props) {
        super(props);
        this.state={
            error_string:'',
            image:'',
            binary_img:'',
            image2:'',
            binary_img2:'',
            image3:'',
            binary_img3:'',
            websettings:[]
        }
    }
    componentDidMount(){
        Axios.get('/api/websettings').then(res=>{
            this.setState({
                image:res.data.websettings.slider_image1,
                image2:res.data.websettings.slider_image2,
                image3:res.data.websettings.slider_image3,
            })
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
    handleFileChangeTwo(e){
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
                    image2: images[0],
                    binary_img2: images
                })
            }, error => { console.error(error); });
           
        }
    }
    handleFileChangeThree(e){
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
                    image3: images[0],
                    binary_img3: images
                })
            }, error => { console.error(error); });
           
        }
    }
    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/slider_image',this.state).then(res=>{
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
                        <div class="form-group input_div col-md-8">
                            <label className="input_label" for="exampleInputEmail1">Slider Image 1</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                                <input onChange={this.handleFileChange.bind(this)} type="file" className="m-2"></input>
                            </div>
                        </div>
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-8">
                            <label className="input_label" for="exampleInputEmail1">Slider Image 2</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img2 !=''? this.state.binary_img2 : img_base+this.state.image2}></img>
                                <input onChange={this.handleFileChangeTwo.bind(this)} type="file" className="m-2"></input>
                            </div>
                        </div>
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-8">
                            <label className="input_label" for="exampleInputEmail1">Slider Image 3</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img3 !=''? this.state.binary_img3 : img_base+this.state.image3}></img>
                                <input onChange={this.handleFileChangeThree.bind(this)} type="file" className="m-2"></input>
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
                                  :<>Save</>
                                }
                    </button>
                   </div>
            </div>
        );
    }
}

export default SliderImages;