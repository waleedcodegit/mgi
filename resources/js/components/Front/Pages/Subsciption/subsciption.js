import React, { Component } from 'react'

class subsciption extends Component {
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="subscption-head">
                    <div className="container-plan">
                    <div className="row">
                        <div className="customer-info">
                        <div className="row">
                            <h4>Select Subsciption</h4>
                            <div className="subscption-sec">
                            <div className="col-md-4">
                                <div className="grid-1-5 ">
                                <h2>Weekly</h2>
                                <h3><sup>$</sup>6.99<span className="small" /></h3>
                                <p>For 7 Days</p>
                                <ul>
                                    <li>First 14 days free</li>
                                    <li>Play unlimited games</li>
                                    <li>Cancel anytime</li>
                                </ul>
                                <a href className="button-plan">Select Plan</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="grid-1-5">
                                <h2>Monthly</h2>
                                <h3><sup>$</sup>9.99<span className="small" /></h3>
                                <p>For 30 Days</p>
                                <ul>
                                    <li>Cancel anytime</li>
                                    <li>Invite up to 3 family members</li>
                                    <li>Parental control</li>
                                </ul>		
                                <a href className="button-plan">Select Plan</a>	
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="grid-1-5">
                                <h2>3 months</h2>
                                <h3><sup>$</sup>17.99<span className="small" /></h3>
                                <p>For 3 Months</p>
                                <ul>
                                    <li>Cancel anytime</li>
                                    <li>Invite up to 3 family members</li>
                                    <li>Parental control</li>
                                </ul>	
                                <a href className="button-plan">Select Plan</a>		
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <a href="" class="button-skip">Skip</a>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default subsciption;
