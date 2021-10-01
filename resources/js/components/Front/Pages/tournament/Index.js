import React, { Component } from 'react';
import Banner from './banner/Banner';
import OnGoingTournament from './ongoingTournaments/Ontournamnet';
import UpCommingTournament from './upCommingTournament/Uptournament';

class Index extends Component {
    render() {
        return (  
            <div>
                <section className="image-header">
                    
                </section>
                <Banner></Banner>
                <div className="tourna-sec">
                    <div className="container">
                        <OnGoingTournament></OnGoingTournament>
                        <UpCommingTournament></UpCommingTournament>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
