import React, { Component } from 'react';
import Axios from 'axios';
import {img_base} from '../../../../Configs/baseUrls';
import { Link } from 'react-router-dom';

class Ontournamnet extends Component {
  constructor(props){
    super(props);
    this.state = {
      games: [],
      today_tournaments: [],
      week_tournaments: [],
      month_tournaments: [],
      game_tournaments: [],
      display_drop_down: false,
    }
  }
  componentDidMount(){
    Axios.get('/api/get_games').then(res=>{
        this.setState({
            games:res.data.games
        })
    })
    Axios.get('/api/get_today_tournaments').then(res=>{
      // console.log(res);
      this.setState({
        today_tournaments:res.data.todayTournaments
      })
    })

    Axios.get('/api/get_this_week_tournaments').then(res=>{
      this.setState({
        week_tournaments:res.data.weekTournaments
      })
    })
    Axios.get('/api/get_this_month_tournaments').then(res=>{
      this.setState({
        month_tournaments:res.data.monthTournaments
      })
    })
  }
  open_drop_down(e) {
    this.setState({
      display_drop_down: !this.state.display_drop_down
    })
  }

  gameTournament(game_id) {
    let senddata = {
      game_id: game_id
    }
    Axios.post('/api/get_tournament_with_game_id', senddata).then(res=>{
      console.log(res);
      this.setState({
        game_tournaments:res.data.tournaments
      })
    })
  }

    render() {
        return (
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="games-list">
                  <h3>Choose your Game</h3>
                  <ul>
                    {
                      this.state.games.map((data,index)=>{
                        return(
                              <li key={index}><a onClick={this.gameTournament.bind(this,data.id)}><img src={img_base+data.image} /></a></li>
                            )
                        })
                    }  
                    <li></li>
                  </ul>
                </div>
            </div>
  <div className="col-md-12 col-sm-12">
    <div className="row row-offcanvas row-offcanvas-left">
      <div className="col-md-12 tab-line">
    
        <div className="item tab-drop">
          <label>
            <select className="basic tournament-drp" onChange="">
              <option className="drp-dtail">EU West</option>
              <option>EU Nordic &amp; East</option>
              <option>Oceania</option>
              <option>Russia</option>
              <option>Turkey</option>
              <option>Brazil</option>
              <option>Republic of Korea</option>
              <option>Latin America North</option>
              <option>Latin America South</option>
              <option>Japan</option>
            </select>
          </label>
        </div>
        <div className="item tab-drop">
          <label>
            <select className="basic">
              <option>Any Format</option>
              <option>1 VS 1</option>
              <option>Duo VS Duo</option>
              <option>Team VS Team</option>
            </select>
          </label>
        </div>
        <div className="item tab-drop">
          <label>
            <select className="basic">
              <option>Bracket</option>
              <option>Show Ladders</option>
            </select>
          </label>
        </div>
        <ul className="tab-filters" role="tablist">
          <li className="active"><a href="#Today" role="tab" data-toggle="tab">Today</a></li>
          <li><a href="#Week" role="tab" data-toggle="tab">This Week</a></li>
          <li><a href="#Weekend" role="tab" data-toggle="tab">This Month</a></li>
        </ul>
    </div>


      <div className="tab-content">
        <div className="tab-pane active" id="Today" role="tabpanel">
        {
            this.state.today_tournaments[0] ?
            <>
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <h3>Watch Game <span> Live!</span></h3>
              <h4><span>Ongoing</span> Tournament</h4>
            </div>
            <div className="col-md-6 col-sm-6">
            </div>
          </div>
           
              <div className="trnmt-back">
                <a>
                    <img src={img_base+this.state.today_tournaments[0].header_image} />
                </a>
                <div >
                  <a href="">
                    <div className="col-md-9 col-sm-12">
                      <div className="battle-div">
                        <h2>{this.state.today_tournaments[0].mode}</h2>
                        <p><span>Total Prize </span><span dangerouslySetInnerHTML={{__html:this.state.today_tournaments[0].prizez}}></span></p>
                      </div>
                    </div>
                  </a><div className="col-md-3 col-sm-12"><a href="">
                    </a><div className="battle-icon"><a href="">
                        <div className="battle-left-icon">
                          <img src="/images/common/current-ico.png" />
                        </div>
                        <div className="battle-right-text">
                          <h3>Current Bracket</h3>
                          <p>{this.state.today_tournaments[0].registration_limit}</p>
                        </div>
                        <div className="divide-line-wht" />
                        <div className="battle-left-icon">
                          <img src="/images/common/team-ico.png" />
                        </div>
                        <div className="battle-right-text">
                          <h3>Team Size</h3>
                          <p>1-2 Players</p>
                        </div>
                        <div className="divide-line-wht" />
                        <div className="battle-left-icon">
                          <img src="/images/common/regin-ico.png" />
                        </div>
                        <div className="battle-right-text">
                          <h3>Region</h3>
                          <p>{this.state.today_tournaments[0].region}</p>
                        </div>
                      </a><a className="btn-live"><i className="fa fa-video-camera" aria-hidden="true" /> Live Match </a>
                    </div>
                  </div>
                </div>
              </div>
              </>
            :null
          }
          
          <div className="row">
          {
            this.state.today_tournaments.map((data,index)=>{
              return(
                  <div className="col-md-4 col-sm-6" key={index}>
                      <div className="main-lates-matches">
                        <div className="tournament-card-container mb-10">
                          <bf-tournament-card className="vertical mb-20">
                            <div className="card-container gtm-home-tournament-card featured">
                              <a href={`/tournamentDetail/${data.id}`}>
                                <div className="game-bg-container">
                                  <bf-image ratio="300/645" style={{paddingTop: '46.5116%'}}>
                                      <div className="animated actual-image fade-in">
                                        <img src={img_base+data.header_image} />
                                      </div>
                                  </bf-image>
                                </div>
                                <div className="card-details">
                                  <div className="tournament-card-label-row" flex layout="flex-start center">
                                    <p className="text-hyphenate overflow-ellipsis game-name-pill">League of Legends</p>
                                  </div>
                                  <p className="tournament-name" data-ellipsis>{data.title}</p>
                                  <div className="details-content-desktop text-12px font-500 text-gray" flex row layout="space-between start">
                                    <div className="content-group">
                                      <i className="material-icons calendar_today content-icon" />
                                      <p>{data.start_date}</p>
                                    </div>
                                    <div className="content-group">
                                      <i className="material-icons calendar_today content-icon" />
                                      <p>{data.start_time}</p>
                                    </div>
                                    <div className="content-group">
                                      {/* <div className="date-pill">in 4 days</div>  */}
                                    </div> 
                                  </div>
                                </div>
                              </a>
                              <div className="card-footer pl-10 pr-10">
                                <img src={img_base+data.game.image} />
                                <div className="text-16px ellipsis font-400 text-white ml-10 org-name gtm-home-tournament-card-organizer">{data.game.title}</div>
                                <div className="card-featured text-black gutter-10 pl-40" translate><span>FEATURED</span></div> 
                              </div>
                            </div>
                          </bf-tournament-card>
                        </div>
                      </div>
                    </div>
                  )
                })
          } 

          {
              this.state.today_tournaments.length == 0 ? 
              <h3 className="text-light text-center">No records founded</h3>:null
          }
            
          </div>
        </div>
        <div className="tab-pane" id="Week" role="tabpanel">
          <div className="row">
            {
              this.state.week_tournaments.map((data,index)=>{
                return(
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="main-lates-matches">
                      <div className="tournament-card-container mb-10">
                        <bf-tournament-card className="vertical mb-20">
                          <div className="card-container gtm-home-tournament-card featured">
                            <a href={`/tournamentDetail/${data.id}`}>
                              <div className="game-bg-container">
                                <bf-image ratio="300/645" style={{paddingTop: '46.5116%'}}>
                                    <div className="animated actual-image fade-in">
                                      <img src="/images/common/esport-main-slider-2.jpg" />
                                    </div>
                                </bf-image>
                              </div>
                              <div className="card-details">
                                <div className="tournament-card-label-row" flex layout="flex-start center">
                                  <p className="text-hyphenate overflow-ellipsis game-name-pill">League of Legends</p>
                                </div>
                                <p className="tournament-name" data-ellipsis>{data.title}</p>
                                <div className="details-content-desktop text-12px font-500 text-gray" flex row layout="space-between start">
                                  <div className="content-group">
                                    <i className="material-icons calendar_today content-icon" />
                                    <p>{data.start_date}</p>
                                  </div>
                                  <div className="content-group">
                                    <i className="material-icons calendar_today content-icon" />
                                    <p>{data.start_time}</p>
                                  </div>
                                  <div className="content-group">
                                    {/* <div className="date-pill">in 4 days</div>  */}
                                  </div> 
                                </div>
                              </div>
                            </a>
                            <div className="card-footer pl-10 pr-10">
                              <img src={img_base+data.game.image} />
                              <div className="text-16px ellipsis font-400 text-white ml-10 org-name gtm-home-tournament-card-organizer">{data.game.title}</div>
                              <div className="card-featured text-black gutter-10 pl-40" translate><span>FEATURED</span></div> 
                            </div>
                          </div>
                        </bf-tournament-card>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          {
              this.state.week_tournaments.length == 0 ? 
              <h3 className="text-light text-center">No records founded</h3>:null
          }
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="pagination-wrap padding-top">
                {/* <ul className="pagination">
                  <li><a href="#"><i className="fa fa-chevron-left" aria-hidden="true" /></a></li>
                  <li><a href="#">01</a></li>
                  <li className="active"><a href="#">02</a></li>
                  <li><a href="#">03</a></li>
                  <li><a href="#">04</a></li>
                  <li><a href="#">05</a></li>
                  <li><a href="#"><i className="fa fa-chevron-right" aria-hidden="true" /></a></li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-9" />
          </div>
        </div>
        <div className="tab-pane" id="Weekend" role="tabpanel">
          <div className="row">
          {
              this.state.month_tournaments.map((data,index)=>{
                return(
                  <div className="col-md-4 col-sm-6" key={index}>
                    <div className="main-lates-matches">
                      <div className="tournament-card-container mb-10">
                        <bf-tournament-card className="vertical mb-20">
                          <div className="card-container gtm-home-tournament-card featured">
                            <a href={`/tournamentDetail/${data.id}`}>
                              <div className="game-bg-container">
                                <bf-image ratio="300/645" style={{paddingTop: '46.5116%'}}>
                                    <div className="animated actual-image fade-in">
                                      <img src="/images/common/esport-main-slider-2.jpg" />
                                    </div>
                                </bf-image>
                              </div>
                              <div className="card-details">
                                <div className="tournament-card-label-row" flex layout="flex-start center">
                                  <p className="text-hyphenate overflow-ellipsis game-name-pill">League of Legends</p>
                                </div>
                                <p className="tournament-name" data-ellipsis>{data.title}</p>
                                <div className="details-content-desktop text-12px font-500 text-gray" flex row layout="space-between start">
                                  <div className="content-group">
                                    <i className="material-icons calendar_today content-icon" />
                                    <p>{data.start_date}</p>
                                  </div>
                                  <div className="content-group">
                                    <i className="material-icons calendar_today content-icon" />
                                    <p>{data.start_time}</p>
                                  </div>
                                  <div className="content-group">
                                    {/* <div className="date-pill">in 4 days</div>  */}
                                  </div> 
                                </div>
                              </div>
                            </a>
                            <div className="card-footer pl-10 pr-10">
                              <img src={img_base+data.game.image} />
                              <div className="text-16px ellipsis font-400 text-white ml-10 org-name gtm-home-tournament-card-organizer">{data.game.title}</div>
                              <div className="card-featured text-black gutter-10 pl-40" translate><span>FEATURED</span></div> 
                            </div>
                          </div>
                        </bf-tournament-card>
                      </div>
                    </div>
                  </div>
                )
              })
          }

          {
              this.state.month_tournaments.length == 0 ? 
              <h3 className="text-light text-center">No records founded</h3>:null
          }
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="pagination-wrap padding-top">
                {/* <ul className="pagination">
                  <li><a href="#"><i className="fa fa-chevron-left" aria-hidden="true" /></a></li>
                  <li><a href="#">01</a></li>
                  <li className="active"><a href="#">02</a></li>
                  <li><a href="#">03</a></li>
                  <li><a href="#">04</a></li>
                  <li><a href="#">05</a></li>
                  <li><a href="#"><i className="fa fa-chevron-right" aria-hidden="true" /></a></li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-9" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}
export default Ontournamnet;
