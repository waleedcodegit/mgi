import Axios from 'axios';
import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css'; 
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2';
import Multiselect from 'multiselect-react-dropdown';


class Create extends Component {
    constructor(props) {
        super(props);
        this.state={
            User:[],
            user:'',
            email:'',
            user_id:'',
            id:'',
            is_display: true,
            options: [],
        }
    }
    componentDidMount(){
        Axios.get('/api/get_all_users').then(res=>{
            console.log(res);
            this.setState({
                User:res.data.User,
                options:res.data.User,
                is_display: true
            })
        })
    }
    User_id(e) {       
        this.setState({ 
            user_id:e.target.value
        })
     }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    create(e){
        e.preventDefault();

        let senddata = {

            user_id: this.state.user_id,
            email:this.state.email,
        }
        
        console.log(senddata);
            Axios.post('/api/create_email',this.state).then(res=>{
               
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
                        this.props.history.push('/adminpanel/emails-list');
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
    onSelect(selectedList, selectedItem) {
    
    }
    
    onRemove(selectedList, removedItem) {
    
    }
  
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Create Email</h2>
                </div>
                
                <label className="input_label" for="exampleInputEmail1">User Name</label>
             
                    <div>                    
                       <tr>
                       <div className="row col-md-12">
                          <div class="form-group input_div col-md-12">
                         <select  className="form-control " style={{width:'950px'}}  onClick={this.User_id.bind(this)} >
                                  <option value="">Select User Name</option>
                                     {
                                            this.state.User.map((data,index)=>{
                                                return(
                                                        <option value={data.id}>{data.first_name + ' ' +data.last_name}</option>                         
                                                        )
                                                })
                                            }               
                        </select>
                               </div>
                                 </div>
                              </tr>

                              {/* <Multiselect
                                       onClick={this.User_id.bind(this)}
                                     options={this.state.options} // Options to display in the dropdown
                                      selectedValues={this.state.selectedValues} // Preselected value to persist in dropdown
                                        onSelect={this.onSelect} // Function will trigger on select event
                                      onRemove={this.onRemove} // Function will trigger on remove event
                                          displayValue="first_name" // Property name to display in the dropdown options
                                                  /> */}
                      
                 
                   <div className="row col-md-12">
                        <div class="form-group input_div col-md-7">
                            <label className="input_label" for="exampleInputEmail1">Email</label>
                            <textarea style={{width:'950px'}} onChange={this.email.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" />
                        </div>
                        <h1 className="col-md-1"></h1>

                   </div>
                   <div className="ml-3">                    
                    <button onClick={this.create.bind(this)} className="btn btn-success">
                    {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Create</>
                                }
                    </button>
                   </div>
                  
                </div>
                </div>
    
            
        );
    }
}


export default Create;