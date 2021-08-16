import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state={
            first_name:'',
            surname:'',
            email:'',
            address:'',
            error_string:'',
            id:this.props.match.params.id,
            loading:false
        }
    }
    componentDidMount(){
        Axios.post('/api/get-admin-by-id',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                first_name:res.data.admin.first_name,
                surname:res.data.admin.surname,
                email:res.data.admin.email,
                address:res.data.admin.address,
            })
        })
    }
    first_name(e){
        this.setState({
            first_name:e.target.value
        })
    }
    surname(e){
        this.setState({
            surname:e.target.value
        })
    }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    address(e){
        this.setState({
            address:e.target.value
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
                    window.open('/adminpanel/admins', '_self')
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
                <h2 className="section_title">Edit Rights of Sub-Admin</h2>
            </div>
            <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
            
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1">First Name</label>
                        <input value={this.state.first_name} onChange={this.first_name.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                    <h1 className="col-md-1"></h1>
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Surname</label>
                        <input value={this.state.surname} onChange={this.surname.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                   
               </div>
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Email</label>
                        <input value={this.state.email} onChange={this.email.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                    </div>
                    <h1 className="col-md-1"></h1>
                    <div class="form-group input_div col-md-5">
                        <label className="input_label" for="exampleInputEmail1"> Address</label>
                        <input value={this.state.address} onChange={this.address.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
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