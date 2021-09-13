import React, { Component } from 'react';
import Axios from 'axios';
import { baseurl, img_base } from '../../../../Configs/baseUrls';

class List extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: []
        }
    }
    async  componentDidMount(){
        const video_id = this.props.match.params.id;
        // Axios.post('/api/get_videos_list').then(res=>{
            const res = await axios.get(`/api/show_videos/${video_id}`);
            console.log(res.data);
            if(res.data.status === 200)
            {
            console.log(res.data);
            this.setState({
                videos:res.data
            });
        }
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
                            <h5>Most Popular<br /> <span>Videos</span></h5>
                            </div>
                            <div className="col-md-7 col-sm-6">
                            </div>
                        </div>
                        <div className="row">
                            
                            {
                                this.state.videos.map((data,index)=>{
                                        return(
                                            <>
                                            <a href={`/video-detail/${data.id}`} className="article-wprapper">
                                            <div className="col-md-4">
                                                <div className="lt-video">
                                                    <div className="ifram-video">
                                                        <iframe width={300} height={270} src={"https://www.youtube.com/embed/"+data.video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-8">
                                            <div className="video-text">
                                                <h3>Video</h3>
                                                                <span>{data.title}</span>
                                                                <p dangerouslySetInnerHTML={{__html:data.description}}></p>
                                                                {/* <div className="divide-line" />
                                                                <div className="play-video">
                                                                    
                                                                </div>                                                                 */}
                                                                </div>
                                            </div>
                                            </a>
                                            </>
                                        )
                                })
                            }
                            
                            

                        </div>  
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default List;
