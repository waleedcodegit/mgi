import React, { Component } from 'react';
import Axios from 'axios';
import { baseurl, img_base } from '../../../../Configs/baseUrls';

class VideoDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            
            title: '',
            video_youtube_id: '',
            description: '',
            id:this.props.match.params.id,
            loading:false
        }
    }
    async componentDidMount(){
        const video_id = this.props.match.params.id;
        // console.log(term_and_condition_id);
      const res = await axios.get(`/api/show_videos/${video_id}`);
    //    console.log(res.data.video.title);
       if(res.data.status === 200)
    
       {
     this.setState({
      video_youtube_id:res.data.video.video_youtube_id,
        description:res.data.video.description,
      });
       }
     }
    title(value){
        
        this.setState({
            title:value
        })
    }
    video_youtube_id(value){
        
        this.setState({
            video_youtube_id:value
        })
    }
    description(value){
        
        this.setState({
            description:value
        })
    }
    render() {
        return (
            <div>
                <div className="ad-banner">
  <div className="container">
    <div className="row">
    </div>
  </div>
</div>

                <div className="esport-landing-latest-videos-section">
                    {/*SPORT TEAM LANDING LATEST VIDEOS BEGIN*/} 
                    <div className="esport-team-landing-latest-videos">
                        <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-6">
                            <h5><span>Video Details</span></h5>
                            </div>
                            <div className="col-md-7 col-sm-6">
                            </div>
                        </div>
                        <div className="row">
                            
                           
                                       
                                            <>
                                            <a href={`/video-detail`} className="article-wprapper">
                                            <div className="col-md-4">
                                                <div className="lt-video">
                                                    <div className="ifram-video">
                                                        <iframe width={300} height={270} src={"https://www.youtube.com/embed/"+this.state.video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                            <div className="video-text">
                                                <h3>Video</h3>
                                                                <span>{this.state.title}</span>
                                                                <p dangerouslySetInnerHTML={{__html:this.state.description}}></p>
                                                                                                                             
                                                                </div>
                                            </div>
                                            </a>
                                            </>
                                        
                             
                            
                            

                        </div>  
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default VideoDetail;
