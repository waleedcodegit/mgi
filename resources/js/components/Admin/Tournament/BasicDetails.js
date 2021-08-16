import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
import {connect} from 'react-redux';

class BasicDetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            description:'',
            start_date: '',
            end_date:'',
            start_time:'',
            error_string:'',
            image:'',
            binary_img:'',
            game_id:'',
            loading: false
        }
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
    start_date(e){
        this.setState({
            start_date:e.target.value
        })
    }
    end_date(e){
        this.setState({
            end_date:e.target.value
        })
    }
    start_time(e){
        this.setState({
            start_time:e.target.value
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
            loading:true,
            game_id:window.localStorage.getItem('game_id')
        }, function(){
            if(this.state.description =="<p><br></p>"){
                this.setState({
                    loading:false
                })
                Swal.fire({
                    icon: 'warning',
                    title: "description Field is Required.",
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
            else{
                this.setState({
                    loading:false
                })
                Axios.post('/api/create-tournament',this.state).then(res=>{
                    window.localStorage.setItem('tournament_id' , res.data.tournament_id);
                    if(res.data.status == 200){
                        this.props.changeSteps({
                            step1_tab_display: "nav-link",
                            step1_tab_content: "tab-pane",
                            step2_tab_display: "nav-link",
                            step2_tab_content: "tab-pane fade",
                            step3_tab_display: "nav-link active",
                            step3_tab_content: "tab-pane fade show active",
                            step4_tab_display: "nav-link",
                            step4_tab_content: "tab-pane fade",
                            step5_tab_display: "nav-link",
                            step5_tab_content: "tab-pane fade",
                            step1_is_display: false,
                            step1_is_display: false,
                            step1_is_display: true,
                            step1_is_display: false,
                            step1_is_display: false,
                           })
                        Swal.fire({
                            icon: 'success',
                            title: res.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                            })
                            // window.open('games-list', '_self')
                    }else{
                        Swal.fire({
                            icon: 'danger',
                            title: res.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                            })
                    }
                })
            }
           
        })
      
    }
    render() {
        return (
            <div className="container">
            <div className="top_section_title_div">
                <h2 className="section_title">Basic Details</h2>
            </div>
            <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
            
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Tournament Title</label>
                        <input  onChange={this.title.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                   
                   
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Descritpion</label>
                        <ReactQuill 
                          onChange={this.description.bind(this)}
                          />
                    </div>
                   

               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Start Date</label>
                        <input  onChange={this.start_date.bind(this)} type="date" class="form-control " aria-describedby="emailHelp" />
                    </div>
                   
                   
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">End Date</label>
                        <input  onChange={this.end_date.bind(this)} type="date" class="form-control " aria-describedby="emailHelp" />
                    </div>
                
                   
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Start Time</label>
                        <input  onChange={this.start_time.bind(this)} type="time" class="form-control " aria-describedby="emailHelp" />
                    </div>
                   
                   
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Header Image</label>
                        <div className="card p-1">
                            <img className="img_thumb" src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                            <input onChange={this.handleFileChange.bind(this)} type="file" className="m-2"></input>
                        </div>
                    </div>
                 

               </div>
              
              
               <div className="ml-3">                    
                <button onClick={this.create.bind(this)} className="btn btn-info">
                {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Next</>
                                }
                </button>
               </div>
            </div>
        </div>
    
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      changeSteps:(tabs) => {dispatch({
              type: 'CHANGE_STEPS',
              payload: tabs
          })}
    }
}

export default connect(null, mapDispatchToProps)(BasicDetails);