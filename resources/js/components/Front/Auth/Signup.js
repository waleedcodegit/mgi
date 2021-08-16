import React, { Component } from 'react';


import {connect} from 'react-redux';
import SignUpStepTwo from '../Auth/SignUpStepTwo';
import SignUpStepOne from '../Auth/SignUpStepOne';

class Signup extends Component {
    
    
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container-form">
                        {
                            this.props.stepSignUp == 1 ? 
                                <SignUpStepOne></SignUpStepOne>
                            :null
                        }
                        {
                            this.props.stepSignUp == 2 ? 
                                <SignUpStepTwo></SignUpStepTwo>
                            :null
                        }
                    </div>
                </section>

                
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//             changeSteps:(signUpStepOne) => {dispatch({
//                 type: "Sign_Up_Step_One",
//                 payload: signUpStepOne
//             })
//         }
//     }
// }

const mapStateToProps = (state) => {
    return{
        stepSignUp:state.stepSignUp
    }
  }

export default connect(mapStateToProps) (Signup);
