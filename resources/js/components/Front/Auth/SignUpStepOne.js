import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {connect} from 'react-redux';
import Axios from 'axios';
import Swal from 'sweetalert2'

class SignUpStepOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            confirm_password: "",
        }
    }

    getEmail(e){
        this.setState({
            email:e.target.value
        })
    }
    getPassword(e){
        this.setState({
            password:e.target.value
        })
    }
    getConfirmPassword(e){
        this.setState({
            confirm_password:e.target.value
        })
    }

    nextForm(e) {
        Axios.post('/api/form_one_validation',this.state).then(res=>{
            if(res.data.status == 200){
                this.props.select_signupData(this.state);
                this.props.change_step(2);
            }else{
                Swal.fire({
                    icon: 'warning',
                    title: res.data.message,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })        
    }

    // Signup
    // componentDidMount(){
    //     Axios.post('/api/get_videos_list').then(res=>{
    //         console.log(res.data);
    //         this.setState({
    //             // videos:res.data
    //         })
    //     })
    //   }
    render() {
        return (
            <div>
                <div className="row">
                            <div className="customer-info">
                                <div className="col-md-12">
                                    <h4>Sign up</h4>
                                    <form>
                                    <div className="row">
                                        <div className="col-md-12">
                                        <div className="item">
                                            <label>
                                            <span>Email <i>*</i></span>
                                            <input type="text" name="first name" className="form-input" onChange={this.getEmail.bind(this)} />
                                            </label>
                                        </div>
                                        </div>
                                        <div className="col-md-12">
                                        <div className="item">
                                            <label>
                                            <span>Password <i>*</i></span>
                                            <input type="password" name="password" className="form-input" onChange={this.getPassword.bind(this)} />
                                            </label>
                                        </div>
                                        </div>
                                        <div className="col-md-12">
                                        <div className="item">
                                            <label>
                                            <span>Confirm Password <i>*</i></span>
                                            <input type="password" name="confirm_password" className="form-input" onChange={this.getConfirmPassword.bind(this)} />
                                            </label>
                                        </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="long-btn">
                                                <a onClick={this.nextForm.bind(this)}>Next</a>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="social-login text-center">
                                                <span> or</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="social-login-sec">
                                            <FacebookLogin
                                            style={{borderRadius: "50px"}}
                                            appId="" //APP ID NOT CREATED YET
                                            fields="name,email,picture"
                                            // callback={responseFacebook}
                                        />
                                        
                                        <br />
                                        <br />


                                        <GoogleLogin
                                            
                                            clientId="" //CLIENTID NOT CREATED YET
                                            buttonText="LOGIN WITH GOOGLE"
                                            // onSuccess={responseGoogle}
                                            // onFailure={responseGoogle}
                                        />
                                                {/* <img src="images/common/fb-icon.png" />
                                                <img src="images/common/google-icon.png" /> */}
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
          change_step:(stepSignUp)=>{dispatch({
              type:'CHANGE_SignUp_STEP',
              payload:stepSignUp
            })
        },
        select_signupData:(data1)=>{dispatch({
                type:'Sign_Up_Form_One',
                payload:data1
            })
        }
    }
}
const mapStateToProps = (state) => {
  return{
    signUpStepOne:state.signUpStepOne
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignUpStepOne);
