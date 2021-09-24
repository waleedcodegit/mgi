import React, { Component } from 'react';
import Axios from 'axios';

class PrivacyPolicy extends Component {
    
    constructor(props) {
        super(props);
        this.state={
            privacyAndPolicy:'',
            is_display:false
           
        }
    }
    
    componentDidMount(){
        Axios.post('/api/privacy_policy_front_page').then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                privacyAndPolicy:res.data.privacy.privacies__and_policies,
                  
            })
        })
    }
    render() {
        return (
            <div>
                <section className="image-header">
                    <div className="container">
                    </div>
                </section>
                <div className="content">
                    <div className="container">
                    <div className="row row-offcanvas row-offcanvas-left cart-wrap">
                        <section className="news-single col-xs-12 col-sm-12 col-md-12">
                        <h4>PRIVACY POLICY</h4>
                        <div className="item">
                            <div className="post-text">
                            <p dangerouslySetInnerHTML={{__html:this.state.privacyAndPolicy}}></p>
                            </div>
                        </div>
                        </section>
                    </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PrivacyPolicy;
