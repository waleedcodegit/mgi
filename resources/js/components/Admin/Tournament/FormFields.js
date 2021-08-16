import Axios from 'axios';
import React, { Component ,useState, useMemo } from 'react';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; 
import Swal from 'sweetalert2';
class FormFields extends Component {
    constructor(props) {
        super(props);
        this.state={
            fields: [],
            status:'draft',
            game_id:window.localStorage.getItem('game_id'),
            id:window.localStorage.getItem('tournament_id'),
            loading: false
        }
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }
    add_field() {
        let temp_arr = this.state.fields;
        temp_arr.push({ name: '', type: 0 })
        this.setState({
            fields: temp_arr
        })
    }
    Deletefield(ind){
        let temp_arr = this.state.fields;
        temp_arr.map((data,index)=>{
            if(index == ind){
                temp_arr.splice(index,1)
            }
        })

        this.setState({
            fields:temp_arr
        })
    }
    onchangefield(val,ind){
        let temp_arr = this.state.fields;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.name = val
            }
        })

        this.setState({
            fields:temp_arr
        })
    }
    onchangeprice(val,ind){
        let temp_arr = this.state.fields;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.type = val
            }
        })

        this.setState({
            fields:temp_arr
        })
    }
    create(){
        this.setState({
            id:window.localStorage.getItem('tournament_id'),
            game_id:window.localStorage.getItem('game_id'),
            loading:true
        }, function(){
            this.setState({
                loading:false
            })
            Axios.post('/api/update-tournament-status',this.state).then(res=>{
                if(res.data.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                        window.open('tournament-list', '_self')
                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                }
            })
        })
    }
    render() {
        return (
            <div className="container">
            <div className="top_section_title_div">
                <h2 className="section_title">Tournament Status</h2>
            </div>
            <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Status</label>
                        <select  className="form-control " onChange={this.status.bind(this)}>
                        <option value="">Select One</option>
                            <option value="Draft">Draft</option>  
                            <option value="Publish">Publish</option>
                        </select>
                    </div>
                   
                   
               </div> 
               <div className=" mt-3">
                            <div className="col-md-12 row">
                                <h4 className="col-md-8">Fields</h4>
                                <button onClick={this.add_field.bind(this)} className="btn btn-info col-md-4" >Add Field</button>
                            </div>
                            <div className="mt-3">
                                <table className="table table-stripped table-hover">
                                    <thead>
                                        <tr>
                                            {/* <th>Type</th> */}
                                            <th>Name</th>
                                            <th>Type</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            this.state.fields.map((data, index) => {
                                                return (
                                                    <tr>
                                                        {/* <td><select className="form-control" value={data.type}>
                                                            <option value="">Choose..</option>
                                                            <option value="size">size</option>
                                                            <option value="color">color</option>

                                                            </select></td> */}
                                                        <td><input onChange={(e)=>{this.onchangefield(e.target.value,index)}}  className="form-control" value={data.field}></input></td>
                                                        <td>
                                                        <select value={data.price} onChange={(e)=>{this.onchangeprice(e.target.value,index)}} className="form-control ">
                                                            <option value="">Select One</option>
                                                            <option value="Public">Public</option>  
                                                            <option value="Private">Private</option>
                                                        </select>
                                                        </td>
                                                        <td><button className="btn btn-light" onClick={this.Deletefield.bind(this,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i>
                                                        </button></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
               
                
              
                        <div className="ml-3">                    
                            <button onClick={this.create.bind(this)} className="btn btn-info">Save</button>
                        </div>
              
               {
                   this.state.error_string != '' ?
                    <p className="text-danger mt-3 ml-3">{this.state.error_string}</p>
                    :null
               }
            </div>
        </div>
    
        );
    }
}

export default FormFields;