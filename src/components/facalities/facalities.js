import React, { Component } from 'react'
import cr1 from '../img/cr1.jpg';
import cr2 from '../img/cr2.jpg';
import cr3 from '../img/cr3.jpg';
import Footer from '../footer/footer';
import '../facalities/facalities.css';
export default class Facalities extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid my-5">
                    {/* <div className="container"> */}
                        <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={cr1} alt="Second slide" />
                                    <div className="carousel-caption">
                                        <h3>Welcome to ApnaGhar</h3>
                                        <p>We all are family</p>
                                    </div>
                                </div>
                                <div className="carousel-item ">
                                    <img className="d-block w-100" src={cr2} alt="First slide" />
                                    <div className="carousel-caption">
                                        <h3>Welcome to ApnaGhar</h3>
                                        <p>We all are family</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={cr3} alt="Third slide" />
                                    <div className="carousel-caption">
                                        <h3>Welcome to ApnaGhar</h3>
                                        <p>We all are family</p>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    {/* </div> */}
                </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
