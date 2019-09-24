import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Signup from '../signup/signup'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '',
            submitted: false,
            loading: false,
            error: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let email = e.target.email.value;
        let password = e.target.password.value;
        let bodydata = {
            'email': email,
            'password': password
        }
        // const bodydata = {
        //     email:this.state.email,
        //     password:this.state.password
        // }
        console.log(bodydata);
        Axios.post('http://localhost:8080/login', { bodydata })
            // .then(res => console.log('ye hai status -> ' + res.status + '\n' +res.data))
            .then(res => {
                if(res) {
                    this.props.history.push('/')
                }
            })
            .catch((err) => console.log("not found"));
    }
    render() {
        return (
            <div className="container my-5 login_form">
                <form className="" method="POST" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" name="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <Link to="/signup"><button type="submit" className="btn btn-danger mx-3">Signup</button></Link>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login; 