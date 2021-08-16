import React, { Component } from 'react'

class JoinTeam extends Component {
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container">
                    <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Join Team</h4>
                            <div className="search-field">
                            <form>
                                <div className="wrap">
                                <input type="text" defaultValue="Enter name to search" />
                                <button><i className="fa fa-search" aria-hidden="true" /></button>
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="overflow-scroll">
                            <table>
                                <tbody><tr>
                                    <th>Season</th>
                                    <th className="club">Club</th>
                                    <th>Games</th>
                                    <th>Wins</th>
                                    <th>Loses</th>
                                </tr>
                                <tr>
                                    <td>2016/2017</td>
                                    <td className="club">
                                    <a href="team-detail.html">
                                        <span className="team"><img src="images/common/team-logo2.png" width={30} height={30} alt="trophy" /></span> <span style={{margin: 'auto'}}>Internacional</span>
                                    </a>
                                    </td>
                                    <td>27</td>
                                    <td><span>7</span></td>
                                    <td><span>3</span></td>
                                </tr>
                                <tr>
                                    <td>2016/2017</td>
                                    <td className="club">
                                    <a href="team-detail.html">
                                        <span className="team"><img src="images/soccer/team-logo2.png" width={30} height={30} alt="trophy" /></span><span style={{margin: 'auto'}}> Internacional </span>
                                    </a>
                                    </td>
                                    <td>27</td>
                                    <td><span>7</span></td>
                                    <td><span>3</span></td>
                                </tr>
                                </tbody></table>
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

export default JoinTeam;
