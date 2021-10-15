import React, { Component } from 'react';
import Banner from './banner/Banner';
import OnGoingTournament from './ongoingTournaments/Ontournamnet';
import UpCommingTournament from './upCommingTournament/Uptournament';
import {img_base} from '../../../Configs/baseUrls';

class Index extends Component {
    render() {
        return (  
            <div>
                <section className="image-header">
                    
                </section>
                {/* <Banner></Banner> */}
                <div className="tourna-sec">
                    <div className="container">
                        <OnGoingTournament {...this.props}></OnGoingTournament>
                        {/* <UpCommingTournament {...this.props}></UpCommingTournament> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Index;
