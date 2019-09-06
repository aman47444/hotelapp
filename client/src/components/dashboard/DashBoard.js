import React, { Component } from 'react'
import dash from '../dashboard/dash.css'
import { Link } from 'react-router-dom';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import Roomdemo from './roomdemo/roomdemo';
import Customer from '../customer/customer';
import Footer from '../footer/footer';
class DashBoard extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="container">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img className="d-block w-100 h-100" src={img6} alt="Second slide"/>
                                <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div>
                                </div>
                                <div className="carousel-item ">
                                <img className="d-block w-100 h-100" src={img5} alt="First slide"/>
                                <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={img7} alt="Third slide"/>
                                <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <Roomdemo></Roomdemo>
                <Customer></Customer>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
export default DashBoard;