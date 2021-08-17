import React, { Component } from 'react';
import Main from '../Admin/Main';
import { Link } from 'react-router-dom';
import Axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props);
    this.state={
        is_dashboard: true,
        is_newsnarticles:true,
        is_products: true,
        is_videos:true,
        is_support:true,
        is_games: true,
        is_websetting: true,
        is_banner: true,
        error_string:'',
        id:this.props.match.params.id,
        rights:[],
        is_subadmins: true,
        is_tournaments: true,
        is_TermAndCondition: true,
        is_header_footer_banner: true,
        is_subadmins: true,
        is_PrivacyAndPolicy:true,
        is_subscription: true
        // is_display: false
    }
}
//   componentDidMount(){
    
// }
    
    logout(){
        window.localStorage.setItem('sop256skikl','');
        this.props.history.push('/admin-login');
      }
    render() {
        return (
            <div>
              <div className="main-wrapper main-wrapper-1">
              <div className="navbar-bg" />
              <nav className="navbar navbar-expand-lg main-navbar sticky">
                <div className="form-inline mr-auto">
                  <ul className="navbar-nav mr-3">
                    <li><a href="#" data-toggle="sidebar" className="nav-link nav-link-lg
                              collapse-btn"> <i data-feather="align-justify" /></a></li>
                    <li><a href="#" className="nav-link nav-link-lg fullscreen-btn">
                        <i data-feather="maximize" />
                      </a></li>
                    <li>

                    </li>
                  </ul>
                </div>
                <ul className="navbar-nav navbar-right">
                  
                  <li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg"><i data-feather="bell" className="bell" />
                    </a>
                    <div className="dropdown-menu dropdown-list dropdown-menu-right pullDown">
                      <div className="dropdown-header">
                        Notifications
                        <div className="float-right">
                          <a href="#">Mark All As Read</a>
                        </div>
                      </div>
                      <div className="dropdown-list-content dropdown-list-icons">
                        <a href="#" className="dropdown-item dropdown-item-unread"> <span className="dropdown-item-icon bg-primary text-white"> <i className="fas
                                    fa-code" />
                          </span> <span className="dropdown-item-desc"> Template update is
                            available now! <span className="time">2 Min
                              Ago</span>
                          </span>
                        </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="far
                                    fa-user" />
                          </span> <span className="dropdown-item-desc"> <b>You</b> and <b>Dedik
                              Sugiharto</b> are now friends <span className="time">10 Hours
                              Ago</span>
                          </span>
                        </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-success text-white"> <i className="fas
                                    fa-check" />
                          </span> <span className="dropdown-item-desc"> <b>Kusnaedi</b> has
                            moved task <b>Fix bug header</b> to <b>Done</b> <span className="time">12
                              Hours
                              Ago</span>
                          </span>
                        </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-danger text-white"> <i className="fas fa-exclamation-triangle" />
                          </span> <span className="dropdown-item-desc"> Low disk space. Let's
                            clean it! <span className="time">17 Hours Ago</span>
                          </span>
                        </a> <a href="#" className="dropdown-item"> <span className="dropdown-item-icon bg-info text-white"> <i className="fas
                                    fa-bell" />
                          </span> <span className="dropdown-item-desc"> Welcome to Otika
                            template! <span className="time">Yesterday</span>
                          </span>
                        </a>
                      </div>
                      <div className="dropdown-footer text-center">
                        <a href="#">View All <i className="fas fa-chevron-right" /></a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                  <div className="sidebar-brand">
                    <a> <img alt="image" src={"/images/common/mgl-logo.png"} className="header-logo" /> <span className="logo-name">MGL</span>
                    </a>
                  </div>
                  <ul className="sidebar-menu">
                    <li className="menu-header">Main</li>
                    {this.state.is_dashboard?
                      <li className={this.props.history.location.pathname == "/adminpanel/Dashboard" ? "dropdown active": "dropdown"}>
                      <span><Link to="/adminpanel/Dashboard">Dashboard</Link></span>
                    </li> 
                    : ''}

                    {this.state.is_games?
                    <li className={this.props.history.location.pathname == "/adminpanel/new-game" || this.props.history.location.pathname == "/adminpanel/games-list" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="target" /><span>Games</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/new-game">Create</Link></li>
                        <li><Link to="/adminpanel/games-list">List</Link></li>
                      </ul>
                    </li>
                     : ''}
                     {this.state.is_tournaments ?
                    <li className={this.props.history.location.pathname == "/adminpanel/tournament-create" || this.props.history.location.pathname == "/adminpanel/tournament-list" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="watch" /><span>Manage Tournamets</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/tournament-create">Create</Link></li>
                        <li><Link to="/adminpanel/tournament-list">List</Link></li>
                      </ul>
                    </li>
                    : '' 
                    }
                   
                   {this.state.is_newsnarticles?
                    <li className={this.props.history.location.pathname == "/adminpanel/create-news-articles" || this.props.history.location.pathname == "/adminpanel/news-list" ? "dropdown active": "dropdown"}>
                      <a className="menu-toggle nav-link has-dropdown"><i data-feather="briefcase" /><span>News & Articles</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/create-news-articles">Create</Link></li>
                        <li><Link to="/adminpanel/news-list">List</Link></li>
                      </ul>
                    </li>
                     : ''}
                      {this.state.is_products?
                    <li className={this.props.history.location.pathname == "/adminpanel/add-product" || this.props.history.location.pathname == "/adminpanel/products-list" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="shopping-bag" /><span>Products</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/add-product">Create</Link></li>
                        <li><Link to="/adminpanel/products-list">List</Link></li>
                      </ul>
                    </li>
                     : ''}
                    {this.state.is_videos?
                    <li className={this.props.history.location.pathname == "/adminpanel/add-video" || this.props.history.location.pathname == "/adminpanel/videos-list" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="watch" /><span>Videos</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/add-video">Create</Link></li>
                        <li><Link to="/adminpanel/videos-list">List</Link></li>
                      </ul>
                    </li>
                     : ''}
                    {this.state.is_support?
                    <li className={this.props.history.location.pathname == "/adminpanel/tickets-open" || this.props.history.location.pathname == "/adminpanel/tickets-closed" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="mail" /><span>Support</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/tickets-open">Open Tickets</Link></li>
                        <li><Link to="/adminpanel/tickets-closed">Closed Tickets</Link></li>
                      </ul>
                    </li>
                     : ''}

                    {this.state.is_banner?
                      <li className={this.props.history.location.pathname == "/adminpanel/add-banner" || this.props.history.location.pathname == "/adminpanel/banners-list" ? "dropdown active": "dropdown"}>
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="shopping-bag" /><span>Banner</span></a>
                        <ul className="dropdown-menu">
                          <li><Link to="/adminpanel/add-banner">Create</Link></li>
                          <li><Link to="/adminpanel/banners-list">List</Link></li>
                        </ul>
                      </li>
                     : ''
                     }
                   
                    {this.state.is_websetting?
                    <li className={this.props.history.location.pathname == "/adminpanel/slider-images" || this.props.history.location.pathname == "/adminpanel/privacy-policy" || this.props.history.location.pathname == "/adminpanel/terms-and-conditions" || this.props.history.location.pathname == "/adminpanel/social-media-links" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="chrome" /><span>Web Settings</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/slider-images">Slider Images</Link></li>
                        <li><Link to="/adminpanel/privacy-policy">Privacy & Policy</Link></li>
                        <li><Link to="/adminpanel/terms-and-conditions">Terms & Conditions</Link></li>
                        <li><Link to="/adminpanel/social-media-links">Social Links</Link></li>
                      </ul>
                    </li>
                     : ''}
                    {this.state.is_subadmins ?
                    <li className={this.props.history.location.pathname == "/adminpanel/add-admin" || this.props.history.location.pathname == "/adminpanel/admins" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="watch" /><span>Manage Sub Admins</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/add-admin">Create</Link></li>
                        <li><Link to="/adminpanel/admins">List</Link></li>
                      </ul>
                    </li>
                    : '' 
                    }

                    {this.state.is_header_footer_banner ?
                    <li className={this.props.history.location.pathname == "/adminpanel/change-ads-banner" ? "dropdown active": "dropdown"}>
                      <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="watch" /><span>Manage Ads Banner</span></a>
                      <ul className="dropdown-menu">
                        <li><Link to="/adminpanel/change-ads-banner">Change</Link></li>
                      </ul>
                    </li>
                    : '' 
                    }

                    {this.state.is_TermAndCondition?
                      <li className={this.props.history.location.pathname == "/adminpanel/terms-and-Conditions" || this.props.history.location.pathname == "/adminpanel/terms-and-Conditions-list" ? "dropdown active": "dropdown"}>
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="shopping-bag" /><span>Terms & Conditions</span></a>
                        <ul className="dropdown-menu">
                          <li><Link to="/adminpanel/edit-term_and_condition/:id">Edit</Link></li>
                          <li><Link to="/adminpanel/term-and-condition-list">List</Link></li>
                        </ul>
                      </li>
                     : ''
                     }


                    {this.state.is_PrivacyAndPolicy?
                      <li className={this.props.history.location.pathname == "/adminpanel/privacy_and_policy" || this.props.history.location.pathname == "/adminpanel/privacy-and-policy-list" ? "dropdown active": "dropdown"}>
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="filter" /><span>Privacy & Policy</span></a>
                        <ul className="dropdown-menu">
                          <li><Link to="/adminpanel/edit-term_and_condition">Create</Link></li>
                        </ul>
                      </li>
                     : ''
                     }

                    {this.state.is_subscription?
                      <li className={this.props.history.location.pathname == "/adminpanel/add-subscription" || this.props.history.location.pathname == "/adminpanel/subscriptions-list" ? "dropdown active": "dropdown"}>
                        <a href="#" className="menu-toggle nav-link has-dropdown"><i data-feather="shopping-bag" /><span>Subscription</span></a>
                        <ul className="dropdown-menu">
                          <li><Link to="/adminpanel/add-subscription">Create</Link></li>
                          <li><Link to="/adminpanel/subscriptions-list">List</Link></li>
                        </ul>
                      </li>
                     : ''
                     }


                    
            
                    <li className="dropdown" onClick={this.logout.bind(this)} >
                      <a href="" className="nav-link"><i data-feather="log-out" /><span>Log Out</span></a>
                    </li>
                  </ul>
                </aside>
              </div>
              {/* Main Content */}
              <div className="main-content">
                  <Main {...this.props}></Main>
              </div>
              {/* <footer className="main-footer">
                <div className="footer-left">
                  <a href="#">MGL</a>
                </div>
                <div className="footer-right">
                </div>
              </footer> */}
            </div>           
             
             
            </div>
        );
    }
}

export default App;