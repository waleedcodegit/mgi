import React, { Component } from 'react';
import Banner from './banner/Banner';
import Axios from 'axios';
import {img_base} from '../../../Configs/baseUrls';
import {Link} from 'react-router-dom';


class games extends Component {
	constructor(props){
		super(props);
		this.state = {
		  games: [],
		  display_drop_down: false,
		}
	  }
	  componentDidMount(){
		Axios.get('/api/get_games').then(res=>{
			console.log(res);
			this.setState({
				games:res.data.games
			})
		})
	}
	gameTournament(game_id) {
		let senddata = {
		  game_id: game_id
		}
		Axios.post('/api/get_tournament_with_game_id', senddata).then(res=>{
		  console.log(res);
		  this.setState({
			game_tournaments:res.data.tournaments
		  })
		})
	  }
    render() {
        return (  
            <div>
                <section className="image-header">
                    
                </section>
                <Banner></Banner>
				{/* <Banner></Banner> */}
                <div class="tourna-sec">
         <div class="container">
	
	
	<div class="row">
            <div class="col-md-12 col-sm-12">
                <div class="games-list">
				  
				<ul>
                    {
                      this.state.games.map((data,index)=>{
                        return(
                           < Link to={`/tournament/${data.id}`}> <li key={index}><a onClick={this.gameTournament.bind(this,data.id)}><img src={img_base+data.image} /></a></li> </Link>
                            )
                        })
                    }  
                    <li></li>
                  </ul>
				</div>
            </div>
		
			
        </div>
	

          
        
    </div>

</div>
</div>
        )
    }
}

export default games;
