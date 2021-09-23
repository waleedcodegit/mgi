import React, { Component } from 'react';
import Axios from 'axios';
import { img_base } from '../../../Configs/baseUrls';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom'

class TicketDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
            description: '',
            image: ''

        }
    }
    componentDidMount() {
        Axios.post('/api/get_support_comment',{id:this.props.match.params.id}).then(res=>{
            this.setState({
                details: res.data.data,
            })
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
            description: this.state.description,
            image: this.state.image,
            user_id: this.props.user.data.id,
            support_id: this.props.match.params.id
        }
        
        Axios.post('/api/create_comment_in_detail',senddata).then(res=>{
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    }) 
                    
                    window.location.reload();
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
    
    UpdateTicketStatus(id){
    let senderdata={
       id:id
         }
      Axios.post('/api/update_ticketstatus',senderdata).then(res=>{
       this.componentDidMount();
          });
           }
    // UpdateTicketStatus(e){
    //         this.setState({
    //             loading:true
    //         })
            
    //             Axios.post('/api/update_ticketstatus',this.state).then(res=>{
    //                 this.setState({
    //                     loading:false
    //                 })
    //                 if(res.data.status == 200){
    //                     Swal.fire({
    //                         icon: 'success',
    //                         title: res.data.msg,
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                         })
    //                         // window.open('/adminpanel/games-list', '_self');
    //                 }else{
    //                     Swal.fire({
    //                         icon: 'warning',
    //                         title: res.data.msg,
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                         })
    //                 }
    //             })
    //         }
           
        

    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="product-single">
                    <div className="product-tab-wrap">
                        <div className="tab-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="comments-wrap">
                                            <h6>Ticket Detail</h6>
                                            {
                                                this.state.details.map((data,index)=>{
                                                    return (
                                                        <div className="comment-item">
                                                            <div className="avatar">
                                                                {
                                                                    data.user != null ? 
                                                                    <img src={img_base+data.user.image} alt="author-avatar" />
                                                                    :
                                                                    <img alt="image" className="mr-3 rounded-circle" width={70} src="/admin/assets/img/users/user-1.png" />
                                                                }
                                                            </div>
                                                            <div className="info">
                                                                <div className="date">
                                                                    {
                                                                        data.user != null ?
                                                                        <><a>{data.created_at}</a> by <a>{data.user.first_name} {data.user.last_name}</a></>
                                                                        :
                                                                        <><a>{data.created_at}</a> by <a>Admin</a></>
                                                                    }
                                                                    <a className="quote">#</a>
                                                                </div>
                                                                <p>{data.description}</p>
                                                                {
                                                                    data.image ? 
                                                                    <img src={img_base+data.image} />
                                                                    : null
                                                                }
                                                                
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            
                                        </div>	
                                    </div>
                                    <div className="col-md-12">
                                    <div className="leave-comment-wrap">
                                        <h6>Your Answer </h6>	
                                        <form>								
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="item">
                                                        <label>
                                                        <span>Your comment</span>
                                                        <textarea onChange={this.getDescription.bind(this)} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="item">
                                                        <label>
                                                            <span>Add image <i>*</i></span>
                                                            <input type="file" id="img" name="img" onChange={this.getImage.bind(this)} />
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-md-3">
                                                    <button className="comment-submit" onClick={this.create.bind(this)}> Add review</button>
                                                </div>
                                                <div className="col-md-3">
                                                <Link to={`/support`}> <button onClick={this.UpdateTicketStatus.bind(this,this.props.match.params.id)} className="comment-submit"> Close Ticket</button></Link>
                                                </div>
                                                <div className="col-md-6">
                                                </div>
                                            </div>
                                        </form>
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
export default connect(mapStateToProps) (TicketDetail);
