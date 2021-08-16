import React, { Component } from 'react'

class Media extends Component {
    render() {
        return (
            <div>
                <div className="col-md-12 col-sm-12 matches-over">
                            <h3>Tournament Streams</h3>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="ifram-wrapper">
                                    <iframe width={550} height={400} src="https://www.youtube.com/embed/gJ6APKIjFQY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="frame-top" />
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="ifram-wrapper">
                                    <iframe width={550} height={400} src="https://www.youtube.com/embed/ND4glr-kBac" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="frame-top" />
                                </div>
                                </div>
                            </div>
                            </div>
            </div>
        )
    }
}
export default Media;
