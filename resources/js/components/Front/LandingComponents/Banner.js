import React, { Component } from 'react';
import Carousel from 'react-material-ui-carousel';
import { baseurl, img_base } from '../../Configs/baseUrls';
import Axios from 'axios';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state={
            sliderImages:[],
            is_display:false
        }
    }
    
    componentDidMount(){
        Axios.get('/api/get_all_banners').then(res=>{
            this.setState({
                is_display:true,
                sliderImages:res.data.sliderImages
            })
        })
    }
    render() {
        return (
            <div>
              <Carousel
              indicators={false} interval={4000} animation={"slide"} stopAutoPlayOnHover={false}
              >
              {
                    this.state.sliderImages.map((data,index)=>{
                        return(
                            <div>
                                <img src={img_base+data.image} />
                            </div>
                        )
                    })
                }
                
                {/* <div>
                    <img src="images/common/esport-team-landing-main-slider-slide-2.jpg" />
                </div>
                <div>
                    <img src="images/common/esport-team-landing-main-slider-slide-3.jpg" />
                </div> */}
            </Carousel>
               
            </div>
        );
    }
}

export default Banner;