import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            loading:false
        }
    }
    // componentDidMount(){
    //     let senderdat = {
    //         token:window.localStorage.getItem('sop256skikl')
    //     }
    //     Axios.post('/api/admin_check_auth',senderdat).then(res=>{
    //         if(res.data.status == 200){
    //             this.props.history.push('/adminpanel');
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'You are already loged in Successfully.',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //                 })
    //         }
    //     })
    // }
    username(e){
        this.setState({
            username:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    login(e){
        e.preventDefault();
        let senderdata = {
            email:this.state.username,
            password:this.state.password
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/adminLogin',senderdata).then(res=>{
            this.setState({
                loading:false
            })
            if(res.data.status == 200){
                window.localStorage.setItem('sop256skikl',res.data.admin.token);
                // this.props.history.push('/adminpanel/Dashboard');
                window.open('/adminpanel/Dashboard', '_self');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                    })
            }else{
                Swal.fire({
                    icon: 'error',
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
                 <section className="section">
  <div className="container mt-5">
    <div className="row">
      <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <div className="card card-primary">
          <div className="card-header">
            <h4>Login</h4>
          </div>
          <div className="card-body">
           
              <div className="form-group">
                <label htmlFor="email">User</label>
                <input  onChange={this.username.bind(this)} id="email" type="text" className="form-control" name="email" tabIndex={1} required autofocus />
                <div className="invalid-feedback">
                  Please fill in your email
                </div>
              </div>
              <div className="form-group">
                <input onChange={this.password.bind(this)} id="password" type="password" className="form-control" name="password" tabIndex={2} required />
                <div className="invalid-feedback">
                  please fill in your password
                </div>
              </div>
              <div className="form-group">
                <button onClick={this.login.bind(this)} className="btn btn-primary btn-lg btn-block" tabIndex={4}>
                  Login
                </button>
              </div>
          
            
           
          </div>
        </div>
       
      </div>
    </div>
  </div>
</section>

            </div>
           );
    }
}

export default Login;