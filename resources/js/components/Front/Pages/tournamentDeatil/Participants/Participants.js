import React, { Component } from 'react'

class Participants extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 matches-over">
                            <h3>PLAYERS (52)</h3>
                            <div className="row">
                                <div className="col-md-4">
                                <bf-player-card><div className="player-card-container">
                                    <div className="player-in-game-name">
                                        <div className="avatar-container">
                                        <bf-avatar><div className="wrapper sticker-boarder">
                                            <p className="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase"> <img src="/images/common/match-list-team-img.png" /> </p>
                                            </div>
                                        </bf-avatar>
                                        </div>
                                        <div className="player-label">
                                        <h1>MarchainzN#1210</h1>
                                        </div>
                                    </div>
                                    <div className="player-stat">
                                        <div className="player-stat-label">
                                        <bf-class-pick-displayer>
                                        </bf-class-pick-displayer>
                                        </div>
                                    </div>
                                    </div>
                                </bf-player-card>
                                </div>
                                <div className="col-md-4">
                                <bf-player-card><div className="player-card-container">
                                    <div className="player-in-game-name">
                                        <div className="avatar-container">
                                        <bf-avatar><div className="wrapper sticker-boarder">
                                            <p className="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase"> f </p>
                                            </div>
                                        </bf-avatar>
                                        </div>
                                        <div className="player-label">
                                        <h1>MarchainzN#1210</h1>
                                        </div>
                                    </div>
                                    <div className="player-stat">
                                        <div className="player-stat-label">
                                        <bf-class-pick-displayer>
                                        </bf-class-pick-displayer>
                                        </div>
                                    </div>
                                    </div>
                                </bf-player-card>
                                </div>
                                <div className="col-md-4">
                                <bf-player-card><div className="player-card-container">
                                    <div className="player-in-game-name">
                                        <div className="avatar-container">
                                        <bf-avatar><div className="wrapper sticker-boarder">
                                            <p className="non-avatar user-char-text absolute-stretch text-14px text-gray font-300 text-uppercase"><img src="/images/common/match-list-team-img1.png" /> </p>
                                            </div>
                                        </bf-avatar>
                                        </div>
                                        <div className="player-label">
                                        <h1>MarchainzN#1210</h1>
                                        </div>
                                    </div>
                                    <div className="player-stat">
                                        <div className="player-stat-label">
                                        <bf-class-pick-displayer>
                                        </bf-class-pick-displayer>
                                        </div>
                                    </div>
                                    </div>
                                </bf-player-card>
                                </div>
                            </div>
                            </div>
            </div>
        )
    }
}
export default Participants;
