import React, { Component } from 'react';
import Axios from 'axios';
import {img_base} from '../../../Configs/baseUrls';

class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        Axios.post('/api/get_all_enabled_products').then(res=>{
            console.log(res.data);
            this.setState({
                products:res.data
            })
        })
      }
    render() {
        return (
            <div>
            <section className="image-header">
                
            </section>
            <div className="store-wrap">
                <div className="container">
                    <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-xs-12 col-sm-12 col-md-12 t-shirts">
                        <p className="hidden-md hidden-lg">
                        <button type="button" className="btn sidebar-btn" data-toggle="offcanvas" title="Toggle sidebar">sidebar</button>
                        </p>
                        <h6>Store</h6>
                        <div className="row">
                        {
                            this.state.products.map((data,index)=>{
                                return(
                                    <div className="col-md-4 col-sm-6" key={index}>
                                        <div className="store-list-item">
                                            <div>
                                                <a href={`/product-detail/${data.id}`}>
                                                    <img src={data.images.length > 0 ? img_base+data.images[0].image :''} alt="product" />
                                                </a>
                                                <div className="info">
                                                    <span className="name">{data.name}</span>
                                                    <span className="price">$ {data.cheep_varient.price}</span>	
                                                    <div className="btn-wrap">
                                                        <button className="btn small"><a href="cart.html">add to cart</a></button>
                                                        <button className="btn small"><a href={`/product-detail/${data.id}`}>Details</a></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                        }
                            
                            <div className="col-md-12">
                                <div className="pagination-wrap">
                                <ul className="pagination">
                                    <li><a href="#"><i className="fa fa-chevron-left" aria-hidden="true" /></a></li>
                                    <li><a href="#">1</a></li>
                                    <li className="active"><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#"><i className="fa fa-chevron-right" aria-hidden="true" /></a></li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        </div>
        )
    }
}

export default Products;
