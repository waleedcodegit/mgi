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
            details: [],
            descritpion:"",
            error_string:'',
            id:this.props.match.params.id,
            token:'',
            loading:false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_support_comment',{id:this.props.match.params.id}).then(res=>{
            console.log(res);
            this.setState({
                details: res.data.data,
            })
        })
    }
    
    getDescription(e){
        this.setState({
            descritpion:e.target.value
        })
    }
   
   
   
   
    create(e){
        this.setState({
            loading:true
        })
        let senddata = {
            description: this.state.descritpion,
            support_id:this.props.match.params.id,
            token: window.localStorage.getItem('sop256skikl')
        }
        Axios.post('/api/create_comment_admin',senddata).then(res=>{
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
                    window.location.reload();
                    // window.open('/adminpanel/tickets-open', '_self');
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
                    <h2 className="section_title">Ticket</h2>
                </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-12">
                        <div className="card">
                        <div className="card-header">
                            <h4>Comments</h4>
                        </div>
                        <div className="card-body">
                            <ul className="list-unstyled list-unstyled-border list-unstyled-noborder">
                                {
                                    this.state.details.map((data,index)=> {
                                        return (
                                            <li className="media">
                                                {
                                                    data.user != null ? 
                                                        <img alt="image" className="mr-3 rounded-circle" width={70} src={img_base+data.user.image} />
                                                    :
                                                        <img alt="image" className="mr-3 rounded-circle" width={70} src="/admin/assets/img/users/user-1.png" />
                                                    
                                                }
                                                <div className="media-body">
                                                    {
                                                        data.user != null ? 
                                                            <div className="media-title mb-1">{data.user.first_name} {data.user.last_name}</div>
                                                        :
                                                            <div className="media-title mb-1">Admin</div>
                                                    }
                                                    <div className="text-time">{data.created_at}</div>
                                                    <div className="media-description text-muted">
                                                        {data.description}                                              
                                                    </div>
                                                    {
                                                                    data.image ? 
                                                                    <img src={img_base+data.image} />
                                                                    : null
                                                                }
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-12">
                            <label className="input_label" for="exampleInputEmail1">Reply</label>
                            <textarea onChange={this.getDescription.bind(this)} class="form-control"/>
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
                                  :<>Send</>
                                }
                    </button>
                   </div>
                </div>
            </div>
        );
    }
}

export default Edit;