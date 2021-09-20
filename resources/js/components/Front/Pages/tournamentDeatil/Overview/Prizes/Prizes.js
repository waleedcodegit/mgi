import React, { Component } from 'react'
import Axios from 'axios';


class Prizes extends Component {
    constructor(props) {
        super(props);
        this.state={
            prizez:'',
            id:this.props.match.params.id,
            loading:false
            
        }
    }
    componentDidMount(){
        Axios.post('/api/get-tournament-by-id',{id:this.props.match.params.id}).then(res=>{
           console.log(res);
            this.setState({
                prizez:res.data.tournament.prizez,
               
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
                                                <h2>Prices</h2>
                                                <div className="message-content" translate><span dangerouslySetInnerHTML={{__html:this.state.prizez}}/></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                               
                               
                                
                                
                                </div>
 </div>
        )
    }
}
export default Prizes;