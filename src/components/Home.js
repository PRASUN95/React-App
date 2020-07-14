import React, { Component } from 'react'
import './Home.css'
import Logout from './Logout'
import { Redirect,Link } from 'react-router-dom'
import DynamicSelect from './DynamicSelect'


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        if (localStorage.getItem("LoginSession") !== 'True') {
            return <Redirect to="/" />
        }
        let List = [
            'Water Issue',
            'Bad Internet',
            'Cleaning',
            'Light'
        ]
        return (
            <div>
                <div className="container">
                    <Logout />
                    <div>
                        {new Date().toUTCString()}
                    </div>
                    <div>
                        <Link to = "Posts">posts</Link>
                    </div>
                    <div className="box">
                        <div className="text-header">
                            <span>Add Complaint</span>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="align-left">Zip</label>
                                    <input type="text" id="Zip" className="form-control" placeholder="Zip" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="State" className="align-left">State</label>
                                    <input type="text" id="State" className="form-control" placeholder="State" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="complaint-date" className="align-left">Date</label>
                                    <input type="date" id="complaint-date" className="form-control" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="complain" className="align-left">Complain</label>
                                    <input type="text" id="complain" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="complaint-type" className="align-left">Complaint-type</label>
                                    <DynamicSelect ListData={List} identifier='complaint-type' Class='form-control' />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Add" className="btn btn-default" />
                            </div>
                        </form>
                    </div>
                    <div className="box">
                        <div className="text-header">
                            <span>Delete Complaint</span>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="align-left" htmlFor="Zip">Zip</label>
                                    <input type="text" id="Zip" className="form-control" placeholder="Zip" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="align-left" htmlFor="State" >State</label>
                                    <input type="text" id="State" className="form-control" placeholder="State" />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="align-left" htmlFor="complaint-date">Date</label>
                                    <input type="date" id="complaint-date" className="form-control" />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Delete" className="btn btn-default" />
                            </div>
                        </form>
                    </div>
                    <div className="box">
                        <div className="text-header">
                            <span>Update Complaint</span>
                        </div>
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="align-left" htmlFor="Zip">Zip</label>
                                    <input type="text" id="Zip" className="form-control" placeholder="Zip" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="align-left" htmlFor="State" >State</label>
                                    <input type="text" id="State" className="form-control" placeholder="State" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="align-left" htmlFor="complain">Complain</label>
                                    <input type="text" id="complain" className="form-control" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="align-left" htmlFor="complaint-type">Complaint-type</label>
                                    <DynamicSelect ListData={List} identifier='complaint-type' Class='form-control' />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Update" className="btn btn-default" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
