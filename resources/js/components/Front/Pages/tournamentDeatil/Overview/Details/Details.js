import React, { Component } from 'react'
import Axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state={
            status:'',
            id:this.props.match.params.id,
            loading:false
            
        }
    }
    componentDidMount(){
        Axios.post('/api/get-tournament-by-id',{id:this.props.match.params.id}).then(res=>{
        
            this.setState({
                status:res.data.tournament.status,
               
            })
        })
    }
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 matches-over">
                <div className="col-md-12 col-sm-12 matches-over">
                    
                    <div className="animated bfy-feed-item item-type-tournament-start bfy-feed-item item-type-tournament-start">
                        <div className="item-body">
                        <div className="main-container">
                            <div className="item-container">
                            <div className="bfy-feed-message initial"> 
                            <div className="message-content" translate><span dangerouslySetInnerHTML={{__html:this.state.status}}/></div>
                            </div>
                            </div>          
                        </div>
                        </div>
                    </div>
                                             
         </div>
    </div>
 </div>
        )
    }
}
export default Details;