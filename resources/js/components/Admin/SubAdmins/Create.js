import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
class Create extends Component {
    constructor(props) {
        super(props);
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            phone:'',
            password:'',
            error_string:'',
            loading:false
        }
    }
    first_name(e){
        this.setState({
            first_name:e.target.value
        })
    }
    last_name(e){
        this.setState({
            last_name:e.target.value
        })
    }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    phone(e){
        this.setState({
            phone:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    create(e){
        this.setState({
            loading:true
        })
        Axios.post('/api/add-admin',this.state).then(res=>{
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
                    window.open('admins', '_self')
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
                <h2 className="section_title">Create Sub-Admin</h2>
            </div>
            <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
            
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1">First Name</label>
                        <input  onChange={this.first_name.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                    <h1 className="col-md-1"></h1>
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Last Nname</label>
                        <input  onChange={this.last_name.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                   
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Email</label>
                        <input  onChange={this.email.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                    <h1 className="col-md-1"></h1>
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Password</label>
                        <input  onChange={this.password.bind(this)} type="password" class="form-control " aria-describedby="emailHelp" />
                    </div>
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Phone#</label>
                        <input  onChange={this.phone.bind(this)} type="text" class="form-control " aria-describedby="emailHelp" />
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