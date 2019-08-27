import React, { Component } from 'react'
import dash from '../dashboard/dash.css'
class DashBoard extends Component {
    render() {
        return (
            <div className="container-fluid mani-cont ">
                <div className="text-center my-5">
                    <button className="btn btn-danger btn-lg">Get Stared</button>
                </div>
                <div className="text-block">
                    <h3>About Us</h3>
                    <p>My name is Aman Kumar</p>
                </div>
            </div>
        )
    }
}
export default DashBoard;