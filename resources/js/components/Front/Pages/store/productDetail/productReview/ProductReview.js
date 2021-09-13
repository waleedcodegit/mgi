import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import { img_base } from '../../../../../Configs/baseUrls';

class ProductReview extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            reviews: '',
            user_id: '',
            product_id: ''
        }
    }
    componentDidMount() {
        Axios.post('/api/get_product_reviews',{id:this.props.match.params.id}).then(res=>{
            console.log(res);
            this.setState({
                comments: res.data.data
            });
        });
    }

    getComment(e) {
        this.setState({
            reviews: e.target.value
        })
    }

    submitComment(e) {
        e.preventDefault();
        let senddata = {
            product_id: this.props.match.params.id,
            user_id: this.props.user.data.id,
            comment: this.state.reviews
        }
        Axios.post('/api/add_product_review',senddata).then(res=>{
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
                window.location.reload(); 
            
                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
    }

    render() {
        return (
                    <div className="product-tab-wrap">
                        <div className="tab-top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul>
                                            <li className="active">
                                                <a href="#reviews">Reviews</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="comments-wrap">
                                            <h6>Reviews</h6>
                                            {
                                                this.state.comments.map((data, index) => {
                                                    return(
                                                        <div className="comment-item" key={index}>
                                                            <div className="avatar">
                                                                {
                                                                    data.user.image ? 
                                                                        <img src={img_base+data.user.image} alt="author-avatar" />
                                                                    : 
                                                                        <img src="/images/common/author-avatar.jpg" alt="author-avatar" />
                                                                }
                                                            </div>
                                                            <div className="info">
                                                                <div className="date">
                                                                    <a href="#">{data.created_at}</a> by <a href="#">{data.user.first_name} {data.user.last_name}</a>
                                                                    <a href="#" className="quote">#</a>
                                                                </div>
                                                                {/* <div className="rating four" /> */}
                                                                <p>{data.comment}</p>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                        </div>	
                                    </div>
                                    {
                                        this.props.user.is_login ?
                                            <div className="col-md-5">
                                                <div className="leave-comment-wrap">
                                                    <h6>Add a review </h6>	
                                                    <form>								
                                                        <div className="row"> 
                                                            <div className="col-md-12">
                                                                <div className="item">
                                                                    <label>
                                                                    <span>Your comment</span>
                                                                    <textarea defaultValue={""} onChange={this.getComment.bind(this)} />
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <button className="comment-submit" onClick={this.submitComment.bind(this)}>post a review</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                            : null
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}

export default connect(mapStateToProps) (ProductReview);
