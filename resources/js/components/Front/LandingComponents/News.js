import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { baseurl, img_base } from '../../Configs/baseUrls';

class News extends Component {

  constructor(props) {
      super(props);
      this.state={
          posts:[],
      }
  }

  componentDidMount(){
      Axios.post('/api/get_feature_posts').then(res=>{
          this.setState({
              is_display:true,
              posts:res.data
          })
      })
  }
    render() {
        return (
            <div>
                <div id="news" className="esport-landing-big-section">
    {/*ESPORT TEAM LANDING NEWS BEGIN*/} 
    <div className="esport-team-landing-news">
      <div className="container">
        <div className="row">
          <div className="col-md-5 col-sm-6">
            <h5>Updated<br /> <span>News/Articles</span></h5>
          </div>
          <Link to="/articles"><div className="col-md-7 col-sm-6">
            <a className="btn-news">
              View All
            </a>
          </div></Link>
        </div>
        
        <div className="row row-eq-height">
          <div className="col-md-5">
          {
            this.state.posts[0] ?
            <a href="#" className="news-wprapper">
              <img src={img_base+this.state.posts[0].image} alt="news-img" style={{width: "800", height: "981"}}  />
              <div className="news-border">
                <div className="left-news">
                  <span>News</span>
                </div>
                <div className="news-text">
                  {/* <span className="date">25 august</span> */}
                  <span className="name">{this.state.posts[0].title}</span>
                </div>
              </div>
            </a>
          :null
        }
        </div>
          <div className="col-md-7">
          {
            this.state.posts[1] ?
            <div className="row no-gutters row-eq-height">
              <div className="col-md-12">
                <a href="#" className="news-wprapper">
                  <img src="images/common/esport-team-landing-news-1.jpg" alt="news-img" />
                  <div className="news-border">
                    <div className="left-news">
                      <span>News</span>
                    </div>
                    <div className="news-text">
                      {/* <span className="date">25 august</span> */}
                      <span className="name">{this.state.posts[1].title}</span>
                    </div>
                  </div>
                </a>
              </div>
              </div>
              :null
            }
            {
              this.state.posts[2] ?
            <div className="row no-gutters row-eq-height">
              <div className="col-md-12">
                <a href="#" className="news-wprapper">
                  <img src="images/common/esport-team-landing-news-2.jpg" alt="news-img" />
                  <div className="news-border">
                    <div className="left-news">
                      <span>News</span>
                    </div>
                    
                    <div className="news-text">
                      {/* <span className="date">25 august</span> */}
                      <span className="name">{this.state.posts[2].title}</span>
                    </div>
                  </div>
                </a>
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
  <div id="about" className="esport-team-landing-about">
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-6">
          <h5>2019<br /> <span>Upcoming Events</span></h5>
        </div>
        <div className="col-md-7 col-sm-6">
          <a href className="btn-news">
            View All
          </a>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="event-bg">
            <div className="left-league">
              2020<br />
              <span>Sep</span>
            </div>
            <div className="right-league">
              <span>Esl One New York 2019</span>
              <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch. </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="event-bg">
            <div className="left-league">
              2020<br />
              <span>Oct</span>
            </div>
            <div className="right-league">
              <span>Esl One New York 2019</span>
              <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 ">
          <div className="event-bg">
            <div className="left-league">
              2020<br />
              <span>Nov</span>
            </div>
            <div className="right-league">
              <span>Esl One New York 2019</span>
              <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch. </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <div className="event-bg">
            <div className="left-league">
              2020<br />
              <span>Dec</span>
            </div>
            <div className="right-league">
              <span>Esl One New York 2019</span>
              <p>Pabst irony tattooed, synth sriracha selvage pok pok. Wayfarers kinfolk sartorial, helvetica you probably haven't heard of them tumeric venmo deep v mixtape semiotics brunch. </p>
            </div>
          </div>
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

export default News;