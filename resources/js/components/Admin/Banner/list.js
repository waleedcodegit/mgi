import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_base } from '../../Configs/baseUrls';
import {Link} from 'react-router-dom'
class List extends Component {
    constructor(props) {
        super(props);
        this.state={
            sliderImages:[],
            is_display:false
        }
    }
    
    componentDidMount(){
        Axios.get('/api/get_all_banners').then(res=>{
            this.setState({
                is_display:true,
                sliderImages:res.data.sliderImages
            })
        })
    }
    deleteBanner(id){
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
                            <h2 className="section_title">Banner List</h2>
                        </div>
                        <table className="table table-hover table-bordered table-striped mt-4">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Image</th>
                                    <th width="15%">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.sliderImages.map((data,index)=>{
                                        return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td><img style={{width:'120px'}} src={img_base+data.image}></img></td>
                                                <td>
                                                    <Link to={`/adminpanel/edit-banner/${data.id}`}><button className="btn btn-success"> <i style={{color:'white'}} className="far fa-edit "> </i></button></Link>
                                                    <button className="btn btn-light" onClick={this.deleteBanner.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    this.state.sliderImages.length == 0 ? 
                                    <tr><td colSpan="3">No records founded</td></tr>:null
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