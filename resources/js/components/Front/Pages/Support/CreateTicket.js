import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

class CreateTicket extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            description: '',
            image: '',
            first_name:'',
            last_name:'',
            email:'',
            issues:'',
            subject:'',
            user_id: this.props.user.data.id
            
        }
    

    

        if(!this.props.user.is_login) {
            window.open('/login', '_self');
        }
    }
    getSubject(e) {
        this.setState({
            subject:e.target.value
        })
    }
    getDescription(e) {
        this.setState({
            description:e.target.value
        })
    }
    getName(e) {
        this.setState({
           name:e.target.value 
           
        })
    }
    getEmail(e) {
        this.setState({
            email:e.target.value
        })
    }
    getissues(e) {
        this.setState({
            issues:e.target.value
        })
    }
  
    
    componentDidMount(){
       
        Axios.post('/api/get_user_profile',{id: this.props.user.data.id}).then(res=>{
            console.log(res);
            this.setState({
               first_name:res.data.data.first_name,
               last_name:res.data.data.last_name,
               email:res.data.data.email,
            })
        })
    }

    create(e) {
        e.preventDefault();
        let senddata = {
           name: this.state.first_name,
            email: this.state.email,
            subject: this.state.subject,
            description: this.state.description,
            issues:this.state.issues,
            user_id: this.props.user.data.id
        }
        
        Axios.post('/api/create_ticket',senddata).then(res=>{
            console.log(res);
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
                this.props.history.push('/support'); 
            
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
                 <section class="image-header">
    
    </section>
   
    
       
    <section class="login-sec">
        <div  class="container">
            <div class="row">
                <div class="ticket-info">
                <div class="col-md-12 text-left">
                    <h4>Ticket <br></br>Submission Form</h4>
     
                        <form>
                            <div class="row">
                          
                                
                                
                                <div class="col-md-4">
                                    <div class="item">
                                        <label>
                                            <span> Name </span>
                                            <input type="text" name="primary game" class="issu-text" onChange={this.getName.bind(this)} value={this.state.first_name}/>
                                        </label>
                                    </div>
                                </div>
                                
                                      <div class="col-md-4">
                                    <div class="item">
                                        <label>
                                            <span>Email <i></i></span>
                                            <input type="text" name="primary game" class=" issu-text" onChange={this.getEmail.bind(this)} value={this.state.email}/>
                                        </label>
                                    </div>
                                </div>
                                
                                    <div class="col-md-4">
                                    <div class="item">
                                        <label>
                                            <span>Issue Selection</span>
                                            <br></br>
                                           <select name="issues" id="issues" class="issue-select" onChange={this.getissues.bind(this)} value={this.state.issues} >
                                           <option value="">Select</option>
                                             <option value="Billing">Billing</option>
                                                <option value="Naming">Naming</option>
                                                 <option value="Opel">Opel</option>
                                                  <option value="Gaming">Gaming</option>
                                              </select>
                                        </label>
                                    </div>
                                </div>
                                
                                 </div>
                            
                                <div class="row"> 
                                        <div class="col-md-12">
                                    <div class="item">
                                        <label>
                                            <span>Subject <i></i></span><br></br>
                                            <input  type="text" name="primary game" onChange={this.getSubject.bind(this)} class=" issu-text" value={this.state.subject}/>
                                        </label>
                                    </div>
                                </div>
                                 </div>
                                 <div class="row">
                                     <div class="col-md-12">
                                                <div class="item">
                                                    <label>
                                                        <span>Discription</span><br></br>
                                                        <textarea  onChange={this.getDescription.bind(this)} class="issu-text" placeholder="Message"></textarea>
                                                    </label>
                                                </div>
                                            </div>
             
                                  </div>
                            
                        </form>
                
          
                    
                            <div class="row">
                            
                           <div class="col-md-4">
                                    <div class="long-btn">
                                        
                                         <a onClick={this.create.bind(this)}>Submit</a>
                                        
                                        </div>
                                </div>
                            <div class="col-md-8">
                                </div>
                         </div>
    
                    
                        
                    </div>
            
                </div>
                
            </div>
        </div>
    </section>
            </div>
           

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (CreateTicket);
