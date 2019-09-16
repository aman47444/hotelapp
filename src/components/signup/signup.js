import React, { Component } from 'react'
class Signup extends Component {
    render() {
        return (
            <div className="container">
                <form className="" method="POST" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" name="username" className="form-control"  placeholder="Enter Username"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="my-3">
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;