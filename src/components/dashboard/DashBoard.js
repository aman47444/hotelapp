import React, { Component } from 'react'
import Notification from './Notification';
export default class DashBoard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 my-3">
                        {/* <ProjectList></ProjectList> */}
                    </div>
                    <div className="col-sm-6 text-center my-3">
                        <Notification></Notification>
                    </div>
                </div>
            </div>
        )
    }
}
