import Axios from 'axios';
import React, { Component } from 'react';
import {img_base} from '../../Configs/baseUrls';
import Swal from 'sweetalert2'
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import { connect } from 'react-redux';

class EditTounament extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
            name:'',
            type:'',
            price:'',
            title:'',
            description:'',
            start_date:'',
            end_date:'',
            start_time:'',
            contact_details:'',
            rules:'',
            critical_rules:'',
            prizez:'',
            mode:'',
            registration_limit:'',
            registration_status:'',
            region:'',
            platforms:'',
            header_image : '',
            binary_img:'',
            country:[],
            tournaments:[],
            is_display:false,
            fields: [],
            status:'draft',
            game_id:window.localStorage.getItem('game_id'),
            id:window.localStorage.getItem('tournament_id'),
           
           
            error_string:'',
            id:this.props.match.params.id,
           
            loading:false
        }
    }
    async componentDidMount(){
   
               const edit_tournament_id = this.props.match.params.id;
                console.log(edit_tournament_id);
           const res = await Axios.get(`/api/edit_tournament/ ${edit_tournament_id}`); 
                      
        {                             
            if(res.data.status === 200)   
            // console.log(JSON.parse(res.data.data.country));
            console.log(res.data.data.status);                    
          {
            
                    this.setState(                          
               {  
                
                  title: res.data.data.title,
                   description: res.data.data.description,
                   start_date: res.data.data.start_date,
                   end_date:res.data.data.end_date,
                   start_time:res.data.data.start_time,
                   contact_details: res.data.data.contact_details,
                   rules: res.data.data.rules,
                   critical_rules: res.data.data.critical_rules,
                   prizez: res.data.data.prizez,
                   mode: res.data.data.mode,
                   registration_limit: res.data.data.registration_limit,
                //    registration_status: res.data.data.registration_status,
                   header_image: res.data.data.header_image,
                   region: res.data.data.region,
                   platforms: res.data.data.platforms,
                   country: JSON.parse(res.data.data.country),
                   status: res.data.data.status,
                   fields: res.data.data.tournament_field,
                    });      
            }
        }

    

}


selectCountry (val) {
    let temp_arr =  this.state.country;
    let found = false;
    if(temp_arr.length > 0){
        temp_arr.map(function(item, i){
            if(item.name == val){
                found = true;
            }
          })
    }
    if(!found){
        temp_arr.push({
            name:val
        });
        console.log(temp_arr);
        this.setState({ 
            country: temp_arr
        });
    }
   
  } 
  remove_country(val){
    let temp_arr =  this.state.country;
    temp_arr = temp_arr.filter(data => (data.name != val));
    this.setState({ 
        country: temp_arr
     });
  }


Title(e)
{
   this.setState
   ({
    title:e.target.value
   })
}
Description(value)
{
   
   this.setState
   ({
    description:value
   })
}
Start_date(e)
{       
   this.setState
   ({
    start_date:e.target.value
   })
}
End_date(e)
{
   this.setState
   ({
    end_date:e.target.value
   })
}
Start_time(e)
{       
   this.setState
   ({
    start_time:e.target.value
   })
}
Contact_details(value)
{       
this.setState
   ({
    contact_details:value
   })
}
Rules(value)
{       
   this.setState
   ({
    rules:value
   })
}
Critical_rules(value)
{       
   this.setState
   ({
    critical_rules:value
   })
}
Prizez(value)
{   
   this.setState
   ({
    prizez:value
   })
}
Mode(e)
{        
   this.setState
   ({
    mode:e.target.value
   })
}
Registration_limit(e)
{
   this.setState
   ({
    registration_limit:e.target.value
   })
}

Region(e)
{    
   this.setState
   ({
    region:e.target.value
   })
}
Platforms(e)
{    
   this.setState
   ({
    platforms:e.target.value
   })
}
Country(e)
{    
   this.setState
   ({
    country:e.target.value
   })
}
Header_image(e)
    {
        if (e.target.files)
         {
            const files = Array.from(e.target.files);

            const promises = files.map(file => 
                {
                return (new Promise((resolve, reject) => 
                {
                  const reader = new FileReader();
                   reader.addEventListener('load', (ev) =>
                    {
                        resolve(ev.target.result);
                    });
                    reader.addEventListener('error', reject);
                    reader.readAsDataURL(file);
                }))
            });
           
            Promise.all(promises).then(images => 
                {
                this.setState
                ({
                    header_image: images[0],
                    binary_img: images
                })
            }, 
            error =>
             {
                  console.error(error); 
                });          
        }
    }
Update(e)
    {
        e.preventDefault();
        this.setState
        ({
            loading:true
        })
          Axios.post('/api/update_tournament',this.state).then(res=>
            {
               this.setState
               ({
                  loading:false
                })
                if(res.data.status == 200)
                {
                  Swal.fire
                  ({
                      icon: 'success',
                      title: res.data.msg,
                      showConfirmButton: false,
                      timer: 1500
                    })
                    
            }
            else
            {
                Swal.fire
                ({
                    icon: 'warning',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    // field
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
            // Axios.post('/api/update-tournament-status',this.state).then(res=>{
            //     if(res.data.status == 200){
            //         Swal.fire({
            //             icon: 'success',
            //             title: res.data.msg,
            //             showConfirmButton: false,
            //             timer: 1500
            //             })
            //             window.open('tournament-list', '_self')
            //     }else{
            //         Swal.fire({
            //             icon: 'warning',
            //             title: res.data.msg,
            //             showConfirmButton: false,
            //             timer: 1500
            //             })
            //     }
            // })
        })
    }
    
    render() {
        const { country, region } = this.state;
        return (
            <div id="addproducts" className="container" >
                <div className="top_section_title_div">
                    <h2 className="section_title">Edit Tournament</h2>
                </div>
                <div  className="container">
                    <div className="card content_card_div mt-4 mb-5">
                       
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Title</label>
                                <input onChange=""  type="text" class="form-control " style={{width:'950px'}} id="Inputtitle" value={this.state.title} onChange={this.Title.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Description</label>
                                <ReactQuill  type="text" class="form-control " style={{width:'950px'}} id="Inputdescription" value={this.state.description} onChange={this.Description.bind(this)}  />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Start Date</label>
                                <input onChange=""  type="date" class="form-control " style={{width:'950px'}} id="Inputstart_date" value={this.state.start_date} onChange={this.Start_date.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">End Date</label>
                                <input onChange=""  type="date" class="form-control " style={{width:'950px'}} id="Inputend_date" value={this.state.end_date} onChange={this.End_date.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Start Time</label>
                                <input onChange=""  type="time" class="form-control " style={{width:'950px'}} id="Inputstart_time" value={this.state.start_time} onChange={this.Start_time.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Contact Details</label>
                                <ReactQuill onChange=""  type="text" class="form-control " style={{width:'950px'}} id="Inputcontact_details" value={this.state.contact_details} onChange={this.Contact_details.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Rules</label>
                                <ReactQuill onChange=""  type="text" class="form-control " style={{width:'950px'}} id="Inputrules" value={this.state.rules} onChange={this.Rules.bind(this)}/>
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Critical Rules</label>
                                <ReactQuill onChange=""  type="text" class="form-control " style={{width:'950px'}} id="Inputcritical_rules" value={this.state.critical_rules} onChange={this.Critical_rules.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Price</label>
                                <ReactQuill onChange=""  type="text" class="form-control " style={{width:'950px'}} id="Inputprizez" value={this.state.prizez} onChange={this.Prizez.bind(this)} />
                            </div>
                            
                            <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Modes</label>
                        <select className="form-control "  style={{width:'950px'}} value={this.state.mode} onChange={this.Mode.bind(this)}>
                            <option value="">Select One</option>
                            <option value="1 vs 1">1 vs 1</option>  
                            <option value="team vs team">Team vs Team</option>
                            <option value="duo vs duo">Duo vs Duo</option>  

                        </select>
                    </div>
                   
                   
               </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Registration Limit</label>
                                <input onChange=""  type="text" class="form-control " style={{width:'950px'}} id="Inputregistration_limit" value={this.state.registration_limit} onChange={this.Registration_limit.bind(this)} />
                            </div>
                           
                            
                            <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Regions</label>
                        <select  className="form-control " style={{width:'950px'}} value={this.state.region} onChange={this.Region.bind(this)}>
                        <option value="">Select One</option>    
                            <option value="Asia">Asia</option>  
                            <option value="Europe">Europe</option>
                            <option value="Latin America">Latin America</option> 
                            <option value="North America">North America</option> 
                            <option value="Oceania">Oceania</option> 
                            <option value="Middle East">Middle East</option> 
                            <option value="Africa">Africa</option>

                        </select>
                        
                     </div>
                       
                   
                   
               </div> 
                            
                            <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Platforms</label>
                        <select  className="form-control " value={this.state.platforms} onChange={this.Platforms.bind(this)}>
                        <option value="">Select One</option>
                            <option value="Xbox One">Xbox One</option>  
                            <option value="PlayStation 4">PlayStation 4</option>
                            <option value="PC">PC</option>  
                            <option value="Nitento Switch">Nitento Switch</option> 

                        </select>
                    </div>
                            <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Country</label>
                        <CountryDropdown
                        value={country} style={{width:'950px'}} className="form-control "
                        onChange={(val) => this.selectCountry(val)} />
                    </div>
                    <div class="form-group input_div col-md-12">
                       
                            <label className="input_label" for="exampleInputEmail1">List of Countries Selected</label>
                            <div className="col-md-12">
                                                           
                            <ul className="input_label" >  {this.state.country.map((data,index)=>  <li style={{marginLeft: '20px'}}>{data.name} <i  onClick={this.remove_country.bind(this, data.name)}  className="fas fa-window-close"></i></li>)}</ul>
                            
                           <ul className="input_label" > </ul>
                            </div>
                    </div>               
               </div>  
               <div className="container">
            <div className="top_section_title_div">
                <h2 className="section_title">Tournament Status</h2>
            </div>
            
            <div className="container content_card_div mt-4 mb-5 pb-5 pt-3">
               <div className="row col-md-12">
                    <div class="form-group input_div col-md-12">
                        <label className="input_label" for="exampleInputEmail1">Status</label>
                        <select  style={{width:'920px'}} value={this.state.status}className="form-control " onChange={this.status.bind(this)}>
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
                                            <th>Sr</th>
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
                                                        
                                                        <td>{index+1}</td>
                                                        <td><input onChange={(e)=>{this.onchangefield(e.target.value,index)}} value={data.name} className="form-control" type=""></input></td>
                                                        <td>
                                                        <select value={data.type} onChange={(e)=>{this.onchangeprice(e.target.value,index)}} className="form-control ">
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
                            <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="input_label">Image</label>
                                           <br></br> <img className="img_thumb" style={{width:'300px', height:'200px'}} src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.header_image}></img>
                                           <br></br>
                                        <input   type="file" className="m-2" onChange={this.Header_image.bind(this)}></input>
                                            
                                        </div>
                        </div>                     
              
               {
                   this.state.error_string != '' ?
                    <p className="text-danger mt-3 ml-3">{this.state.error_string}</p>
                    :null
               }
            </div>
        </div>
                         
                        {
                            this.state.error_string != ''?
                            <p className="text-danger  ml-3">{this.state.error_string}</p>
                            :null
                        }
                        <div className="submit_btn">
                            <button onClick={this.Update.bind(this)} style={{width:'150px'}} className="btn btn-success ml-3 mb-5">
                                {
                                    this.state.loading ?
                                    <div id="displayspinner" >
                                    <div className="spinner-border small_loader  ml-2 spinner_format"  role="status">
                                      <span className="sr-only">Loading...</span>
                                    </div>
                                  </div>
                                  :<>Update Tournament</>
                                }
                                </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditTounament;