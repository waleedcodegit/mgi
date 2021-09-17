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
            tournaments:[],
            title:'',
            is_display: true,
        }
    }
    componentDidMount(){
        Axios.get('/api/get_tournaments').then(res=>{
        
            this.setState({
                is_display: true,
                tournaments:res.data.tournaments,
                // title:res.data.title,
               
            })
        })
    }
Title(e) {       
   this.setState({ 
     title:e.target.value
   })
}

create(e){
        e.preventDefault();

        let senddata = {
            title: this.state.title,
            image: this.state.image
        }
        
        console.log(senddata);
            Axios.post('/api/create-watchstream',this.state).then(res=>{
               
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
                        this.props.history.push('/adminpanel/watchstream-list');
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
    image(event) {
        if (event.target.files) {
            const files = Array.from(event.target.files);
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
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Create Brakets</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                
                  
               <label className="input_label" for="exampleInputEmail1">Tournament Name</label>
              
                  {
                    this.state.is_display ? 
                    <div>                    
                       <tr>
                           <div className="row col-md-12">
                              <div class="form-group input_div col-md-12">
                             <select  className="form-control " style={{width:'950px'}}  onChange={this.Title.bind(this)}>
                             <option value="">Select</option>
                             {
                            this.state.tournaments.map((data,index)=>{
                                return(
                            <option value={data.id}>{data.title}</option>   
                           
                                 )
                            })
                        }                           
                          </select>
                          
                         <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Image</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                                <input onChange={this.image.bind(this)} type="file" className="m-2"></input>
                            </div>
                        </div>
                        <h1 className="col-md-1"></h1>

                   </div>
                                        
                          
                     </div>       
               </div>
                                        {/* <td>{data.title}</td> */}
                                        {/* <td><img style={{width:'200px'}} src={img_base+data.header_image}></img></td> */}
                                    </tr>
                           
                        
                       
                    </div> : 
                         <div>
                            <div id="displayspinner" style={{ display: 'block', marginLeft: '48%', marginTop: '10%' }}>
                                <div className="spinner-border text-info ml-2 spinner_format mb-5"  role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>
                    }
 
               
            
                  
                   
                   {/* <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Thumb Image</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                                <input onChange="" type="file" className="m-2"></input>
                            </div>
                        </div>
                        <h1 className="col-md-1"></h1>

                   </div> */}
                  
                  
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