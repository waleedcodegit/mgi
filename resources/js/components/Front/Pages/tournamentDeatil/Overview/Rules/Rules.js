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
                <div className="col-md-12 col-sm-12 matches-over">
                <div className="col-md-12 col-sm-12 matches-over">
                    
                    <div className="animated bfy-feed-item item-type-tournament-start bfy-feed-item item-type-tournament-start">
                        <div className="item-body">
                        <div className="main-container">
                            <div className="item-container">
                            <div className="bfy-feed-message initial"> 
                                <div className="message-content" translate><span dangerouslySetInnerHTML={{__html:this.state.rules}}/></div>
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
export default Rules;