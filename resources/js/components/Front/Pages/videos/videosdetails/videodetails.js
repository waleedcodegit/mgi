import React, { Component } from 'react';
import Axios from 'axios';
import { baseurl, img_base } from '../../../../Configs/baseUrls';

class VideoDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
           
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
       Axios.post('/api/get_videos_latest',{id:this.props.match.params.id}).then(res=>{
        console.log(res);
        this.setState({
            videos:res.data,
          
        })
    })
  
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
            <section className="image-header">
                <div className="container">
                </div>
            </section>
            <div className="content">
                <div className="container">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <section className="news-single col-xs-12 col-sm-12 col-md-9">
                        <p className="hidden-md hidden-lg">
                            <button type="button" className="btn sidebar-btn" data-toggle="offcanvas" title="Toggle sidebar">sidebar</button>
                        </p>
                        <div className="item">
                                        <div className="row no-gutters row-eq-height">
                                            <div className="col-md-12">
                                            <a href={`/artical-detail`} className="article-wprapper">
                                            <iframe width={800} height={450} src={"https://www.youtube.com/embed/"+this.state.video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                <div className="news-border">
                                                <div className="left-news">
                                                    <span>News</span>
                                                </div>
                                                <div className="right-news">
                                                    <i className="fa fa-commenting" aria-hidden="true" />
                                                    <span>200</span>
                                                </div>
                                                <div className="artcle-text">
                                                    <span className="date" value="title" onChange="">{this.state.title}</span>
                                                    <span className="name" dangerouslySetInnerHTML={{__html:this.state.description}} value="body"></span>
                                                </div>
                                                </div>
                                            </a>
                                            </div>
                                        </div>                           
                            </div>                       
                        </section>
                        <section className="sidebar col-xs-6 col-sm-6 col-md-3 sidebar-offcanvas" id="sidebar">
                            <div className="recent-news">
                                <h6>More Videos</h6>
                                {
                                this.state.videos.slice(0,3).map((data,index)=>{
                                   
                                        return(
                                             <div className="item">
                                            <div className="row no-gutters row-eq-height">
                                                <div className="col-md-12">
                                                <a href={`/video-detail/${data.id}`} className="article-wprapper">
                                                <div className="artcle-text">
                                                    <span className="name">{data.title.substring(0, 12)}....</span>                                                      
                                                    </div>
                                                    <iframe width={200} height={170} src={"https://www.youtube.com/embed/"+data.video_youtube_id} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                    <div className="news-border">
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            </div>      
                                        )
                                })
                            } 
                                {/* <div className="item">
                                <div className="date"><a href="news-single.html">25 Sep 2016</a> in <a href="news-single.html">highlights</a></div>
                                <a href="news-single.html" className="name">When somersaulting Sanchez shoulderd Mexico’s 
                                    <img src="/images/common/esport-team-landing-news-1.jpg" />
                                </a>
                                </div> */}
                            </div>
                        </section>	
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default VideoDetail;
