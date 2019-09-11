import React, { Component } from 'react'
import axios from 'axios'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '', password: ''
        }
    }
    onSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        let bodydata = {
            'username': username,
            'password': password
        }
        console.log(bodydata);
        axios.post('/login', bodydata)
            .then(res => console.log(res.status))
            .then(data => console.log(data));

    }
    render() {
        return (
            <div className="container login_form">
                <form className="" method="POST" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" name="username" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}
export default Login; 