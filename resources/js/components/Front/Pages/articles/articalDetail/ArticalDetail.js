import React, { Component } from 'react'
import Axios from 'axios';
import { baseurl, img_base } from '../../../../Configs/baseUrls';

class ArticalDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            articals: [],
            data: [],
            title: '',
            image: '',
            body: '',
            id:this.props.match.params.id,
            loading:false
        }
    }
    
    
    async componentDidMount(){
        const articals_id = this.props.match.params.id;
        // console.log(term_and_condition_id);
      const res = await axios.get(`/api/show_articals/${articals_id}`);
    //   console.log(res.data.posts.title);
      if(res.data.status === 200)
      {
          this.setState({
            title:res.data.posts.title,
            image:res.data.posts.image,
            body:res.data.posts.body,
          });
      }
      Axios.post('/api/get_articals_latest').then(res=>{
        console.log(res);
        this.setState({
            articals:res.data
        })
    })
    }

      title(value){
        
        this.setState({
            title:value
        })
    }
    body(value){
        
        this.setState({
            body:value
        })
    }
    image(value){
        
        this.setState({
            image:value
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
                                                <div className="article-wprapper">
                                                    <img src={img_base+this.state.image} className="img-up-detail-thumb" value="image"alt="news-img" />
                                                    <div className="news-border">
                                                    {/* <div className="left-news">
                                                        <span>News</span>
                                                    </div>
                                                    <div className="right-news">
                                                        <i className="fa fa-commenting" aria-hidden="true" />
                                                        <span>200</span>
                                                    </div> */}
                                                    <div className="artcle-text" style={{marginTop: "20px"}}>
                                                        <span  className="date" style={{color:"#fff"}} value="title" onChange=""><b>{this.state.title}</b></span>
                                                        <span  className="name" style={{color:"#fff" }} dangerouslySetInnerHTML={{__html:this.state.body}} value="body"></span>
                                                
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>                           
                                </div>
                            
                            </section>
                            <section className="sidebar col-xs-6 col-sm-6 col-md-3 sidebar-offcanvas" id="sidebar">
                                <div className="recent-news">
                                    <h6>More Articles</h6>
                                    {
                            this.state.articals.map((data,index)=>{
                                    return(
                                        <div className="item">
                                        <div className="row no-gutters row-eq-height">
                                            <div className="col-md-12">
                                            <a href={`/artical-detail/${data.id}`} className="article-wprapper">
                                            <div className="artcle-text">
                                                    <span className="name">{data.title}</span>
                                                   
                                                </div>
                                                <img src={img_base+data.image} alt="news-img"  className="img-side-thumb"/>
                                                <div className="news-border">
                                                <div className="left-news">
                                                    <span>{data.type}</span>
                                                </div>
                                    
                                                
                                                </div>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    )
                                })
                            }
                                </div>
                            </section>	
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticalDetail;
