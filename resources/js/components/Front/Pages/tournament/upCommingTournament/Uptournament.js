import React, { Component } from 'react'

class Uptournament extends Component {
    render() {
        return (
            <div>
                <div className="divide-line-pr"></div>
          <div className="row">
            <div className="col-md-6 col-sm-6">
                
                <h4><span>Upcoming</span> Tournament</h4>
            </div>
			 <div className="col-md-6 col-sm-6">
                 
            </div>
        </div>
        <div className="trnmt-back">
			<a href="tournament-detail.html">
        <img src="images/common/trt-banner2.jpg" />
      
        <div className="row">
           
            <div className="col-md-9 col-sm-12">
               <div className="battle-div">
               <h2>1v1 #2 Battle Royale 11-20</h2>
               <p><span>Total Prize </span> $150 USD / $5 MLC Credits</p>
               </div>
            </div>
			 <div className="col-md-3 col-sm-12">
                 <div className="battle-icon">
                   <div className="battle-left-icon">
                 <img src="images/common/current-ico.png" />
                 </div>
                   <div className="battle-right-text">
                 <h3>Current Bracket</h3>
                 <p>1/64 teams</p>
                 </div>
                  <div className="divide-line-wht"></div>
                   <div className="battle-left-icon">
                 <img src="images/common/team-ico.png" />
                 </div>
                   <div className="battle-right-text">
                 <h3>Team Size</h3>
                 <p>1-2 Players</p>
                 </div>
                 <div className="divide-line-wht"></div>
                   <div className="battle-left-icon">
                 <img src="images/common/regin-ico.png" />
                 </div>
                   <div className="battle-right-text">
                 <h3>Region</h3>
                 <p>Any Region</p>
                 </div>
                 <a href="" className="btn-join"> Join Tournament   </a>
                 
                 </div>
                
            </div>
        </div>
				</a>
        </div>
            </div>
        )
    }
}

export default Uptournament;
