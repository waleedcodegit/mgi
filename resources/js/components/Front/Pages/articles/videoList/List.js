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
    componentDidMount(){
        Axios.post('/api/get_videos_list').then(res=>{
            console.log(res.data);
            this.setState({
                videos:res.data
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
                            <div className="col-md-12 col-sm-12">
                            <div className="divide-line" />
                            </div>
                            <div className="col-md-2 col-sm-6">
                            </div>
                            <div className="col-md-4 col-sm-6">
                            </div>
                        </div>
                        <div className="row">
                            
                            {
                                this.state.videos.map((data,index)=>{
                                        return(
                                            <>
                                          
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
