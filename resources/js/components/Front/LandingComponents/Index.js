import React, { Component } from 'react';
import Banner from './Banner';
import Sponser from './Sponser';
import News from './News';
import Landing from './Landing';

class Index extends Component {
    render() {
        return (
            <div>
                <Banner></Banner>
                <Sponser></Sponser>
                <News></News>
                <Landing></Landing>
            </div>
        );
    }
}

export default Index;