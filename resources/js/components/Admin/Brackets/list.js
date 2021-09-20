import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            brackets:[],
            tournaments:[],
            is_display:false
            
        }
    }
    
    componentDidMount(){
        Axios.post('/api/get_brackets').then(res=>{
            console.log(res);
            this.setState({
                is_display:true,
                brackets:res.data.brackets
            })
        })
    }
    deleteBrackets(id){
        let senderdata={
          id:id
        }
        Axios.post('/api/delete_brackets',senderdata).then(res=>{
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
                    <h2 className="section_title">Brackets List</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>Tournament</th>
                            <th>Image</th>
                            <th >Edit</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.brackets.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.tournament.title}</td>
                                        <td><img style={{width:'200px'}} src={img_base+data.image}></img></td>
                                       
                                        <td><Link to={`/adminpanel/edit-brackets/${data.tournament_id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link></td>
                                        <td><button className="btn btn-light" onClick={this.deleteBrackets.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button></td>

                                    </tr>
                                )
                            }) 
                         } 
                        {
                                    this.state.brackets.length == 0 ? 
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