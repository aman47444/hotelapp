import React, { Component } from 'react';
import '../locations/location.css'
import img5 from '../img/img5.jpg';
import img6 from '../img/img6.jpg';
import img14 from '../img/img14.jpg';
import img15 from '../img/img15.jpg';
import img16 from '../img/img16.jpg';
import img17 from '../img/img17.jpg';
import img18 from '../img/img18.jpg';
import img19 from '../img/img19.jpg';
import img20 from '../img/img20.jpg';
import img25 from '../img/img25.jpg';
import img24 from '../img/img24.jpg';
import india1 from '../img/india1.jpg';
// import img15 from '../img/img15.jpg';
import Footer from '../footer/footer';
class Location extends Component {
    render() {
        return (
            <React.Fragment>
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
                                    <img src={img24} alt="jjjjjjj" className="img-responsive image" />
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
                    <div className="container-fluid our_courses">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-3 my_card">
                                    <img src={img15} className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                                <div className="col-sm-3 my_card">
                                    <img src={img14} className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                                <div className="col-sm-3 my_card">
                                    <img src={img18} alt="jjjjjjj" className="img-responsive image" />
                                    <div className="middle">
                                        <a href=""><div className="text">Click</div></a>
                                    </div>
                                </div>
                                <div className="col-sm-3 my_card">
                                    <img src={img25} className="img-responsive image" />
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