import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state={
        
    }
  }

  // componentDidMount(){
  //   console.log(this.props.user.data.first_name);
  // }

  logout(){
    console.log('here');
    window.localStorage.setItem('mgltokenlogin','');
    window.open('/', '_self');
    // window.location.reload();
    // this.props.history.push('/');
  }
    render() {
        return (
            <div>
                <div className="main-menu-wrap sticky-menu">
                  <div className="container-long">
                    <a href="/" className="custom-logo-link"><img src="/images/common/mgl-logo.png" alt="logo" className="custom-logo" /></a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#team-menu" aria-expanded="false">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <nav className="navbar">
                      <div className="collapse navbar-collapse" id="team-menu">
                        <ul className="main-menu nav">
                          <li className="active">
                            <a href="/"><span>Home</span></a>
                          </li>
                          <li>
                            <a href="/tournament"><span>Tournaments</span></a>
                          </li>
                          <li><a href="/store"><span>Store</span></a></li>
                          <li><a href="/"><span>Support</span></a></li>
                          <li className="cart full">
                            <a>
                              <span><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                            </a>
                          </li>
                        </ul>
                        <div className="lg-sec">
                        {this.props.user.is_login ?
                          <nav className="navbar navbar-dark bg-dark navbar-expand-sm pr-dropdown">
                            <div className="collapse navbar-collapse" id="navbar-list-4">
                              <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="/images/common/esport-team-landing-logo.png" width={40} height={40} className="rounded-circle" />
                                    <span />
                                  </a>
                                  <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <div className="profile-dr-sec">
                                      <div className="pr-image">
                                        <img src="/images/common/quote-author.jpg" />
                                      </div>
                                      <div className="pr-text">
                                        <h3>{this.props.user.data.first_name}</h3>
                                      </div>
                                    </div>
                                    <a className="dropdown-item" href="/profile"> <i className="fa fa-user" aria-hidden="true" />Profile</a>
                                    <a className="dropdown-item" href="chat.html"> <i className="fa fa-commenting" aria-hidden="true" />Chat Massenger</a>
                                    <a className="dropdown-item" href="#"><i className="fa fa-credit-card-alt" aria-hidden="true" />Wallet</a>
                                    <a className="dropdown-item" href="/settings"><i className="fa fa-cog" aria-hidden="true" />Setting</a>
                                    <a className="dropdown-item log-end" onClick={this.logout.bind(this)}><i className="fa fa-sign-out" aria-hidden="true" />Log Out</a>
                                  </div>
                                </li>   
                              </ul>
                            </div>
                          </nav>

                          : 
                          <>
                            <span><Link to="/login">Login</Link></span>
                            <span><Link to="/signup">Sign up</Link></span>
                          </>
                        }
                        </div>
                        <div className="top-language">
                          <ul className="list">
                            <li className="dropdown">
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown">language<img src="/images/common/en-flag.png" alt="selected language" /></a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="#"><img src="/images/common/fr-flag.png" alt="language" />FR</a>
                                </li>
                                <li>
                                  <a href="#"><img src="/images/common/en-flag.png" alt="language" />EN</a>
                                </li>
                                <li>
                                  <a href="#"><img src="/images/common/ru-flag.png" alt="language" />RU</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="top-search">
                          <form>
                            <input type="text" name="text" />
                            <button><i className="fa fa-search" aria-hidden="true" /></button>
                          </form>
                        </div>
                      </div> 
                    </nav>
                  </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
  return{
      user:state.user
  }
}

export default connect(mapStateToProps,null) (Nav);