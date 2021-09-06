import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';
import Swal from 'sweetalert2';
import {  img_base } from '../../../Configs/baseUrls';
class Setting extends Component {
    constructor(props) {
        super(props);
        this.state={
         
            first_name: '',
            last_name: '',
            primary_game: '',
            game_id: '',
            dob: '',
            phone: '',
            country: '',
            gender : '',
            city : '', 
            address : '', 
            postcode : '', 
            image : '',
            binary_img:'',
            email : '',
            password: '',
            id:this.props.user.data.id,
            loading:false
        }
    }

    componentDidMount(){

        this.setState({
            email: this.props.user.data.email,
               first_name: this.props.user.data.first_name,
               last_name: this.props.user.data.last_name,
               primary_game: this.props.user.data.primary_game,
               game_id: this.props.user.data.game_id,
               
               dob: this.props.user.data.dob,
               phone: this.props.user.data.phone,
               country: this.props.user.data.country,
               gender: this.props.user.data.gender,
               city: this.props.user.data.city,
               address: this.props.user.data.address,
               postcode: this.props.user.data.postcode,
               image: this.props.user.data.image

                
        });
    }
    firstName(e){
        this.setState({
            first_name:e.target.value
        })
    }
    lastName(e){
        
        this.setState({
            last_name:e.target.value
        })
    }
    primaryGame(e){
        
        this.setState({
            primary_game:e.target.value
        })
    }
    game_Id(e){
        
        this.setState({
            game_id:e.target.value
        })
    }
    Dob(e){
        
        this.setState({
            dob:e.target.value
        })
    }
    Phone(e){
        
        this.setState({
            phone:e.target.value
        })
    }
    Country(e){
        
        this.setState({
            country:e.target.value
        })
    }
    Gender(e){
        
        this.setState({
            gender:e.target.value
        })
    }
    City(e){
        
        this.setState({
            city:e.target.value
        })
    }
    Address(e){
        
        this.setState({
            address:e.target.value
        })
    }
    Postcode(e){
        
        this.setState({
            postcode:e.target.value
        })
    }
    Email(e){
        
        this.setState({
            email:e.target.value
        })
    }

    Image(e){
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
  
    update(e){
        e.preventDefault();
        this.setState({
            loading:true
        })
        Axios.post('/api/update_user_info',this.state).then(res=>{
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
                    // this.props.history.push('/adminpanel/banners-list');
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
                <section className="subscption-head">
                    <div className="container-plan">
                    <div className="row">
                        <div className="customer-info">
                        <div className="subscption-sec2">
                            <div className="content">
                            <div className="container">
                                <div className="row row-offcanvas row-offcanvas-left">
                                <div className="col-md-12 pr-detail">
                                    <h4>Account Settings
                                    </h4>
                                </div>
                                <div className="col-md-12 tab-line">
                                    <ul className="tab-filters2" role="tablist">
                                    <li className="active"><a href="#account" role="tab" data-toggle="tab">Account</a></li>
                                    <li><a href="#connections" role="tab" data-toggle="tab">Connections</a></li>
                                    <li><a href="#privacy" role="tab" data-toggle="tab">Privacy</a></li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="account" role="tabpanel">
                                    <div className="col-md-12 col-sm-12">
                                        <section className="css-g0mr221 css-19m9brh">
                                        <div className="css-g0mr222 css-gx84ul">
                                        {/* <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Email</label>
                                            <input value="" className="css-1l4244b0 css-13owws" ></input>
                                        </div> */}
                                        {/* <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Password</label>
                                            <input value="" className="css-1l4244b0 css-13owws" ></input>
                                        </div> */}
                                            <a className="css-1khann70 css-1khann72 css-1jau80d">
                                            Change email</a></div>
                                        <div className="css-g0mr222 css-gx84ul">                  
                                            <a className="css-1khann70 css-1khann72 css-1jau80d">Change password</a>
                                        </div>
                                        </section>
                                    </div>
                                    <div className="col-md-12 col-sm-12">
                                        <section className="css-g0mr221 css-19m9brh">
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Email</label>
                                            <input value={this.state.email} className="css-1l4244b0 css-13owws"  onChange={this.Email.bind(this)}></input>
                                        </div>
                                      
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">First Name</label>
                                            <input  name="updatedfirst_name" className="css-1l4244b0 css-13owws" value={this.state.first_name} onChange={this.firstName.bind(this)} />
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Last Name</label>
                                            <input type="" name="updatedlast_name" className="css-1l4244b0 css-13owws" value={this.state.last_name} onChange={this.lastName.bind(this)}/>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Primary Game</label>
                                            <input name="updatedprimary_id" className="css-1l4244b0 css-13owws"value={this.state.primary_game} onChange={this.primaryGame.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Game Id</label>
                                            <input type=""name="updatedgame_id" className="css-1l4244b0 css-13owws" value={this.state.game_id} onChange={this.game_Id.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Date of Birth</label>
                                            <input name="updateddob" className="css-1l4244b0 css-13owws" value={this.state.dob} onChange={this.Dob.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Phone</label>
                                            <input name="updatedcountry" className="css-1l4244b0 css-13owws" value={this.state.phone} onChange={this.Phone.bind(this)}></input>
                                        </div>
                                       
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Country</label>
                                            <input name="updatedcountry" className="css-1l4244b0 css-13owws" value={this.state.country} onChange={this.Country.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Gender</label>
                                            <input name="updatedgender" className="css-1l4244b0 css-13owws" value={this.state.gender} onChange={this.Gender.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">City</label>
                                            <input name="updatedgender" className="css-1l4244b0 css-13owws" value={this.state.city} onChange={this.City.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Address</label>
                                            <input name="updatedgender" className="css-1l4244b0 css-13owws" value={this.state.address} onChange={this.Address.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Postcode</label>
                                            <input name="updatedgender" className="css-1l4244b0 css-13owws" value={this.state.postcode} onChange={this.Postcode.bind(this)}></input>
                                        </div>
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <label className="css-g0mr223 css-wjd590">Image</label>
                                           <br></br> <img className="img_thumb" style={{width:'300px', height:'200px'}} src={this.state.binary_img !=''? this.state.binary_img : img_base+this.state.image}></img>
                                        <input   type="file" className="m-2" onChange={this.Image.bind(this)}></input>
                                            
                                        </div>
                                        
                                        <div className="css-g0mr224 css-1ex6nkr">
                                            <p className="css-g0mr223 css-wjd590">Mailing Preferences</p><label>
                                            <input name="emailConsented" type="checkbox" />
                                            <span className="css-g0mr227 css-ay9r4x">I want to receive news about cool tournaments and promotional emails.</span></label>
                                        </div>
                                        <button  onClick={this.update.bind(this)} className="css-1khann70 css-1khann71 css-g0mr225 css-zj48px">Save Changes</button>
                                        </section>
                                    </div>
                                    </div>
                                    <div className="tab-pane" id="connections" role="tabpanel">
                                    <div className="col-md-12 col-sm-12 matches-over">
                                        <div className="css-17os0hc0 css-1gk9xr">
                                        <p className="css-17os0hc1 css-5sj7t6">Connecting your game and social media accounts to your Battlefy account is easy. Doing so will allow you to register for tournaments in games you love.</p>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/go-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Google</span>
                                                <span className="css-mly58i5 css-w5ncqx">Shehroz Butt</span></div>
                                            <div className="css-mly58i8 css-1q3t6wo"><a className="css-xhcgag0 css-xhcgag2 css-1vxf80s">Disconnect Google</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-17os0hc3 css-11yvxfc" />
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/facebook-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Facebook</span>
                                                <span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div><div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-8l95nn">Connect Facebook</a></div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/twitter-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Twitter</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-y884u">Connect Twitter</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/apple-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku"><span className="css-mly58i4 css-s569wz">Apple</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-1jdpnbn">Connect Apple</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Battle.net</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-e3qwiw">Connect Battle.net</a>
                                            </div>
                                            </div></div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/vk-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">VK</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-9t5cfw">Connect VK</a>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="css-mly58i0 css-hkffm5">
                                            <div className="css-mly58i1 css-social">
                                            <img src="/images/common/discord-icon.png" />
                                            </div>
                                            <div className="css-mly58i2 css-f3hwkt">
                                            <div className="css-mly58i3 css-1tdyzku">
                                                <span className="css-mly58i4 css-s569wz">Discord</span><span className="css-mly58i6 css-1odskt7">Not Connected</span>
                                            </div>
                                            <div className="css-mly58i8 css-1q3t6wo">
                                                <a className="css-xhcgag0 css-xhcgag3 css-gjgw3o">Connect Discord</a>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="tab-pane" id="privacy" role="tabpanel">
                                    <div className="col-md-12 col-sm-12 matches-over">
                                        <div className="css-1ndc6090 css-1gk9xr">
                                        <p className="css-1ndc6092 css-5sj7t6">Battlefy follows data privacy best practices, like data minimization, meaning we only collect personal data that's necessary to provide you with the best esports experience.</p>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Access your personal data</h4>
                                            <p>You can request a copy of your personal data at any time. To make this request, please send an email to <a href="mailto:support@battlefy.com" target="_top" className="css-lixh870 css-1jsji4n">support@battlefy.com</a>. Please note it can take up to
                                            30 days to process your request.</p>
                                            <p>Secret: 2ca10aa461e998ae32f46806</p>
                                        </section>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Keep your personal data up-to-date</h4>
                                            <p>If there are any errors with your personal data, you can request to change it. To make this request, please send an email to <a href="mailto:support@battlefy.com" target="_top" className="css-lixh870 css-1jsji4n">support@battlefy.com</a>. Please note
                                            it can take up to 30 days to process your request.</p>
                                        </section>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Remove your personal data</h4>
                                            <p>To remove your personal data, you can deactivate your account. After 14 days, your account and all personal data will be removed from our systems and no recovery is possible.</p>
                                            <p>If you change your mind during the 14 day grace period, please email <a href="mailto:support@battlefy.com" target="_top" className="css-lixh870 css-1jsji4n">support@battlefy.com</a> to reactivate your account.</p><a className="css-1khann70 css-1ndc6093 css-kzimlr">Deactivate Account</a></section>
                                        <section className="css-1ndc6091 css-kluc5c">
                                            <h4>Do not sell my personal information</h4>
                                            <p>Battlefy primarily collects personal information for the purposes of providing the best esports experiences. As we are a platform that facilitates user generated content, this means any user can be an organizer of a competition and ask for information
                                            to ensure a fair and quality competition. If personal information will be disclosed to third parties for other reasons, it will be opt-in and mentioned in the relevant competition pages.</p>
                                            <p>If you wish to remove your personal data, please follow the instructions in section “Remove your personal data” above.</p>
                                        </section>
                                        </div>
                                    </div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps,null) (Setting);
