import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
              <div className="esport-team-landing-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="footer-logo">
            <img src="/images/common/mgl-logo.png" />
            <p>To these in the morning I sent the captain, who was to enter into a parley  with them</p>
            <p>To these in the morning I sent the captain, who was to enter into a parley  with them</p>
          </div>
        </div>
        <div className="col-md-2 col-sm-3"></div>
        <div className="col-md-4 col-sm-6">
          <ul className="footer-list">
            <li><a href="/subsciption">Subscription</a></li>
            <li><a href="/term-and-condition">Terms &amp; Condition</a></li>
            <li>Social Media</li>
            <li><a href="/tournament">Tournament</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div> 
        <div className="col-md-3 col-sm-6">
          <span className="header">Keep in Touch</span>
          <div className="footer-input">
            <input type="text" name="text" className="bottom-input" placeholder="User Name" /> 
            <input type="text" name="text" className="bottom-input" placeholder="Email Address" /> 
            <a href className="btn-submit"> Submit</a>      
          </div>
        </div>
      </div>
    </div>
  </div>
                <div className="esport-team-landing-footer-links">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <p>
          Copyright © 2021 MGL All Right Reserved.
        </p>
      </div>
      <div className="col-md-5 ">
      </div>
      <div className="col-md-3 col-sm-6">
        <ul className="socials">
          <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
          <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
          <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
          <li><a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a></li>
          <li><a href="#"><i className="fa fa-reddit-alien" aria-hidden="true" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Footer;