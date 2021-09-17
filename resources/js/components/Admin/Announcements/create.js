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
            description:'',
            name:'',
            is_display: true,
        }
    }
    componentDidMount(){
        Axios.get('/api/get_tournaments').then(res=>{
            console.log(res.data.tournaments);
            this.setState({
                is_display: true,
                tournaments:res.data.tournaments,
               
            })
        })
    }
    Title(e) {       
        this.setState({ 
          title:e.target.value
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
    create(e){
        e.preventDefault();

        let senddata = {
            title: this.state.title,
            name: this.state.name,
            description:this.state.description,
        }
        
        console.log(senddata);
            Axios.post('/api/create_announcement',this.state).then(res=>{
               
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
  
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Create Announcement</h2>
                </div>
                
                <label className="input_label" for="exampleInputEmail1">Tournament Name</label>
              
                {/* {
                    this.state.is_display ?  */}
                    <div>                    
                       <tr>
                       <div className="row col-md-12">
                          <div class="form-group input_div col-md-12">
                         <select  className="form-control " style={{width:'950px'}}   onClick={this.Title.bind(this)}>
                         <option value="">Select</option>
                         {
                            this.state.tournaments.map((data,index)=>{
                                return(
                        <option value={data.id}>{data.title}</option>  
                       
                        )
                    })
                }               
                      </select>
                      </div>
                      </div>
                      </tr>
                      
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Title</label>
                            <input style={{width:'950px'}} onChange={this.name.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                        </div>
                        <h1 className="col-md-1"></h1>
                       
                   </div>
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Descritpion</label>
                            <textarea style={{width:'950px'}} onChange={this.description.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
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