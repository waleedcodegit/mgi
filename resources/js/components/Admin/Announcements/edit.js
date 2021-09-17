import Axios from 'axios';
import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css'; 
import { baseurl, img_base } from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            description:'',
            id:this.props.match.params.id,
            loading:false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_announcement_by_id',{id:this.props.match.params.id}).then(res=>{
            console.log(this.props.match.params.id);
            this.setState({
                is_display:true,
                name:res.data.announcement.name,
                description:res.data.announcement.description
            })
        })
       
    }


    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/update_announcement',this.state).then(res=>{
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
                    this.props.history.push('/adminpanel/announcements-list');
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
    name(e){
        this.setState({
            name:e.target.value
        })
    }
    description(e){
        this.setState({
            description:e.target.value
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Edit Announcement</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Title</label>
                            <input style={{width:'950px'}} value={this.state.name} onChange={this.name.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                        </div>
                        <h1 className="col-md-1"></h1>
                       
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Descritpion</label>
                            <textarea style={{width:'950px'}} value={this.state.description} onChange={this.description.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
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