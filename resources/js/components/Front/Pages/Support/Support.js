import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

class Support extends Component {
    constructor(props) {
        super(props);
        this.state={
            tickets:[],            
        }

        if(!this.props.user.is_login) {
            window.open('/login', '_self');
        }
    }

    componentDidMount() {
        Axios.post('/api/get_user_ticket',{id:this.props.user.data.id}).then(res=>{
            this.setState({
                tickets: res.data.ticket
            })
        })
    }
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container">
                    <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Support</h4>
                        </div>
                        <div className="col-md-9" />
                        <div className="col-md-3">
                            <div className="join-team-btn">
                            <a href="/create-ticket">Create Ticket</a>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="broadcast-wrap">
                            <div className="broadcast-list">
                                {
                                    this.state.tickets.map((data,index)=>{
                                        
                                        return (
                                                   
                                            data.status != 'Close' ? 
                                            <a href={`/ticket-detail/${data.id}`}>                                                
                                                <div className="broadcast-item">
                                                    <div className="item-header" id="headingOne">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="item-head-body">
                                                                    <span className="info">
                                                                    <span className="what">Ticket Title</span>
                                                                    <span className="then">{data.subject}</span>
                                                                    </span>
                                                                    <span className="done">{data.status}</span>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>	
                                                    </div>
                                                </div>
                                                </a>
                                                :                                                  
                                                     <div className="broadcast-item">
                                                    <div className="item-header" id="headingOne">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="item-head-body">
                                                                    <span className="info">
                                                                    <span className="what">Ticket Title</span>
                                                                    <span className="then">{data.title}</span>
                                                                    </span>
                                                                    <span className="process">Ticket is {data.status}</span>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>	
                                                    </div></div>
                                                                    
                                                     
                                                
                                                
                                               
                                                
                                        
                                    
                                            
                                        )
                                    })
                                }

                                {
                                    this.state.tickets.length == 0 ?
                                    <p style={{textAlign: "center"}}>No Record Found</p>
                                    : null
                                }
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (Support);
