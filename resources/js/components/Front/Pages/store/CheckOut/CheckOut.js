import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

export default class CheckOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: "",
            userName: "",
            email: "",
            address1: "",
            address2: "",
            country: "United States",
            phone:"",
            loading: true
        }
    }
    componentDidMount() {
        let data = {
            token:window.localStorage.getItem('mgltokenlogin')
        }
  
        Axios.post('/api/check_customer_auth',data).then(res=>{
            console.log(res);
            if(res.data.status == 200){
               this.setState({
                    first_name:res.data.cus.user.first_name,
                    last_name:res.data.cus.user.last_name,
                    email:res.data.cus.user.email,
                    loading:false,
               },function(){
                this.setState({
                    loading:false
                })
               })
            }else{
                
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry You Are not logged in Please Login.',
                    showConfirmButton: false,
                    timer: 1500
                    })
                this.props.history.push('/login');
            }
            
          })
    }

    getFirstName(e) {
        this.setState({
            first_name: e.target.value,
        });
    };
    getLastName(e) {
        this.setState({
            last_name: e.target.value,
        });
    };

    
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="checkout-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                            <h4>Billing Details</h4>
                            <div className="customer-inform">
                                <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>First Name <i>*</i></span>
                                            <input type="text" name="first name" className="inform-input" value={this.state.first_name} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>Last Name <i>*</i></span>
                                            <input type="text" name="last name" className="inform-input" value={this.state.last_name} />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>Email Address <i>*</i></span>
                                            <input type="text" name="email" className="inform-input" value={this.state.email} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>Phone <i>*</i></span>
                                            <input type="text" name="phone" className="inform-input" />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <div className="item">
                                            <label>
                                                <span>Address</span>
                                                <input type="text" name="address" className="inform-input" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                                <span>City <i>*</i></span>
                                                <input type="text" name="town" className="inform-input" />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="item">
                                                <label>
                                                    <span>Country <i>*</i></span>
                                                    <input type="text" name="country" className="inform-input" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                                <span>Postcode <i>*</i></span>
                                                <input className="error inform-input" type="text" name="postcode" />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                
                                </form>
                            </div>
                            
                            </div>
                            <div className="col-md-5">
                            <h4>Your order</h4>
                            <table className="cart-table">
                                <tbody>
                                    <tr>
                                        <th className="product"></th>
                                        <th className="total">Total</th>
                                    </tr>
                                
                                    <tr>
                                        <td>Subtotal</td>
                                        <td className="total">$ 120</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td className="total">$ 122</td>
                                    </tr>
                                </tbody>
                            </table>
                                <div className="cart-total">
                                    <div className="delivery-list">                     
                                        <label className="item">
                                            <input name="del-check" type="radio" />
                                            <span className="name">PayPal <a href="https://www.paypal.com/be/smarthelp/article/what-is-paypal-and-how-does-it-work-faq1655" target="_blank">What is PayPal?</a></span>
                                            <span className="price"><img src="images/common/card-img.jpg" alt="card" /></span>	
                                        </label>
                                        {/* <label className="item">
                                            <input name="del-check" type="radio" />
                                            <span className="name">Cash on Delivery</span>	
                                        </label> */}
                                        <button className="proceed">Place order<i className="fa fa-check" aria-hidden="true" /></button>
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
