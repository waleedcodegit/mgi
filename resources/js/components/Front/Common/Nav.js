import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Axios from 'axios';
import { img_base } from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state={
      display_drop_down: false,
      display_cart_dot: false,
      display_notification_dot: false,
      team_request_notification: []
    }
  }

  componentDidMount() {
    let senderdata = {
        cart_cookie_id : window.localStorage.getItem('cart_cookie_id')
    }
    Axios.post('/api/get_cookie_session_cart',senderdata).then(res=>{
        if(res.data.cart) {
            if(res.data.cart.length > 0){
                this.setState({
                  display_cart_dot:true,
                })
            }
        }
    })
}

  notification() {
    Axios.post('/api/team_add_request',{id:this.props.user.data.id}).then(res=>{
      if(res.data.status == 200){
          this.setState({
            team_request_notification: res.data.data,
            display_drop_down: !this.state.display_drop_down,
            display_notification_dot: true
          })
      } else {
        this.setState({
          team_request_notification: [],
          display_drop_down: !this.state.display_drop_down
        })
      }
    })
  }

  approveTeam(user_id,team_id,check) {     
      let senddata = {
        user_id: user_id,
        team_id: team_id,
        check: check
      }

      Axios.post('/api/approve_team_request',senddata).then(res=>{
        if(res.data.status == 200){
          Swal.fire({
              icon: 'success',
              title: res.data.msg,
              showConfirmButton: false,
              timer: 1500
              })      
          }else{
              Swal.fire({
                  icon: 'warning',
                  title: res.data.msg,
                  showConfirmButton: false,
                  timer: 1500
              })
          }
          this.notification();
      })
  }

  logout(){
    window.localStorage.setItem('mgltokenlogin','');
    window.open('/', '_self');
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
                    <div class="right-bar">
                    <nav className="navbar">
                      <div className="collapse navbar-collapse" id="team-menu">
                        <ul className="main-menu nav">
                          <li className="active">
                            <a href="/"><span>Home</span></a>
                          </li>
                          <li>
                            <a href="/tournament"><span>Tournaments</span></a>
                          </li>
                          <li><a href="/articles"><span>Articles</span></a></li>
                          <li><a href="/store"><span>Store</span></a></li>
                          
                          <li><a href="/support"><span>Support</span></a></li>
                          <li className={this.state.display_cart_dot == true ? "cart full" : "cart"}>
                            <a href="/cart">
                              <span><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
                            </a>
                          </li>
                        </ul>
                        <div className="lg-sec">
                        {this.props.user.is_login ?
                        <div>
                          <div className="icon" id="bell" onClick={this.notification.bind(this)}> <img src="/images/common/nt-bell.png" alt /> </div>
                          <div className="notifications" id="box" style = {this.state.display_drop_down ? {height: "auto", opacity: "1"} : {height: "0", opacity: "0"}}>
                            <h2>Notifications</h2>
                            {
                                this.state.team_request_notification.map((data,index)=>{
                                    return(
                                      <div className="notifications-item" key={index}> 
                                        {
                                          data.user.image ? 
                                            <img src={img_base+data.user.image} alt="img" />
                                          : 
                                            <img src="/images/common/uIgDDDd.jpg" alt="img" />
                                        }
                                        <div className="text">
                                          <h4>{data.user.first_name}</h4>
                                          <button className="btn-prf3" onClick={this.approveTeam.bind(this,data.user_id,data.team_id,"Approve")}>Approve</button> <button onClick={this.approveTeam.bind(this,data.user_id,data.team_id,"Disapprove")} className="btn-prf2">Dis Approve</button>
                                        </div>
                                      </div>
                                    )
                                })
                            }
                            {
                                this.state.team_request_notification.length == 0 ? 
                                <div>No records founded</div>:null
                            }
                          </div>
                        

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
                                        <img src={img_base+this.props.user.data.image} />
                                      </div>
                                      <div className="pr-text">
                                        <h3>{this.props.user.data.first_name}</h3>
                                      </div>
                                    </div>
                                    <a className="dropdown-item" href="/profile"> <i className="fa fa-user" aria-hidden="true" />Profile</a>
                                    <a className="dropdown-item" href="/chat"> <i className="fa fa-commenting" aria-hidden="true" />Chat Massenger</a>
                                    <a className="dropdown-item" href="#"><i className="fa fa-credit-card-alt" aria-hidden="true" />Wallet</a>
                                    <a className="dropdown-item" href="/settings"><i className="fa fa-cog" aria-hidden="true" />Setting</a>
                                    <a className="dropdown-item log-end" onClick={this.logout.bind(this)}><i className="fa fa-sign-out" aria-hidden="true" />Log Out</a>
                                  </div>
                                </li>   
                              </ul>
                            </div>
                          </nav>
                          </div>

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