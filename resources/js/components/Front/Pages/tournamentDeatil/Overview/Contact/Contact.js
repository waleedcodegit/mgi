import React, { Component } from 'react'
import Axios from 'axios';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            contact_details:'',
            id:this.props.match.params.id,
            loading:false
            
        }
    }
    componentDidMount(){
        Axios.post('/api/get-tournament-by-id',{id:this.props.match.params.id}).then(res=>{
        //    console.log(res);
            this.setState({
                contact_details:res.data.tournament.	contact_details,
               
            })
        })
    }
    render() {
        return (
            <div>
               <div className="champ-tab-wrap tab-content">
                                <div className="tab-item part-wrap tab-pane active" id="details">
                                    <div className="part-list">
                                        <div className="col-md-12">
                                            <div className="prt-list-sec">
                                                <h2>Contact</h2>
                                                <div className="message-content" translate>< span dangerouslySetInnerHTML={{__html:this.state.contact_details}}/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                               
                               
                                
                                
                                </div>
</div>
        )
    }
}
export default Contact;