import React, { Component } from 'react';
import Axios from 'axios';
import { img_base } from '../../../../Configs/baseUrls';
import Swal from 'sweetalert2';

export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartData: [],
            loading: true,
        }
    }
    componentDidMount() {
        let senderdata = {
            cart_cookie_id : window.localStorage.getItem('cart_cookie_id')
        }
        Axios.post('/api/get_cookie_session_cart',senderdata).then(res=>{
            console.log(res);
            if(res.data.cart) {
                if(res.data.cart.length > 0){
                    this.setState({
                        cartData:res.data.cart,
                    },function(){
                        this.setState({
                            loading:false
                        })
                    })
                }else{
                    this.setState({
                        loading:false
                    })
                }
            } else {
                this.setState({
                    loading:false,
                    cartData:[]
                })
            }
        })
    }
    changeQty(val,product) {
        let temp = this.state.cartData;
        temp.map((data)=>{
            if(data.id == product.id){
                data.quantity = val
            }
        })
        this.setState({
            cartData:temp
        })
    }
    deleteFromCart(id){
        let senderdata = {
            id:id,
        }
        Axios.post('/api/remove_product_from_cart',senderdata).then(res=>{
            this.componentDidMount();
            Swal.fire({
                icon: 'success',
                title: 'Product Deleted From cart Successfully.',
                showConfirmButton: false,
                timer: 1500
            })
            
        })
    }
    updateCart(){
        let payload ={
          items : this.state.cartData
        }
        Axios.post('/api/update_cart',payload).then(res=>{
          window.location.reload();
        })
      }

    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                {
                    this.state.loading ?
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format mb-5"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :
                    <>
                    {
                        this.state.cartData.length == 0 ?

                        <div className="container-fluid mt-5 mb-5 text-center no_data">
                            <img style={{width:'200px'}} src={img_base+"sorry.png"}></img>
                            <h5 classNam="text-center" style={{color: "#fff"}}>Sorry your cart is Empty</h5>
                        </div>
                        :

                        <section className="cart-wrap">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <h4>Your shopping Cart</h4>
                        </div>
                        <div className="col-md-12 overflow-scroll">
                        <table className="cart-table">
                            <tbody>
                                <tr>
                                    <th />
                                    <th className="product">Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th className="total">Total</th>
                                </tr>
                            
                            {
                                this.state.cartData.map((data,index)=>{
                                    return(
                                        <tr className="cart_iem" key={index}>
                                            <td className="delete"><a onClick={this.deleteFromCart.bind(this,data.id)}><i className="fa fa-close" aria-hidden="true" /></a></td>
                                            <td className="name"><img className="product-image" src={img_base+data.product[0].images[0].image} alt="cart-product" style={{width: "80px"}} />{data.product[0].name}</td>
                                            <td className="cost">$ {data.price}</td>
                                            <td className="quantity"><input type="number" value={data.quantity} onChange={(e)=>{this.changeQty(e.target.value,data)}} /></td>
                                            <td className="totals">$ {Number.parseFloat(data.price * data.quantity)}</td>
                                        </tr>
                                    )
                                })
                            }
                            
                            </tbody>
                        </table>
                        </div>
                        <div className="col-md-4 col-sm-6">
                        {/* <div className="coupon">
                            <input type="text" />
                            <button><span>Apply coupon</span></button>
                        </div> */}
                        </div>
                        <div className="col-md-8 col-sm-6">
                            <div className="update-wrap">
                                <button className="update" onClick={this.updateCart.bind(this)}>update cart</button>
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                        {/* <div className="cart-offer">
                            <h5>special offer for you</h5>
                            <div className="offer">
                            <div className="store-badge new">new</div>
                            <div className="title">official <span>apparel</span></div>
                            <img src="images/soccer/cart-offer.jpg" alt="cart-offer" />
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className="cart-total">
                                <h5>Cart Totals</h5>
                                <div className="delivery-list">
                                    <div className="cart-total-info">
                                        <div className="title">Total</div>
                                        <div className="price">$ {Number.parseFloat(this.state.cartData[0].cart_totals)}</div>
                                    </div>
                                    <a href="/check-out"><button className="proceed">Proceed to checkout<i className="fa fa-long-arrow-right" aria-hidden="true" /></button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                
                    }
                    </>
                    
                }
                
            </div>
        )
    }
}
