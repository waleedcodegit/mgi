import React, { Component } from 'react';
import Overview from './Overview/Overview';
import Participants from './Participants/Participants';
import Brackets from './Brackets/Brackets';
import Media from './Media/Media';
import Stats from './Stats/Stats';
import Announcements from './Announcements/Announcements';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { connect } from 'react-redux';
import reactSelectCjs from 'react-select';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: false,
            user_id: [],
            id:'',
            team_id: "",
            teams_id:'',
            id:'',
            id: this.props.match.params.id
        }
    }

    componentDidMount(){
        const senderdata = {
            token: window.localStorage.getItem('mgltokenlogin')
          }
          const datasend = {
              
            user_id:this.props.user.data.id,
            tournament_id: this.props.match.params.id
          }
        Axios.post('/api/enrollment_check',datasend).then(res => {
            if (res.data.status == 200) {
                this.setState({
                    display: true
                }) 
            }
        })

       
        // console.log(this.props.match.params.id);
        Axios.post('/api/get_user_id',{user_id:this.props.user.data.id}).then(res=>{  
            console.log(res);
            if(res.data.status == 200) {
                // console.log(res);
                this.setState({
                    user_id:res.data.team.user_id,
                    teams_id:res.data.team.id

                })
            }       
           
        })
        Axios.post('/api/get_team_id',{id:this.props.match.params.id}).then(res=>{  
            // console.log(res);
            if(res.data.status == 200) {
                // console.log(res);
                this.setState({
                    // user_id: res.data.team.user_id,
                    team_id:res.data.team.team_id

                })
            }       
           
        })
        
    }
   
    render() {
        return (
            <div>
                {/*BREADCRUMBS BEGIN*/}
                <section className="image-header">
                    <div className="container">
                    </div>
                </section>
                {/*BREADCRUMBS END*/}
                {/*CONTENT BEGIN*/}
                <div className="content">
                    <div className="container">
                        <div className="row row-offcanvas row-offcanvas-left">                       
                            
                            <div className="col-md-12 tab-line">
                            <ul className="tab-filters2" role="tablist">
                                <li className="active"><a href="#overview" role="tab" data-toggle="tab">Overview</a></li>
                                <li><a href="#participants" role="tab" data-toggle="tab">Participants</a></li>
                                <li><a href="#brackets" role="tab" data-toggle="tab">Brackets</a></li>
                                {/* <li><a href="#media" role="tab" data-toggle="tab">Media</a></li> */}
                                <li><a href="#stats" role="tab" data-toggle="tab">Stats</a></li>
                                <li><a href="#announcements" role="tab" data-toggle="tab">Announcements</a></li>
                            </ul>

                             { 
                                         this.props.user.data.id === this.state.user_id ? 
                                         
                                         <div className="item tab-drop2">
                                           <a className="btn-more" href={`/teamenrollment/${this.props.match.params.id}`}>Team Enrollment</a> 
                                      
                                     </div>
                                         :null
                                         
                                        }      

                            <div className="item tab-drop2">
                                {
                                    this.state.display == false ? 
                                        <a className="btn-more" href={`/enrollment/${this.props.match.params.id}`}>Enrollment</a>   
                                    : 
                                        <a className="btn-more" >Already Enroll</a>
                                }
                                
                            </div>

                            {/* <div className="item tab-drop2">
                                <label>
                                    <select className="basic">
                                        <option>Contact</option>
                                        <option>Contact the Tournament Organizer</option>
                                        <option>Go to organizer's discord page.</option>
                                    </select>
                                </label>
                            </div> */}
                            {/* <a href className="btn-live"> Live Match </a> */}
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane active" id="overview" role="tabpanel">

                                    <Overview {...this.props}></Overview>

                                </div>
                                <div className="tab-pane" id="participants" role="tabpanel">

                                    <Participants {...this.props}></Participants>

                                </div>
                                <div className="tab-pane" id="brackets" role="tabpanel">
                                    
                                    <Brackets {...this.props}></Brackets>

                                </div>
                                {/* <div className="tab-pane" id="media" role="tabpanel">
                                    
                                    <Media></Media>

                                </div> */}
                                <div className="tab-pane" id="stats" role="tabpanel">
                                    
                                    <Stats {...this.props}></Stats>

                                </div>
                                <div className="tab-pane" id="announcements" role="tabpanel">

                                    <Announcements {...this.props}></Announcements>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        user:state.user
    }
}
export default  connect(mapStateToProps)(Index);
