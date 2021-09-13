import React, { Component } from 'react';
import Axios from "axios";
import { img_base } from '../../../../../Configs/baseUrls';
import Carousel from 'react-material-ui-carousel';
import Swal from 'sweetalert2';
import { v1 as uuidv1 } from 'uuid';


export default class ProductInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_name: '',
            short_description: '',
            product_varients: [],
            varient_type: '',
            product_images: [],
            cheep_varient_price: '',
            quantity_type: '',
            cheep_varient:'',
            qty: 1,
            error_string: '',
            product_id:0,
            price: 0,
            varient_id: 0

        }
    }
    componentDidMount(){
        Axios.post('/api/get_product_by_id',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                cheep_varient: res.data.cheep_varient,
                price: res.data.cheep_varient.price,
                product_id: res.data.id,
                product_name: res.data.name,
                short_description: res.data.short_description,
                varient_type: res.data.varient_type,
                product_varients: res.data.varients,
                product_images: res.data.images,
                quantity_type: res.data.quantity_type
            });
        })
      }
      chnage_varient_price(data){
          this.setState({
              cheep_varient:data
          })
      }
      quantity(e){
        this.setState({
            qty: e.target.value
        });
    }

    addProductInCart(){

        if(this.state.qty > 0){
          this.setState({
            error_string:''
          })
          let cart_cookie_id = window.localStorage.getItem('cart_cookie_id');
          console.log(cart_cookie_id);
          if(cart_cookie_id == null){
              window.localStorage.setItem('cart_cookie_id',uuidv1())
          }
          cart_cookie_id = window.localStorage.getItem('cart_cookie_id');
          let senderdata={
              product_id:this.state.product_id,
              qty:this.state.qty,
              price:this.state.cheep_varient.price,
              varient_id:this.state.cheep_varient.id,
              cart_cookie_id:cart_cookie_id,
          }
          Axios.post('/api/add_product_in_cart',senderdata).then(res=>{  
            //   console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Product Added to cart Successfully.',
                showConfirmButton: false,
                timer: 1500
              })
              this.props.history.push('/cart');
            })
        }else{
          this.setState({
            error_string:'Error - Quantity atleast should be one or more than one.'
          })
        }
      }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12"><h4>{this.state.product_name}</h4></div>
                        <div className="col-md-7">
                            <div className="product-slider">
                                <div className="connected-carousels">
                                
                                <div className="stage">
                                    <div className="carousel carousel-stage">
                                        <Carousel
                                            indicators={false} interval={4000} animation={"slide"} stopAutoPlayOnHover={false}
                                            >
                                                {
                                                    this.state.product_images.map((data,index)=>{
                                                        return(
                                                            <div key={index}>
                                                                <img src={img_base+data.image} alt="product-thumb"/>
                                                            </div>
                                                        )
                                                    })
                                                }
                                        </Carousel>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="product-right-info">
                                <div className="price">$ {this.state.cheep_varient != '' ? this.state.cheep_varient.price: ''}</div>
                                <p>{this.state.short_description}</p>
                                <div className="title">Quantity Type</div>
                                <div className="color-filter-item">
                                    <span style={{color: "#fff"}}>{this.state.quantity_type}</span>
                                </div>

                                
                                { 
                                    this.state.varient_type == "size" ?
                                    <>
                                        <div className="title">Sizes</div>
                                        <div className="size-filter-item">
                                        <ul>
                                            {
                                                this.state.product_varients.map((data,index)=>{
                                                    return (
                                                        <li key={index}>
                                                            <label className="size-check">
                                                                <input onChange={this.chnage_varient_price.bind(this,data)} type="checkbox" checked={this.state.cheep_varient.id == data.id} />
                                                                <span className="size">{data.name}</span>
                                                            </label>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>	
                                        </div>
                                    </>
                                    : null
                                
                                }
                                
                                <div className="title">Quantity</div>
                                <div className="quantity-wrap">
                                <input type="number" value={this.state.qty} onChange={this.quantity.bind(this)} />
                                <a onClick={this.addProductInCart.bind(this)} className="btn-product">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
