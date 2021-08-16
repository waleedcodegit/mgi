import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

class Rights extends Component {
    constructor(props) {
        super(props);
        this.state={
            answers: [],
            error_string:'',
            id:this.props.match.params.id,
            rights:[]
        }
    }
    componentDidMount(){
        Axios.post('/api/get-admin-rights',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                rights:res.data.rights
            })
        })
    }
    permission(val, mod){
       
        let temp_arr =  this.state.answers;
        temp_arr.push({
                module:mod
        });
        console.log(temp_arr);
        this.setState({
            answers: []
          }, function() {
            this.setState({
                answers: temp_arr
            });
          });
    }
    create(e){
        Axios.post('/api/save-right',this.state).then(res=>{
            console.log(res);
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
                    window.open('/adminpanel/admins', '_self')
            }else{
                this.setState({
                    error_string:res.data.msg
                })
            }
        })
    }
    render() {
        return (
            <div>
                <div className="container">
            <div className="top_section_title_div">
                <h2 className="section_title">Permissions List 
                
                </h2>
                
            </div>
            <table className="table table-hover table-bordered table-striped mt-4">
                <thead>
                    <tr>
                        <th>Permissions</th>
                        <th>is_enabled</th>
                    </tr>
                </thead>
                <tbody>
                {
                        this.state.rights.map((data,index)=>{
                            return(
                                
                                <tr>
                                    <td>{data.module}</td>
                                    <td><input onChange={this.permission.bind(this, index, data.module)} type="checkbox" defaultChecked={ data.is_enabled==true ? "Checked": '' } />
                                        </td>
                                </tr>
                            )
                        })
                    }
                    {
                                this.state.rights.length == 0 ? 
                                <tr><td colSpan="9">No records founded</td></tr>:null
                    }
                                {/* <tr>
                                    <td>Dashboard</td>
                                    <td> <input onChange={this.dashboard.bind(this)} type="checkbox" checked={ this.state.dashboard ? "defaultChecked": '' } />
                                    </td>
                                </tr> */}
                               
                </tbody>
            </table>
            <div className="ml-3">                    
                <button onClick={this.create.bind(this)} className="btn btn-success">Update</button>
               </div>
        </div>
        
            </div>
        );
    }
}

export default Rights;