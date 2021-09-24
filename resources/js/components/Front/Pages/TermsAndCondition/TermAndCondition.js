import React, { Component } from 'react';
import Axios from 'axios';

class TermAndCondition extends Component {
    constructor(props) {
        super(props);
        this.state={
            term:'',
            is_display:false
           
        }
    }
    
    componentDidMount(){
        Axios.post('/api/term_and_condition_front_page').then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                term:res.data.term.terms_and_conditions,
                  
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
                        <h4>Term And Conditions</h4>
                        <div className="item">
                            <div className="post-text">
                            <p dangerouslySetInnerHTML={{__html:this.state.term}}></p>
                            
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

export default TermAndCondition;
