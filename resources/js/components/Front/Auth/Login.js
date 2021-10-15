import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            loading:false,
            display:false
        }
    }
    username(e){
        this.setState({
            email:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    componentDidMount(){
     
        const senderdata = {
            token: window.localStorage.getItem('mgltokenlogin')
          }
          Axios.post('/api/user_check_auth', senderdata).then(res => {
        
            if (res.data.status == 200) {
                
                this.setState({
                    display:true
                })
                this.props.history.push('/')
            }else{
                this.setState({
                    display:true
                })
            }
          })
    } 
    login(e){
        e.preventDefault();
        let senderdata = {
            email:this.state.email,
            password:this.state.password
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/user-login',senderdata).then(res=>{
            // this.props.changeUser({is_login:true,data:res.data.user});
            this.setState({
                loading:false
            })
            if(res.data.status == 200){
                this.props.changeUser({is_login:true,data:res.data.user});
                window.localStorage.setItem('mgltokenlogin',res.data.user.token);
                this.props.history.push('/');
                // Swal.fire({
                //     icon: 'success',
                //     title: 'Login Successfully.',
                //     showConfirmButton: false,
                //     timer: 1500
                //     })
            }else{
                // Swal.fire({
                //     icon: 'error',
                //     title: res.data.msg,
                //     showConfirmButton: false,
                //     timer: 1500
                //     })
            }
        })
    }
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container-form">
                    <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Login</h4>
                            <form>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Email <i>*</i></span>
                                    <input type="email" name="email" className="form-input" onChange={this.username.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Password <i>*</i></span>
                                    <input type="password" name="password" className="form-input" onChange={this.password.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="long-btn">
                                    {/* <span>Forgot Password?</span> */}
                                    <a href="" onClick={this.login.bind(this)}>Login</a>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="social-login text-center">
                                    New Here?
                                    <span><a href="/signup"> Get An Account </a></span><br />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="social-login-sec">
                                    <img src="images/common/fb-icon.png" />
                                    <img src="images/common/google-icon.png" />
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
        </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
       changeUser:(user)=>{
           dispatch({
               type:'CHANGE_USER',payload:user
            })
        }
    }
}

export default connect(null,mapDispatchToProps) (Login);
