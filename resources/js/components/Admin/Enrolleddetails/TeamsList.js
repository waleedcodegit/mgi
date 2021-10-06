import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            enrollments:[],
            user:[],
            tournaments:[],
            title:'',
            is_display:false
            
        }
    }
    
    componentDidMount(){
        Axios.post('/api/get_enrolled_teams').then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                enrollments:res.data.enrollments
            })
        })
    }
    deleteenrollments(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_enrollments',senderdata).then(res=>{
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
                    <h2 className="section_title">Enrolled Teams List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Tournament Name</th>
                            <th>Team Name</th>
                            <th >Image</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.enrollments.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.tournament.title}</td>
                                        <td>{data.team.title}</td>
                                        <td><img style={{width:'200px'}} src={img_base+data.team.image}></img></td>
                                        
                                       
                                        <td> <Link to={`/adminpanel/team_details/${data.team.id}`}> <button className="btn btn-warning">Team Details</button></Link>
                                           <button className="btn btn-light" onClick={this.deleteenrollments.bind(this,data.id,index)} className="btn btn-danger"> UnEnroll</button></td>
                                        {/* <td><button className="btn btn-light" onClick={this.deleteenrollments.bind(this,data.id,index)}> <i  style={{color:'red'}} ></i>unenroll</button></td> */}

                                    </tr>
                                )
                            }) 
                         } 
                        {
                                    this.state.enrollments.length == 0 ? 
                                    <tr><td colSpan="9">No records founded</td></tr>:null
                        }
                    </tbody>
                </table>
                    </div> : 
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