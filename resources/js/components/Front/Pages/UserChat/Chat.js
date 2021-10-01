import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state={
            chats:[],
            messages:[],
            all_messages:[],
            active_chat:0,
            user_id:this.props.user.uid,
            newmessage:'',
            chat_user_id:'',
            render_messages:true,
            chat_intiator:0,
            messages:[],
            no_messages:true,
            chat:{first_name:'',last_name:''},
        }
    }
    componentWillMount(){
      setInterval(() => {
        Axios.post('/api/get_all_user_chats',{user_id:this.props.user.data.id}).then(res=>{
            console.log(res.data[0]);
            this.setState({
                chats:res.data,
                chat:this.state.active_chat == 0 ? res.data[0] : this.state.chat,
                active_chat: this.state.active_chat == 0 ? res.data[0].id : this.state.active_chat
            })
            
            if(res.data.length > 0){
                Axios.post('/api/get_user_chat_messages',{chat_id:this.state.active_chat == 0 ? res.data[0].id : this.state.active_chat}).then(res=>{
                    this.set_scroll();
                   if(res.data.status == 200){
                    if(this.state.messages.length > 0){
                        if(this.state.messages[this.state.messages.length-1].id != res.data.messages[res.data.messages.length - 1].id 
                            && 
                            this.state.messages[this.state.messages.length-1].sender != res.data.messages[res.data.messages.length - 1].sender 
                            ){    
                        }
                    }
                    this.setState({
                        messages:res.data.messages,
                        no_messages:false,
                    })

                   }else{
                    this.setState({
                        no_messages:true
                    })
                   }
                })
            }
        })
        this.set_scroll();
      }, 5000);
    }
    set_scroll(){
        var d = $('#messages_div');
        d.scrollTop(d.prop("scrollHeight"));
    }
    set_res(data){
        this.setState({
            chats:data.chats,
            all_messages:data.messages
        })
        this.filter_chat_messages();
    }
    filter_chat_messages(){
        if(this.state.active_chat != 0){
            this.state.all_messages.map((msg,index)=>{
                if(this.state.active_chat == msg[0].chat_id){
                    this.setState({
                        messages:msg
                    },function(){
                        this.set_scroll();
                    })
                }
             })
        }else{
            this.setState({
                active_chat:this.state.chats[0].id,
                chat_user_id:this.state.chats[0].chat_user_id,
                chat_intiator:this.state.chats[0].user_id
            },function(){
                this.state.all_messages.map((msg,index)=>{
                   if(this.state.active_chat == msg[0].chat_id){
                       this.setState({
                           messages:msg
                       },function(){
                        this.set_scroll();
                       })
                   }
                })
            })
        }
        
    }
    handle_new_message(e){
        this.setState({
            newmessage:e.target.value
        })
    }
    send_message(e){
        e.preventDefault();
        let array = this.state.messages;
        let newmsg = {
            chat_id: this.state.active_chat,
            message: this.state.newmessage,
            user_id:this.state.uid,
            sender:this.props.user.data.id,
            customer_id:this.state.chat.customer_id
        }
        array.push(newmsg);
        this.setState({
            messages:array
        },function(){
            this.set_scroll();
            this.setState({
                newmessage:''
            })
        })
    
          Axios.post('/api/user_message_sender',newmsg).then(res=>{
            toast.success('message sent');
            Axios.post('/api/get_user_chat_messages',{chat_id:this.state.active_chat}).then(res=>{  
                console.log(res);   
                if(res.data.status == 200){
                 this.setState({
                     messages:res.data.messages,
                     no_messages:false,
                 })
                }else{
                 this.setState({
                     no_messages:true
                 })
                }
             })
        })       
    }
    change_active_chat(chat){

        Axios.post('/api/get_user_chat_messages',{chat_id:chat.id}).then(res=>{
            if(res.data.status == 200){
             this.setState({
                 messages:res.data.messages,
                 active_chat:chat.id,
                 chat:chat
             })
            }else{
             this.setState({
                 no_messages:true,
                 active_chat:chat.id,
                 chat:chat
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
                        <div className>
                            <div className="content">
                            <div className="container">
                                <div className="row row-offcanvas row-offcanvas-left">
                                <div className="col-md-12 pr-detail">
                                    <h4>Messaging
                                    </h4>
                                </div>
                                <div className="messaging">
                                    <div className="inbox_msg col-md-12" style={{padding: "0px"}}>
                                    <div className="inbox_people">
                                        <div className="headind_srch">
                                            <div className="recent_heading">
                                                <h4>Recent</h4>
                                            </div>
                                            <div className="srch_bar">
                                                <div className="stylish-input-group">
                                                {/* <input type="text" className="search-bar" placeholder="Search" />
                                                <span className="input-group-addon">
                                                    <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                                                </span>  */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inbox_chat">
                                        {
                                            this.state.chats.map((chat,index)=>{
                                                return(
                                                    <div onClick={this.change_active_chat.bind(this,chat)} key={index} className={this.state.active_chat == chat.id ? "chat_list active_chat" : "chat_list"}>
                                                        <div className="chat_people">
                                                            <div className="chat_ib">
                                                                {
                                                                    this.props.user.data.id == chat.sender_user.id ? 
                                                                    <h5>{chat.reciver_user.first_name} {chat.reciver_user.last_name}<span className="chat_date"></span></h5>
                                                                    :
                                                                    <h5>{chat.sender_user.first_name} {chat.sender_user.last_name}<span className="chat_date"></span></h5>
                                                                }
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                        </div>
                                    </div>

                            {
                               !this.state.no_messages?
                                    <div class="mesgs">
                                    <div id="messages_div"  className="msg_history">
                                        {
                                            this.state.messages.map((msg,index)=>{
                                                return(
                                                    <div key={index} className={msg.sender == this.props.user.data.id ? "outgoing_msg" : 'incoming_msg '}>
                                                        <div className={msg.sender == this.props.user.data.id ? "hide_img" : 'incoming_msg_img'}> 
                                                        {/* <img src={img_base+msg.profile_image} alt="sunil" /> */}
                                                         </div>
                                                        <div className={msg.sender == this.props.user.data.id ? "sent_msg" : ' received_msg'}>
                                                            <div className={msg.sender == this.props.user.data.id ? "" : 'received_withd_msg'}>
                                                                <p>{msg.message}</p>
                                                                <span className="time_date">{msg.time}    |  {msg.date}</span></div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="type_msg">
                                            <div className="input_msg_write">
                                                <form>
                                                    <input value={this.state.newmessage || " "} onChange={this.handle_new_message.bind(this)} type="text" className="write_msg" placeholder="Type a message" />
                                                    <button onClick={this.send_message.bind(this)} className="msg_send_btn" type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
                                                </form>
                                            </div>
                                    </div>
                                    </div>
                                    :null
                                }

                            
                            
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

export default connect(mapStateToProps,null) (Chat);
