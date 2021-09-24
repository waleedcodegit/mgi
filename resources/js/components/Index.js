import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Route , BrowserRouter , Switch} from 'react-router-dom';

import FrontIndex from '../components/Front/Index/Index';
import TournamentDetail from '../components/Front/Pages/tournamentDeatil/Index';

import AdminPanel from './Admin/Index';
import AdminLogin from './Admin/Auth/Login';
import {Provider} from 'react-redux';
import Reducer from './Redux/Reducer';
import {createStore} from 'redux';

const store= createStore(Reducer);
class Index extends Component {
    constructor(props){
        super(props);
        this.state = {
            paths: [
                '/tournament',
                '/tournamentDetail/:id',
                '/store',
                '/articles',
                '/videos',
                '/signup',
                '/subscription',
                '/login',
                '/enrollment/:id',
                '/profile',
                '/privacy',
                '/term-and-condition',
                '/settings',
                '/create-team',
                '/join-team',
                '/team-detail/:id',
                '/artical-detail/:id',
                '/video-detail/:id',
                '/product-detail/:id',
                '/cart',
                '/check-out',
                '/support',
                '/create-ticket',
                '/ticket-detail/:id'
            ]
        }
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={FrontIndex}></Route>
                        <Route  path='/tournament' component={FrontIndex}></Route>
                        <Route  path='/tournamentDetail/:id' component={FrontIndex}></Route>                        
                        <Route  path='/store' component={FrontIndex}></Route>
                        <Route  path='/articles' component={FrontIndex}></Route>
                        <Route  path='/videos' component={FrontIndex}></Route>
                        <Route  path='/login' component={FrontIndex}></Route>
                        <Route  path='/signup' component={FrontIndex}></Route>
                        <Route  path='/subscription' component={FrontIndex}></Route>
                        <Route  path='/enrollment/:id' component={FrontIndex}></Route>
                        <Route  path='/profile' component={FrontIndex}></Route>
                        <Route  path='/privacy' component={FrontIndex}></Route>
                        <Route  path='/term-and-condition' component={FrontIndex}></Route>
                        <Route  path='/settings' component={FrontIndex}></Route>
                        <Route  path='/create-team' component={FrontIndex}></Route>
                        <Route  path='/join-team' component={FrontIndex}></Route>
                        <Route  path='/team-detail/:id' component={FrontIndex}></Route>
                        <Route  path='/artical-detail/:id' component={FrontIndex}></Route>
                        <Route  path='/video-detail/:id' component={FrontIndex}></Route>
                        <Route  path='/product-detail/:id' component={FrontIndex}></Route>
                        <Route  path='/cart' component={FrontIndex}></Route>
                        <Route  path='/check-out' component={FrontIndex}></Route>
                        <Route  path='/support' component={FrontIndex}></Route>
                        <Route  path='/create-ticket' component={FrontIndex}></Route>
                        <Route  path='/ticket-detail/:id' component={FrontIndex}></Route>
                        
                        {/* {
                            this.state.paths.map((data, index)=>{
                                return(
                                    <Route key={index} path={data} component={FrontIndex}></Route> 
                                )
                            })
                        } */}
                        <Route  path="/adminpanel" component={AdminPanel}></Route>
                        <Route  path="/admin-login" component={AdminLogin}></Route>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default Index;
if (document.getElementById('root')) {
    ReactDOM.render(<Provider store={store}> <Index /></Provider>, document.getElementById('root'));
}