import React, { Component } from 'react'
import Axios from 'axios';

class Rules extends Component {
    constructor(props) {
        super(props);
        this.state={
            rules:'',
            id:this.props.match.params.id,
            loading:false
            
        }
    }
    componentDidMount(){
        Axios.post('/api/get-tournament-by-id',{id:this.props.match.params.id}).then(res=>{
        //    console.log(res);
            this.setState({
                rules:res.data.tournament.rules,
               
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
                                                <h2>Rules</h2>
                                                <div className="message-content" translate><span dangerouslySetInnerHTML={{__html:this.state.rules}}/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                               
                               
                                
                                
                                </div>
 </div>
        )
    }
}
export default Rules;