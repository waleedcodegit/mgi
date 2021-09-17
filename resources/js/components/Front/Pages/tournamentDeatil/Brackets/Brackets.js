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
            console.log(res);
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
                        <img src={img_base+this.state.image} />
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Brackets;
