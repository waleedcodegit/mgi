import React, { Component } from 'react'

class CreateTeam extends Component {
    render() {
        return (
            <div>
                <section className="image-header">
                </section>
                <section className="login-sec">
                    <div className="container-form">
                    <div className="row">
                        <div className="customer-info">
                        <div className="col-md-12">
                            <h4>Create Team</h4>
                            <form>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Title/Team Name <i>*</i></span>
                                    <input type="text" name="primary game" className="form-input" />
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Team Type <i>*</i></span>
                                    <select className="basic">
                                        <option>Select</option>
                                        <option>Public</option>
                                        <option>Private</option>
                                    </select>
                                    </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="item">
                                    <label>
                                    <span>Add Team Logo/Icon <i>*</i></span>
                                    <input type="file" id="img" name="img" />
                                    </label>
                                </div>
                                </div>
                            </div>
                            </form>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="long-btn">
                                <a href="#">Create</a>
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

export default CreateTeam;
