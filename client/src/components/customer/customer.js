import React, { Component } from 'react'
import img12 from '../img/img12.jpg';
import img11 from '../img/img11.jpg'
import img13 from '../img/img13.jpg';
import '../customer/customer.css';
class Customer extends Component {
    render() {
        return (
                <div className="container-fluid my-1">
                <h3 className="text-center my-3"> Welcome to Whom ?</h3>
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100 h-100" src={img11} alt="Second slide" />
                                <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={img12} alt="First slide" />
                                <div className="carousel-caption">
                                    <h3>Welcome Unmarried Couple</h3>
                                    <p>ApnaGhar is a couple friendly Station where young guys can enjoy own way</p>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <img className="d-block w-100 h-100" src={img13} alt="First slide" />
                                <div className="carousel-caption">
                                    <h3>Welcome Unmarried Couple</h3>
                                    <p>ApnaGhar is a couple friendly Station where young guys can enjoy own way</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
        )
    }
}
export default Customer;
