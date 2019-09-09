import React, { Component } from 'react';
import '../locations/location.css'
import img5 from '../img/img5.jpg';
import img14 from '../img/img14.jpg';
import img15 from '../img/img15.jpg';
import img16 from '../img/img16.jpg';
import img17 from '../img/img17.jpg';
import img18 from '../img/img18.jpg';
import img19 from '../img/img19.jpg';
import img20 from '../img/img20.jpg';
import india1 from '../img/india1.jpg';
// import img15 from '../img/img15.jpg';
import Footer from '../footer/footer';
class Location extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                        <div id="carouselExampleIndicatorsme2" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicatorsme2" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicatorsme2" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicatorsme2" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active mh-25">
                                <img className="d-block w-100 h-100" src={india1} alt="Second slide"/>
                                {/* <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div> */}
                                </div>
                                {/* <div className="carousel-item ">
                                <img className="d-block w-100 h-100" src={img5} alt="First slide"/>
                                <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div>
                                </div> */}
                                {/* <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={img7} alt="Third slide"/>
                                <div className="carousel-caption">
                                    <h3>Welcome to ApnaGhar</h3>
                                    <p>We all are family</p>
                                </div>
                                </div> */}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicatorsme2" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicatorsme2" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className="container-fluid our_courses">
                        <div className="container-fluid">
                            <h1 className="text-center">Our Cities</h1>
                            <p className="text-center">-------------------------------------------------</p>
                            <div className="row">
                                <div className="col-sm-3 my_card">
                                    <img src={img20} className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                                <div className="col-sm-3 my_card">
                                    <img src={img16} className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                                <div className="col-sm-3 my_card">
                                    <img src={img17} alt="jjjjjjj" className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                                <div className="col-sm-3 my_card">
                                    <img src={img19} className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
export default Location;