import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: ''
        }
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let fname = e.target.fname.value;
        let lname = e.target.lname.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        const bodydata = {
            'fname':fname,
            'lname':lname,
            'email':email,
            'password':password
        }
        console.log(bodydata);
        Axios.post('http://localhost:8080/signup',{bodydata})
        .then( res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    render() {
        return (
            <div className="container my-5">
                <form className="" method="POST" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">First Name</label>
                        <input type="text" name="fname" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Last Name</label>
                        <input type="text" name="lname" className="form-control" placeholder="Enter Last Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Enter Email</label>
                        <input type="text" name="email" className="form-control" id="exampleInputPassword1" placeholder="Enter Email" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Enter Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={this.handleChange} />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-success" >Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;