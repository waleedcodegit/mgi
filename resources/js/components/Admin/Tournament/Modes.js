import Axios from 'axios';
import React, { Component ,useState, useMemo } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import Swal from 'sweetalert2';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { connect } from 'react-redux';

class Modes extends Component {
    constructor(props) {
        super(props);
        this.state={
            mode:'',
            registration_limit:'',
            
            region:'',
            country: [],
            platforms:'',
            fee: '',
            game_id:window.localStorage.getItem('game_id'),
            id:window.localStorage.getItem('tournament_id'),
            loading: false
        }
    }
    selectCountry (val) {
        let temp_arr =  this.state.country;
        let found = false;
        if(temp_arr.length > 0){
            temp_arr.map(function(item, i){
                if(item.name == val){
                    found = true;
                }
              })
        }
        if(!found){
            temp_arr.push({
                name:val
            });
            console.log(temp_arr);
            this.setState({ 
                country: temp_arr
            });
        }
       
      } 
      remove_country(val){
        let temp_arr =  this.state.country;
        temp_arr = temp_arr.filter(data => (data.name != val));
        this.setState({ 
            country: temp_arr
         });
      } 
    mode(e){
        this.setState({
            mode:e.target.value
        })
    }

    tournament_fee(e) {
        this.setState({
            fee:e.target.value
        })
    }

    registration_limit(e){
        this.setState({
            registration_limit:e.target.value
        })
    }
    regions(e){
        this.setState({
            region:e.target.value
        })
    }
    platforms(e){
        this.setState({
            platforms:e.target.value
        })
    }
    create(e){
        this.setState({
            id:window.localStorage.getItem('tournament_id'),
            game_id:window.localStorage.getItem('game_id'),
            loading:true
        }, function(){
            this.setState({
                loading:false
            })
            Axios.post('/api/update-tournament-modes',this.state).then(res=>{
                if(res.data.status == 200){
                    this.props.changeSteps({
                        step1_tab_display: "nav-link",
                        step1_tab_content: "tab-pane",
                        step2_tab_display: "nav-link",
                        step2_tab_content: "tab-pane fade",
                        step3_tab_display: "nav-link",
                        step3_tab_content: "tab-pane fade",
                        step4_tab_display: "nav-link",
                        step4_tab_content: "tab-pane fade",
                        step5_tab_display: "nav-link active",
                        step5_tab_content: "tab-pane fade show active",
                        step1_is_display: false,
                        step1_is_display: false,
                        step1_is_display: false,
                        step1_is_display: false,
                        step1_is_display: true,
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
        })
       
    }
    render() {
        const { country, region } = this.state;
        return (
            <div className="container">
            <div className="top_section_title_div">
                <h2 className="section_title">Tournament Modes</h2>
            </div>
            <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
            
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Registration Limit</label>
                        <input  onChange={this.registration_limit.bind(this)} type="text" className="form-control" />
                    </div>
                   
                   
               </div>  

               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Tournament Fee</label>
                        <input  onChange={this.tournament_fee.bind(this)} type="number" className="form-control"/>
                    </div>
                   
                   
               </div> 

               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Modes</label>
                        <select className="form-control " onChange={this.mode.bind(this)}>
                            <option value="">Select One</option>
                            <option value="1 vs 1">1 vs 1</option>  
                            <option value="team vs team">Team vs Team</option>
                            <option value="duo vs duo">Duo vs Duo</option>  

                        </select>
                    </div>
                   
                   
               </div> 
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Platforms</label>
                        <select  className="form-control " onChange={this.platforms.bind(this)}>
                        <option value="">Select One</option>
                            <option value="Xbox One">Xbox One</option>  
                            <option value="PlayStation 4">PlayStation 4</option>
                            <option value="PC">PC</option>  
                            <option value="Nitento Switch">Nitento Switch</option> 

                        </select>
                    </div>
                   
                   
               </div>  
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Regions</label>
                        <select  className="form-control " onChange={this.regions.bind(this)}>
                            <option value="">Select One</option>    
                            <option value="Asia">Asia</option>  
                            <option value="Europe">Europe</option>
                            <option value="Latin America">Latin America</option> 
                            <option value="North America">North America</option> 
                            <option value="Oceania">Oceania</option> 
                            <option value="Middle East">Middle East</option> 
                            <option value="Africa">Africa</option>

                        </select>
                         {/* <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val) => this.selectRegion(val)} /> */}
                     </div>
                   
                   
               </div> 
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Country</label>
                        <CountryDropdown
                        value={country} className="form-control "
                        onChange={(val) => this.selectCountry(val)} />
                    </div>
                    <div class="form-group input_div col-md-12">
                       
                            <label className="input_label" for="exampleInputEmail1">List of Countries Selected</label>
                            <div className="col-md-12">
                                <ul className="input_label"> {this.state.country.map((data,index)=>  <li style={{marginLeft: '20px'}}>{data.name} <i onClick={this.remove_country.bind(this, data.name)} className="fas fa-window-close"></i></li>)}</ul> 
                            </div>
                    </div>

                   
                   
               </div>  
              
              
              
               <div className="ml-3">                    
                <button onClick={this.create.bind(this)} className="btn btn-info">
                {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Next</>
                                }
                </button>
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
export default connect(null, mapDispatchToProps) (Modes);