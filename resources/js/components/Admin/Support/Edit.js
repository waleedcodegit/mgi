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
            title:"",
            descritpion:"",
            reply:'',
            status:'Closed',
            error_string:'',
            id:this.props.match.params.id,
            token:'',
            loading:false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_ticket_by_id',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                title:res.data.ticket.title,
                descritpion:res.data.ticket.description,
                token:  window.localStorage.getItem('sop256skikl')
            })
        })
    }
    reply(e){
        this.setState({
            reply:e
        })
    }
   
   
   
   
    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/update_ticket',this.state).then(res=>{
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
                    window.open('/adminpanel/tickets-open', '_self');
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
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Ticket:</label>
                            <label className="input_label" for="exampleInputEmail1">{this.state.descritpion }</label>
                           

                        </div>
                        
                       
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Reply</label>
                            <ReactQuill 
                              onChange={this.reply.bind(this)}
                              />
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