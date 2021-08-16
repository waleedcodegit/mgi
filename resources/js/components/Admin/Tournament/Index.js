import React, { Component } from 'react';
import Game from './Game';
import BasicInfo from './BasicDetails';
import TournamentInfo from './TournamentInfo';
import TournamentModes from './Modes';
import FormFields from './FormFields';
import {connect} from 'react-redux';

class Index extends Component {
    render() {
        return (
            <div>
  <div className="col-12 col-sm-5 col-lg-12">
    <div className="card">
              <div className="card-header">
    <h4>Create Tournament</h4>
  </div>
  <div className="card-body">
    <div className="row">
      <div className="col-6 col-sm-12 col-md-3">
        <ul className="nav nav-pills flex-column" id="myTab4" role="tablist">
          <li className="nav-item">
            <a className={this.props.tabs.step1_tab_display} id="home-tab4"  role="tab" aria-controls="home" aria-selected={this.props.step1_is_display}>Select Game</a>
          </li>
          <li className="nav-item">
            <a className={this.props.tabs.step2_tab_display} id="profile-tab4" role="tab" aria-controls="profile" aria-selected={this.props.step2_is_display}>Basic Details</a>
          </li>
          <li className="nav-item">
            <a className={this.props.tabs.step3_tab_display} id="contact-tab4"  role="tab" aria-controls="contact" aria-selected={this.props.step3_is_display}>Tournament Information</a>
          </li>
          <li className="nav-item">
            <a className={this.props.tabs.step4_tab_display} id="modes-tab4"  role="tab" aria-controls="contact" aria-selected={this.props.step4_is_display}>Tournament Modes</a>
          </li>
          <li className="nav-item">
            <a className={this.props.tabs.step5_tab_display} id="fields-tab4"  role="tab" aria-controls="contact" aria-selected={this.props.step5_is_display}>Form Fields</a>
          </li>
        </ul>
      </div>
      <div className="col-12 col-sm-12 col-md-9">
        <div className="tab-content no-padding" id="myTab2Content">
          <div className={this.props.tabs.step1_tab_content} id="home4" role="tabpanel" aria-labelledby="home-tab4">
         
                      <Game></Game>
          </div>
          <div className={this.props.tabs.step2_tab_content} id="profile4" role="tabpanel" aria-labelledby="profile-tab4">
                    <BasicInfo></BasicInfo>
          </div>
          <div className={this.props.tabs.step3_tab_content} id="contact4" role="tabpanel" aria-labelledby="contact-tab4">
              <TournamentInfo></TournamentInfo>
         </div>
         <div className={this.props.tabs.step4_tab_content} id="modes" role="tabpanel" aria-labelledby="modes-tab4">
              <TournamentModes></TournamentModes>
         </div>
         <div className={this.props.tabs.step5_tab_content} id="fields" role="tabpanel" aria-labelledby="fields-tab4">
              <FormFields></FormFields>
         </div>
        </div>
      </div>
      </div>
              </div>
    </div>
  </div>
</div>

        );
    }
}
const mapStateToProps  = (state) =>{
  return{
    tabs:state.tabs
  }
}
export default connect(mapStateToProps)(Index);