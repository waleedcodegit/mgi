import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { baseurl, img_base } from '../../Configs/baseUrls';

class Landing extends Component {
      constructor(props) {
        super(props);
        this.state={
            videos:[],
            footer_image: ''
        }
    }

    componentDidMount(){
        Axios.post('/api/get-videos').then(res=>{
            this.setState({
                is_display:true,
                videos:res.data
            })
        })

        Axios.post('/api/get-change-banner-ads').then(res=>{
            this.setState({
              footer_image:res.data.data.footer_image
            })
        })
    }
    render() {
        return (
            <div>
              <div className="esport-landing-latest-videos-section">
                {/*SPORT TEAM LANDING LATEST VIDEOS BEGIN*/} 
                <div className="esport-team-landing-latest-videos">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-5 col-sm-6">
                        <h5>Trending<br /> <span>Videos</span></h5>
                      </div>
                      <div className="col-md-7 col-sm-6">
                        <a href="/videos" className="btn-news">
                          View All
                        </a>
                      </div>
                    </div>
                    <div className="row">
                    {
                        this.state.videos[0] ?
                        <div className="col-md-6">
                          <div className="ifram-wrapper">
                            <iframe width={550} height={550} src={"https://www.youtube.com/embed/"+this.state.videos[0].video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                          </div>
                        </div>
                      :null
                    }
                      
                      <div className="col-md-6 video-wrapper">
                      {
                          this.state.videos[1] ?
                          <div className="row">
                            <div className="col-md-12">
                              <div className="ifram-wrapper">
                                <iframe width={550} height={265} src={"https://www.youtube.com/embed/"+this.state.videos[1].video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                              </div>
                            </div>
                          </div>
                        :null
                      }

                      {
                          this.state.videos[2] ?
                          <div className="row">
                            <div className="col-md-12">
                              <div className="ifram-wrapper">
                                <iframe width={550} height={265} src={"https://www.youtube.com/embed/"+this.state.videos[2].video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                              </div>
                            </div>
                          </div>
                        :null
                      }
                      </div>
                    </div>  
                    
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="divide-line" />
              </div>
              <div className="ad-banner">
                {/*<img src="images/common/live.jpg">*/}
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <a ><img src={img_base+this.state.footer_image} /></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="divide-line" />
              </div>
              
            </div>

          
        );
    }
}

export default Landing;