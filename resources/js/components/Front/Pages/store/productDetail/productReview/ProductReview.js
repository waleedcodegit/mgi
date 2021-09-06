import React, { Component } from 'react'

export default class ProductReview extends Component {
    render() {
        return (
            <div className="product-tab-wrap">
                <div className="tab-top">
                    <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <ul>
                            <li><a href="#description">Description</a></li>
                            <li><a href="#aditionalInformation">Aditional Information</a></li>
                            <li className="active"><a href="#reviews">Reviews (2)</a></li>
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
                            <div className="comment-item">
                            <div className="avatar"><img src="/images/common/author-avatar.jpg" alt="author-avatar" /></div>
                            <div className="info">
                                <div className="date">
                                <a href="#">25 Sep 2016</a> by <a href="#">Ian Finch</a>
                                <a href="#" className="quote">#</a>
                                </div>
                                <div className="rating four" />
                                <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>
                            </div>
                            </div>
                            <div className="comment-item">
                            <div className="avatar"><img src="/images/common/author-avatar.jpg" alt="author-avatar" /></div>
                            <div className="info">
                                <div className="date">
                                <a href="#">25 Sep 2016</a> by <a href="#">Ian Finch</a>
                                <a href="#" className="quote">#</a>
                                </div>
                                <div className="rating two" />
                                <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>
                            </div>
                            </div>
                            <div className="comment-item">
                            <div className="avatar"><img src="/images/common/author-avatar.jpg" alt="author-avatar" /></div>
                            <div className="info">
                                <div className="date">
                                <a href="#">25 Sep 2016</a> by <a href="#">Ian Finch</a>
                                <a href="#" className="quote">#</a>
                                </div>
                                <div className="rating five" />
                                <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch.</p>
                            </div>
                            </div>
                        </div>	
                        </div>
                        <div className="col-md-5">
                        <div className="leave-comment-wrap">
                            <h6>Add a review </h6>	
                            <form>								
                            <div className="row">
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Name <i>*</i></span>
                                    <input type="text" name="text" />
                                    </label>
                                </div>	
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Email <i>*</i></span>
                                    <input type="email" name="email" />
                                    </label>
                                </div>	
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Your comment</span>
                                    <textarea defaultValue={""} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <button className="comment-submit">post a review</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}
