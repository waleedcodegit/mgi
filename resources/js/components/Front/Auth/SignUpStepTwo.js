import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Swal from 'sweetalert2';


class SignUpStepTwo extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            primary_game: "",
            game_id: "",
            dob: "",
            country: "",
            gender: "",
        }
    }

    getFirstName(e){
        this.setState({
            first_name:e.target.value
        })
    }
    getLastName(e){
        this.setState({
            last_name:e.target.value
        })
    }
    getPrimaryGame(e){
        this.setState({
            primary_game:e.target.value
        })
    }
    getGameId(e){
        this.setState({
            game_id:e.target.value
        })
    }
    getDOB(e){
        this.setState({
            dob:e.target.value
        })
    }
    getCountry(e){
        this.setState({
            country:e.target.value
        })
    }
    getGender(e){
        this.setState({
            gender:e.target.value
        })
    }

    signupSubmit(e){
        Axios.post('/api/form_secound_validation',this.state).then(res=>{
            if(res.data.status == 200){
                let senddata = {
                    first_form: this.props.signUpFormOne,
                    secound_form: this.state,
                };
            
            Axios.post('/api/register_user',senddata).then(res=>{
                console.log(res);
                if(res.data.status == 200){
                    window.localStorage.setItem('mgltokenlogin',res.data.user.token);
                    window.open('/subsciption', '_self');
                } else {
                    Swal.fire({
                        icon: 'warning',
                        title: res.data.message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })  


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
    render() {
        return (
            <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Register</h4>
                            <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="item">
                                        <label>
                                        <span>First Name <i>*</i></span>
                                        <input type="text" name="first name" className="form-input" onChange={this.getFirstName.bind(this)} />
                                        </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                <div className="item">
                                    <label>
                                    <span>Last Name <i>*</i></span>
                                    <input type="text" name="last name" className="form-input" onChange={this.getLastName.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Primary Game <i>*</i></span>
                                    <input type="text" name="primary game" className="form-input" onChange={this.getPrimaryGame.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Game Id <i>*</i></span>
                                    <input type="text" name="game id" className="form-input" onChange={this.getGameId.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Date of Birth <i>*</i></span>
                                    <input type="date" name="birth" className="form-input" onChange={this.getDOB.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Country <i>*</i></span>
                                    <select className="form-input" onChange={this.getCountry.bind(this)}>
                                        <option>Select</option>
                                        <option>Ukraine</option>
                                        <option>USA</option>
                                        <option>Other</option>
                                    </select>
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Gender <i>*</i></span>
                                    <select className="form-input" onChange={this.getGender.bind(this)}>
                                        <option>Select</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                    </label>
                                </div>
                                </div>
                            </div>
                            </form>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="long-btn">
                                <a onClick={this.signupSubmit.bind(this)}>Register</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        signUpFormOne:state.signUpFormOne
    }
}

export default connect(mapStateToProps) (SignUpStepTwo);
