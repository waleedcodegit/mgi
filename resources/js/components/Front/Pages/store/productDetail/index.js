import React, { Component } from 'react';
import ProductInfo from './productInfo/ProductInfo';
import ProductReview from './productReview/ProductReview';

export default class index extends Component {
    render() {
        return (
            <div>
                <section class="image-header">
    
                </section>
                <section class="product-single">
                    <ProductInfo {...this.props}></ProductInfo>
                    <ProductReview {...this.props}></ProductReview>
                </section>
            </div>
        )
    }
}
