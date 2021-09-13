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
            address: "",
            address2: "",
            country: "",
            phone:"",
            postcode: "",
            city: "",
            cart_totals: 0,
            totals: 0,
            sub_cart_totals: 0,
            master_totals: 0,

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
                    address: res.data.cus.user.address,
                    phone: res.data.cus.user.phone,
                    postcode: res.data.cus.user.postcode,
                    city: res.data.cus.user.city,
                    country: res.data.cus.user.country,
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




        let senderdata = {
            cart_cookie_id : window.localStorage.getItem('cart_cookie_id')
        }
        Axios.post('/api/get_cookie_session_cart', senderdata).then(res => {
            console.log(res);
          
            if(res.data.cart){
                if(res.data.cart.length > 0){
                    this.setState({
                        cart_totals: res.data.cart[0].cart_totals,    
                        totals: res.data.cart[0].cart_totals,
                        master_totals:res.data.cart[0].cart_totals,      
                        sub_cart_totals:res.data.cart[0].sub_cart_totals
                    })
                }else{
                    this.setState({
                        loading:false
                    })
                }
            }else{
                this.setState({
                    loading:false,
                    cart:[]
                })
            }
        })
    }

    getFirstName(e) {
        this.setState({
            first_name: e.target.value,
        });
    }
    getLastName(e) {
        this.setState({
            last_name: e.target.value,
        });
    }
    getUserName(e) {
        this.setState({
            userName: e.target.value,
        });
    }
    getEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }
    getphone(e) {
        this.setState({
            phone: e.target.value,
        });
    };
    getAddress(e) {
        this.setState({
            address: e.target.value,
        });
    }
    getPostcode (e) {
        this.setState({
            postcode: e.target.value,
        });
    }
    getCity(e) {
        this.setState({
            city: e.target.value,
        });
    }
    getCountry(e) {
        this.setState({
            country: e.target.value,
        });
    }


    
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
                                            <input type="text" name="first name" className="inform-input" value={this.state.first_name} onChange={this.getFirstName.bind(this)} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>Last Name <i>*</i></span>
                                            <input type="text" name="last name" className="inform-input" value={this.state.last_name} onChange={this.getLastName.bind(this)} />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>Email Address <i>*</i></span>
                                            <input type="text" name="email" className="inform-input" value={this.state.email} onChange={this.getEmail.bind(this)} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                            <span>Phone <i>*</i></span>
                                            <input type="text" name="phone" className="inform-input" value={this.state.phone} onChange={this.getphone.bind(this)} />
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <div className="item">
                                            <label>
                                                <span>Address</span>
                                                <input type="text" name="address" className="inform-input" value={this.state.address} onChange={this.getAddress.bind(this)} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                                <span>City <i>*</i></span>
                                                <input type="text" name="town" className="inform-input" value={this.state.city} onChange={this.getCity.bind(this)} />
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <div className="item">
                                                <label>
                                                    <span>Country <i>*</i></span>
                                                    <input type="text" name="country" className="inform-input" value={this.state.country} onChange={this.getCountry.bind(this)} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="item">
                                            <label>
                                                <span>Postcode <i>*</i></span>
                                                <input className="inform-input" type="text" name="postcode" value={this.state.postcode} onChange={this.getPostcode.bind(this)} />
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
                                        <td className="total">$ {this.state.cart_totals}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Total</strong></td>
                                        <td className="total">$ {this.state.cart_totals}</td>
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
