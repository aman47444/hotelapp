import React, { Component } from 'react'
import dash from '../dashboard/dash.css'
import Customer from '../customer/customer';
import { Link } from 'react-router-dom';
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img7 from '../img/img7.jpg';
import bed from '../img/bed.jpg';
import img8 from '../img/img8.jpg';
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
                                </div>
                                <div className="carousel-item ">
                                <img className="d-block w-100 h-100" src={img5} alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                <img className="d-block w-100 h-100" src={img7} alt="Third slide"/>
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
                <div className="container-fluid">
                <h2 className="text-center my-3">Look at this.........</h2>
                <div className="row">
                    <div className="col-sm-4 my-2">
                        <div className="card card-body bedcard">
                            <form className="form-group">
                                <div className="card ">
                                    <img src={bed} alt={bed} style={{width:"auto",height:"200px"}}/>
                                </div>
                                <blockquote>Btm 1st stage, <span className="text-success">Price</span> 200-300(P/N)</blockquote>
                                <button className="btn btn-danger btn-lg mr-3 mt-1">Book</button>
                                <button className="btn btn-success btn-lg mt-1">View</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4 my-2">
                    <div className="card card-body bedcard">
                    <form>
                        <div className="card my-2">
                            <img src={img8} alt={img8} style={{width:"auto",height:"200px"}} />
                        </div>
                        <blockquote>Btm 2nd stage, <span className="text-success">Price</span> 200-300(P/N)</blockquote>

                        <button className="btn btn-danger btn-lg mr-3 mt-1">Book</button>
                        <button className="btn btn-success btn-lg mt-1">View</button>
                    </form>                   
                    </div>
                    </div>
                    <div className="col-sm-4 my-2">
                    <div className="card card-body bedcard">
                    <form>
                        <div className="card my-2">
                            <img src={img8} alt={img8} style={{width:"auto",height:"200px"}} />
                        </div>
                        <blockquote>HSR Bangalore, <span className="text-success">Price</span> 200-300(P/N)</blockquote>
                        <button className="btn btn-danger btn-lg mr-3 mt-1">Book</button>
                        <button className="btn btn-success btn-lg mt-1">View</button>
                    </form>
                    </div>
                    </div> 
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default DashBoard;