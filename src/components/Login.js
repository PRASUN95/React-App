import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            UserId: '',
            Password: '',
            isLoggedin: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit = (e) => {
        if(this.state.UserId === '123' && this.state.Password === '123')
        this.props.history.push("/dashboard")
        e.preventDefault();
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <div className="Login container">
                <form className="form-horizontal">
                    <div className="form-group row">
                        <label htmlFor="UserId" className="col-sm-2">UserId:</label>
                        <input type="UserId" name="UserId" className="form-control col-sm-6" id="UserId" onChange={this.handleChange} />
                    </div>
                    <div className="form-group row">
                        <label htmlFor="pwd" className="col-sm-2">Password:</label>
                        <input type="password" name="Password" className="form-control col-sm-6" id="pwd" onChange={this.handleChange} />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login
