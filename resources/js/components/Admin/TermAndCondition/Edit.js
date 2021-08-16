import Axios from 'axios';
import React, { Component } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
import axios from 'axios';
class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            term_and_condition: '',
            id:this.props.match.params.id,
                loading: false
            
        };
       
    
    }

    async componentDidMount(){
        const term_and_condition_id = this.props.match.params.id;
        // console.log(term_and_condition_id);
      const res = await axios.get(`/api/Edit_term_and_condition/${term_and_condition_id}`);
      if(res.data.status === 200)
      {
          this.setState({
            term_and_condition: res.data.termandcondition.terms_and_conditions,
          });
      }
    }

   

    handleChange(value){
        
        this.setState({
            term_and_condition:value
        })
    }
        
    
    update_term_and_condition(e){
        this.setState({
            loading:true
        })
        if(this.state. term_and_condition =="<p><br></p>"){
            this.setState({
                loading:false
            })
            Swal.fire({
                icon: 'warning',
                title: "Term_and_Condition Field Is Required.",
                showConfirmButton: false,
                timer: 1500
                })
        } else {
            Axios.post('/api/Update_term_and_condition',this.state).then(res=>{
                console.log(res);
                this.setState({
                    loading:false
                })
                if(res.data.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                        window.open('/adminpanel/term-and-condition-list', '_self');
                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                }
            })
        }
        }
    render() {
        return (
                <div id="page-content">
                    <div className="row">
                        <div className="col-sm-12">
                        <div className="panel panel-bordered">
                            <div className="panel-heading">
                            <h3 className="panel-title">Edit Terms & Conditions</h3>
                            </div>
                            <div className="panel-body">
                       
                           
                            
                                 
                                   
                         </div>
                         <label htmlFor="price">Edit Terms & Conditions</label>
                             <ReactQuill onChange={this.handleChange.bind(this)}  id="term_and_condition" value={this.state.term_and_condition}/>
                           

                             <div className="ml-3">                    
                    <button onClick={this.update_term_and_condition.bind(this)} className="btn btn-success">
                    {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Update</>
                                }
                    </button>
                   </div>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    
                
        );
    }
}


export default Edit;