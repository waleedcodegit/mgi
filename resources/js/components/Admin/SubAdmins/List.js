import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            admin:[],
            msg:'',
            is_display: false
        }
    }
    componentDidMount(){
        Axios.get('/api/admins').then(res=>{
            console.log(res);
            // console.log(res);
            this.setState({
                admin:res.data.admin,
                is_display: true
            })
        })
    }
    deleteAdmin(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_banner',senderdata).then(res=>{
           this.componentDidMount();
        });
       }
    render() {
        return (
            <div className="container">
                 {
                    this.state.is_display ? 
                    <div> 
                         <div className="top_section_title_div">
                <h2 className="section_title">Sub Admins</h2>
            </div>
            <table className="table table-hover table-bordered table-striped mt-4">
                <thead>
                    <tr>
                        <th>Sr</th>
                        <th>Name</th>
                        <th>Email</th>
                        {/* <th>Address</th> */}
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.admin.map((data,index)=>{
                            // console.log(data);
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{data.first_name + ' ' +data.last_name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.address}</td>
                                    <td><Link to={`/adminpanel/edit-admin/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link>
                                    {/* <button className="btn btn-light" onClick={this.deleteAdmin.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button> */}
                                    <Link to={`/adminpanel/admin-rights/${data.id}`}> <button className="btn btn-warning">Manage Rights</button></Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    {
                                this.state.admin.length == 0 ? 
                                <tr><td colSpan="9">No records founded</td></tr>:null
                    }
                </tbody>
            </table>
                    </div>
                    : 
                    <div>
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '48%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format mb-5"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                }
        </div>
        );
    }
}

export default List;