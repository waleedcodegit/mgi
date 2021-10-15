import React, { Component } from 'react';
import Axios from 'axios';
import {img_base} from '../../../../Configs/baseUrls';
class Brackets extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:'',
            binary_img:'',
            id:this.props.match.params.id,
            loading:false
            
        }
    }
    
    componentDidMount(){
        
        Axios.post('/api/get_brackets_by_id',{id:this.props.match.params.id}).then(res=>{
            // console.log(res);
            this.setState({
                is_display:true,
                image:res.data.bracket.image
            })
        })
    }

    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 matches-over">
                    <div className="elimnation">
                        {
                            this.state.image !=''?
                           <img src={img_base+this.state.image} />
                           : <h3>No Brackets Available Yet</h3>
                           
                        }
                         {/* { this.state.binary_img !=''?
                        
                              <img className="img_thumb" src={this.state.binary_img}></img>
                             : "Select Image"
                            //  <h3>No Announcement Available</h3>
                             
                            } */}
                       
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Brackets;
