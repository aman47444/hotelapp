import React, { Component } from 'react';
import img14 from '../img/img14.jpg';
class Location extends Component {
    render() {
        return (
            <div>
                <h1>This is Location Page</h1>
                <div>
                    <img src={img14} alt={img14}/>
                </div>
            </div>
        )
    }
}
export default Location;