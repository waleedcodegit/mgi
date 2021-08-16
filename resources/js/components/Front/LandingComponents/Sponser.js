import React, { Component } from 'react';
import Axios from 'axios';
import { baseurl, img_base } from '../../Configs/baseUrls';

class Sponser extends Component {
  constructor(props) {
    super(props);
    this.state={
        header_image:'',
    }
  }
  componentDidMount(){
      Axios.post('/api/get-change-banner-ads').then(res=>{
        console.log(res);
          this.setState({
              header_image:res.data.data.header_image
          })
      })
  }
    render() {
        return (
           <div>
  <div className="ad-banner">
    {/* <img src="images/common/live.jpg" /> */}
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <a ><img src={img_base+this.state.header_image} /></a>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="divide-line">
    </div>
  </div>
  </div>
        );
    }
}

export default Sponser;