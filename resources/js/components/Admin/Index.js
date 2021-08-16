import Axios from 'axios';
import React, { Component } from 'react';
import App from '../Admin/App';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display:false
        };
    }
    componentDidMount(){
     
        const senderdata = {
            token: window.localStorage.getItem('sop256skikl')
          }
          Axios.post('/api/admin_check_auth', senderdata).then(res => {
            console.log(res);
            if (res.data.status == 200) {
                this.setState({
                    display:true
                })
            } 
          })
    } 
    render() { 
        return (
            <div>
            <div className={this.state.display ? '':'opacityZero'} >
                <App {...this.props}></App>
            </div>
            </div>
        );
    }
}

export default Index;