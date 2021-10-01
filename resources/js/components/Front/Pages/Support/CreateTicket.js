import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';

class CreateTicket extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            description: '',
            image: ''
        }

        if(!this.props.user.is_login) {
            window.open('/login', '_self');
        }
    }
    getTitle(e) {
        this.setState({
            title:e.target.value
        })
    }
    getDescription(e) {
        this.setState({
            description:e.target.value
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
        e.preventDefault();
        let senddata = {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image,
            user_id: this.props.user.data.id
        }
        
        Axios.post('/api/create_ticket',senddata).then(res=>{
            console.log(res);
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
                this.props.history.push('/support'); 
            
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
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container-form">
                        <div className="row">
                            <div className="customer-info">
                                <div className="col-md-12">
                                    <h4>Create Ticket</h4>
                                    <form>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <div className="item">
                                                <label>
                                                <span>Title/Team Name <i>*</i></span>
                                                <input type="text" name="primary game" className="form-input" onChange={this.getTitle.bind(this)} />
                                                </label>
                                            </div>
                                            </div>
                                            <div className="col-md-12">
                                            <div className="item">
                                                <label>
                                                <span>Your comment</span>
                                                <textarea className="cmt-text" onChange={this.getDescription.bind(this)} />
                                                </label>
                                            </div>
                                            </div>
                                            <div className="col-md-12">
                                            <div class="calnder-img ad-image-new">
				                                <img src="/images/common/placeholder.jpg" class="img-up-thumb2"  />
				                            </div>
                                            <div className="item brse-img">
                                                <label>
                                                <span>Add image <i>*</i></span>
                                                <input type="file" id="image" name="image" onChange={this.getImage.bind(this)} className="clg-img" />
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="long-btn">
                                                <a onClick={this.create.bind(this)}>Create Ticket</a>
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

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps) (CreateTicket);
