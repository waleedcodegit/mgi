import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import Swal from 'sweetalert2';
import {connect} from 'react-redux';

class TournamentInfo extends Component {
    constructor(props) {
        super(props);
        this.state={
            rules:'',
            critical_rules:'',
            prizez: '',
            contact_details:'',
            error_string:'',
            game_id:'',
            id:'',
            loading:false
        }
    }
    contact_details(e){
        this.setState({
            contact_details:e
        })
    }
    rules(e){
        this.setState({
            rules:e
        })
    }
    critical_rules(e){
        this.setState({
            critical_rules:e
        })
    }
    prizez(e){
        this.setState({
            prizez:e
        })
    }
    create(e){
        this.setState({
            id:window.localStorage.getItem('tournament_id'),
            game_id:window.localStorage.getItem('game_id'),
            loading:true
        }, function(){
            if(this.state.rules =="<p><br></p>"){
                this.setState({
                    loading:false
                })
                Swal.fire({
                    icon: 'warning',
                    title: "description Field is Required.",
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
            if(this.state.critical_rules =="<p><br></p>"){
                this.setState({
                    loading:false
                })
                Swal.fire({
                    icon: 'warning',
                    title: "description Field is Required.",
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
            if(this.state.prizez =="<p><br></p>"){
                this.setState({
                    loading:false
                })
                Swal.fire({
                    icon: 'warning',
                    title: "description Field is Required.",
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
            if(this.state.contact_details =="<p><br></p>"){
                this.setState({
                    loading:false
                })
                Swal.fire({
                    icon: 'warning',
                    title: "description Field is Required.",
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
            else{
                this.setState({
                    loading:false
                })
                Axios.post('/api/update-tournament-info',this.state).then(res=>{
                    if(res.data.status == 200){
                        this.props.changeSteps({
                            step1_tab_display: "nav-link",
                            step1_tab_content: "tab-pane",
                            step2_tab_display: "nav-link",
                            step2_tab_content: "tab-pane fade",
                            step3_tab_display: "nav-link",
                            step3_tab_content: "tab-pane fade",
                            step4_tab_display: "nav-link active",
                            step4_tab_content: "tab-pane fade show active",
                            step5_tab_display: "nav-link",
                            step5_tab_content: "tab-pane fade",
                            step1_is_display: false,
                            step1_is_display: false,
                            step1_is_display: false,
                            step1_is_display: true,
                            step1_is_display: false,
                           })
                        Swal.fire({
                            icon: 'success',
                            title: res.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                            })
                            // window.open('games-list', '_self')
                    }else{
                        Swal.fire({
                            icon: 'danger',
                            title: res.data.msg,
                            showConfirmButton: false,
                            timer: 1500
                            })
                    }
                })
            }
            
        })
       
    }
    render() {
        return (
            <div>
               <div>
  <ul className="nav nav-pills" id="myTab3" role="tablist">
    <li className="nav-item">
      <a className="nav-link active" id="home-tab3" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="true">Contact Details</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="profile-tab3" data-toggle="tab" href="#rules" role="tab" aria-controls="rules" aria-selected="false">Rules</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="contact-tab3" data-toggle="tab" href="#prizez" role="tab" aria-controls="prizez" aria-selected="false">Prizez</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" id="contact-tab3" data-toggle="tab" href="#critical" role="tab" aria-controls="critical" aria-selected="false">Critical Rules</a>
    </li>
  </ul>
  <div className="tab-content" id="myTabContent2">
    <div className="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="home-tab3">
        <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
            
            <div className="row col-md-12">
                 <div class="form-group input_div col-md-12">
                     <label className="input_label" for="exampleInputEmail1">Contact Details</label>
                     <ReactQuill 
                          onChange={this.contact_details.bind(this)}
                          />
                 </div>
                
                
            </div>
        </div>
    </div>
    <div className="tab-pane fade" id="rules" role="tabpanel" aria-labelledby="profile-tab3">
    <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
            
            <div className="row col-md-12">
                 <div class="form-group input_div col-md-12">
                     <label className="input_label" for="exampleInputEmail1">Rules</label>
                     <ReactQuill 
                          onChange={this.rules.bind(this)}
                          />
                 </div>
                
                
            </div>
        </div>
    </div>
    <div className="tab-pane fade" id="prizez" role="tabpanel" aria-labelledby="contact-tab3">
    <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
            
            <div className="row col-md-12">
                 <div class="form-group input_div col-md-12">
                     <label className="input_label" for="exampleInputEmail1">Prizez</label>
                     <ReactQuill 
                          onChange={this.prizez.bind(this)}
                          />
                 </div>
                
                
            </div>
        </div>
    </div>
    <div className="tab-pane fade" id="critical" role="tabpanel" aria-labelledby="contact-tab3">
    <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
            
            <div className="row col-md-12">
                 <div class="form-group input_div col-md-12">
                     <label className="input_label" for="exampleInputEmail1">Critical Rules</label>
                     <ReactQuill 
                          onChange={this.critical_rules.bind(this)}
                          />
                 </div>
                
                
            </div>
        </div>
         
        
    </div>
  </div>
  <div className="ml-3">  
             
             <a onClick={this.create.bind(this)} className="btn btn-info" id="profile-tab4" data-toggle="tab" href="#" role="tab" aria-controls="profile" aria-selected="false">
             {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Next</>
                                }
             </a>
                        
        </div>
</div>

            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      changeSteps:(tabs) => {dispatch({
              type: 'CHANGE_STEPS',
              payload: tabs
          })}
    }
}
export default connect(null, mapDispatchToProps) (TournamentInfo);