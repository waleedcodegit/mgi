import React, { Component } from 'react';
import Axios from 'axios';

class subsciption extends Component {
    constructor(props) {
        super(props);
        this.state={
            subscription:[],
            is_display:false
        }
    }
    
    componentDidMount(){
        Axios.get('/api/subscription_list').then(res=>{
            // console.log(res.data);
            this.setState({
                is_display:true,
                subscription:res.data.subscription
            })
        })
    }
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
                            <h4>Select Subscription</h4>


                        


                            <div className="subscption-sec">
                            {
                                this.state.subscription.map((data,index)=>{
                                        return(
                                            <>
                            <div className="col-md-4">
                                <div className="grid-1-5 ">
                                <h2>{data.duration}</h2>
                                <h3><sup>$</sup>{data.price}<span className="small" /></h3>
                                <p>{data.days}</p>
                                <ul>
                                    <li>{data.description}</li>
                                   
                                </ul>
                                <a href className="button-plan">Select Plan</a>
                                </div>
                            </div>
                            </>
                                        )
                                })
                            }
                          </div>

                        


                        </div>
                        </div>
                        <a href="/" class="button-skip">Skip</a>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default subsciption;
