import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            duration:'',
            days:'',
            price:'',
            description:'',
            id:this.props.match.params.id,
            error_string:'',
            loading:false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_subscription_by_id',{id:this.props.match.params.id}).then(res=>{
           
            this.setState({
                duration:res.data.subscription.duration,
                days:res.data.subscription.days,
                price: res.data.subscription.price,
                description: res.data.subscription.description
            })
        })
    }
    duration(e){
        this.setState({
            duration:e.target.value
        })
    }
    days(e){
        this.setState({
            days:e.target.value
        })
    }
    price(e){
        this.setState({
            price:e.target.value
        })
    }
    description(e){
        this.setState({
            description:e.target.value
        })
    }
    DeleteVarient(ind){
        let temp_arr = this.state.varients;
        temp_arr.map((data,index)=>{
            if(index == ind){
                temp_arr.splice(index,1)
            }
        })

        this.setState({
            varients:temp_arr
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
                img_arr.push(images);
                this.setState({
                    imageArray: img_arr
                })
            }, error => { console.error(error); });
           
        }
        
    }

    
    
    Update(e){
        this.setState({
            loading:true
        })
    
            Axios.post('/api/update_subscription',this.state).then(res=>{
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
                        window.open('/adminpanel/subscriptions-list', '_self');
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
            <div id="addproducts" className="container" >
                <div className="top_section_title_div">
                    <h2 className="section_title">Add Subscription</h2>
                </div>
                <div className="container">
                    <div className="card content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Duration</label>
                                <input onChange={this.duration.bind(this)} value={this.state.duration} type="text" class="form-control " id="Inputduration"   />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Days</label>
                                <input onChange={this.days.bind(this)}  value={this.state.days}type="text" class="form-control " id="Inputdays"  />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Price</label>
                                <input onChange={this.price.bind(this)}   value={this.state.price} type="text" class="form-control " id="Inputprice"  />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Description</label>
                                <textarea onChange={this.description.bind(this)} value={this.state.description}  type="text" class="form-control " id="Inputdescription"   />
                            </div>


                        </div>

                        
                        {
                            this.state.error_string != ''?
                            <p className="text-danger  ml-3">{this.state.error_string}</p>
                            :null
                        }
                        <div className="submit_btn">
                            <button onClick={this.Update.bind(this)} style={{width:'150px'}} className="btn btn-success ml-3 mb-5">
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
        );
    }
}

export default Edit;