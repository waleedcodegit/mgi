import Axios from 'axios';
import React, { Component } from 'react';
import 'react-quill/dist/quill.snow.css'; 
import { baseurl, img_base } from '../../Configs/baseUrls';
import Swal from 'sweetalert2';

class Edit extends Component {
    constructor(props) {
        super(props);
        this.state={
            image:'',
            binary_img:'',
            tournaments:[],
            tournament_id:'',
            title:'',
            id:this.props.match.params.id,
            id:this.props.match.params.id,
            loading:false
        }
    }
    componentDidMount(){
        Axios.post('/api/get_brackets_by_id',{id:this.props.match.params.id}).then(res=>{
            // console.log(res);
            this.setState({
                is_display:true,
                image:res.data.bracket.image,
                tournament_id:res.data.bracket.tournament_id

            })
        })
        Axios.post('/api/get-tournament-by-id',{id:this.props.match.params.id}).then(res=>{
        // console.log(res);
            this.setState({
                is_display: true,
                // tournaments:res.data.tourn
                title:res.data.tournament.title,
                
                // tournament_id:res.data.title
                
               
            })
        })
        Axios.get('/api/get_tournaments').then(res=>{
            // console.log(res);
                this.setState({
                    is_display: true,
                    tournaments:res.data.tournaments,
                    
                    
                   
                })
            })
       
    }
    image(e){
        this.setState({
            image:e.target.value
        })
    }

    handleFileChange(e){
        if (e.target.files) {
            const files = Array.from(e.target.files);

            const promises = files.map(file => {
                return (new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.addEventListener('load', (ev) => {
                        resolve(ev.target.result);
                    });
                    reader.addEventListener('error', reject);
                    reader.readAsDataURL(file);
                }))
            });
            Promise.all(promises).then(images => {
                this.setState({
                    image: images[0],
                    binary_img: images
                })
            }, error => { console.error(error); });
        }
    }
    
    Title(e) {       
        this.setState({ 
          title:e.target.value
        })
     }

     Create(e){
        e.preventDefault();

        let senddata = {
            title: this.state.title,
            image: this.state.image
        }
        
        console.log(senddata);
            Axios.post('/api/update_brackets',this.state).then(res=>{
               
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
                        this.props.history.push('/adminpanel/brackets-list');
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
    render() {
        return (
            
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Edit Brackets</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5 pb-5 pt-3">
                    
                   <div className="row col-md-12">
                   <select  className="form-control "style={{width:'950px'}}  value={this.state.title} onChange={this.Title.bind(this)}>
                             <option value="">{this.state.title}</option>
                             {
                            this.state.tournaments.map((data,index)=>{
                                return(
                            <option value={data.id}>{data.title}</option> 
                           
                                   )
                             })
                          }                            
                          </select>
                        <div className="form-group input_div">
                            <label className="input_label" for="exampleInputEmail1">Bracket Image</label>
                            <div className="card p-1">
                                <img className="img_thumb" src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                                <input  onChange={this.handleFileChange.bind(this)} type="file" className="m-2"></input>
                            </div>
                        </div>
                   </div>
                   <div className="ml-3">                    
                    <button onClick={this.Create.bind(this)} className="btn btn-success">
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
            
        );
    }
}

export default Edit;