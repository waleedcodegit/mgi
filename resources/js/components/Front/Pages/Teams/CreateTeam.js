import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import Swal from 'sweetalert2';

class CreateTeam extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:'',
            team_type:'',
            image: '',
        }
    }
    teamName(e) {
        this.setState({
            title:e.target.value
        })
    }
    teamType(e) {
        this.setState({
            team_type:e.target.value
        })
    }
    getImage(e) {
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
            let img_arr = [];
            Promise.all(promises).then(images => {
                this.setState({
                    image: images[0]
                })
            }, error => { console.error(error); });
           
        }
    }

    create(e) {
        let senddata = {
            title: this.state.title,
            type: this.state.team_type,
            image: this.state.image,
            user_id: this.props.user.data.id
        }
        
        Axios.post('/api/create_team',senddata).then(res=>{
            console.log(res);
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
                this.props.history.push('profile'); 
            
                }else{
                    Swal.fire({
                        icon: 'warning',
                        title: res.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
        })
        // console.log(senddata);
    }
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container-form">
                    <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Create Team</h4>
                            <form>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Title/Team Name <i>*</i></span>
                                    <input type="text" name="primary game" className="form-input" onChange={this.teamName.bind(this)} />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Team Type <i>*</i></span>
                                    <select className="form-input" onChange={this.teamType.bind(this)}>
                                        <option>Select</option>
                                        <option>Public</option>
                                        <option>Private</option>
                                    </select>
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Add Team Logo/Icon</span>
                                    <input type="file" id="img" name="img" onChange={this.getImage.bind(this)} />
                                    </label>
                                </div>
                                </div>
                            </div>
                            </form>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="long-btn">
                                    <a onClick={this.create.bind(this)}>Create</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section>
            </div>

        )
    }
}
const mapStateToProps=(state)=>{
    return{
        user:state.user
    }
}
export default connect(mapStateToProps,null) (CreateTeam);
