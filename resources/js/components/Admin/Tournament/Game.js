import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import '../admin.css'
class Game extends Component {
    constructor(props) {
        super(props);
        this.state={
            games:[],
            selected_game: 'None',
            error_string:'',
            loading: false,
            image_index: -1,
        }
    }
    componentDidMount(){
        window.localStorage.setItem('tournament_id' , '');
        window.localStorage.setItem('game_id' , '');
        Axios.get('/api/get_games').then(res=>{
            this.setState({
                games:res.data.games,
            })
        })
    }
    create(index, val, name){
       window.localStorage.setItem('tournament_id' , '');
       window.localStorage.setItem('game_id' , val);
       this.setState({
        selected_game:name,
        image_index: index
    })
   
    }
    next(){
        this.setState({
            loading:true
        })
        if(this.state.selected_game =="None"){
            this.setState({
                loading:false
            })
            Swal.fire({
                icon: 'warning',
                title: "No Game Selected",
                showConfirmButton: false,
                timer: 1500
                })
        }
        else{
            this.props.changeSteps({
                step1_tab_display: "nav-link",
                step1_tab_content: "tab-pane",
                step2_tab_display: "nav-link active",
                step2_tab_content: "tab-pane fade show active",
                step3_tab_display: "nav-link",
                step3_tab_content: "tab-pane fade",
                step4_tab_display: "nav-link",
                step4_tab_content: "tab-pane fade",
                step5_tab_display: "nav-link",
                step5_tab_content: "tab-pane fade",
                step1_is_display: false,
                step1_is_display: true,
                step1_is_display: false,
                step1_is_display: false,
                step1_is_display: false,
               })
        }
       
    }
    // next(){
    //   window.open('/adminpanel/tournament-basic-details' , '_self');
    // }
    render() {
        const mystyle = {
            border: "green",
            borderStyle: "solid",
            borderWidth: "thick",
            height: '200px',
            width: '200px',
          };
        return (
            <div className="container">
            <div className="top_section_title_div">
                <h2 className="section_title">Select Game</h2>
               
            </div>
            <div className=" container content_card_div mt-4 mb-5 pb-5 pt-3">
            
               
                       
                    <div class="row col-md-12">
                       
                        {
                            this.state.games.map((data,index)=>{
                                return(
                                        <div style={{marginRight:'60px'}} className="col-md-4">
                                            <img style={ this.state.image_index == index ? mystyle : {display:'block' , cursor: 'pointer', display: 'inline-block', height: '165px', width: '165px',margin: '10px',border: 'solid 1px #ccc'  }} onClick={this.create.bind(this, index, data.id , data.title )}  src={img_base+data.image}></img>
                                             {/* <label className="input_label" for="exampleInputEmail1">{data.title}</label> */}
                                             {/* <input type="checkbox" id={"cb"+(index+1)} />
                                             <label for={"cb"+(index+1)}>
                                            <img onClick={this.create.bind(this, index, data.id , data.title )}  src={img_base+data.image}></img>
                                            </label> */}
                                        </div>
                                       
                                        
                                       
                                )
                            })
                        }
                    
                   
               </div>
              
              
              
               <div className="ml-3">  
               <label className="input_label" for="exampleInputEmail1"> Selected Game: {this.state.selected_game}</label>
               {/* <label className="input_label" for="exampleInputEmail1">Selected Game: </label>  */}
                    {/* <a className="btn btn-info">Next</a> */}
                               
                {/* <button >Next</button> */}
               </div>
               <div className="ml-3">                    
                <button onClick={this.next.bind(this)} className="btn btn-info">
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
export default connect(null, mapDispatchToProps)(Game);
