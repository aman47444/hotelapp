import React from 'react'
import '../hotel/hotel.css';
import Roomdemo from '../dashboard/roomdemo/roomdemo';
import Footer from '../footer/footer';
function Hotel() {
    return (
        <React.Fragment>
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <form>
                                <div className="row no-margin">
                                    <div className="col-md-3">
                                        <div className="form-group">
                                            <span className="form-label">Destination</span>
                                            <input className="form-control" type="text" placeholder="Country, City..." />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row no-margin">
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <span className="form-label">Check In</span>
                                                    <input className="form-control" type="date" required />
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <div className="form-group">
                                                    <span className="form-label">Check out</span>
                                                    <input className="form-control" type="date" required />
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <span className="form-label">Guests</span>
                                                    <select className="form-control">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                    </select>
                                                    <span className="select-arrow"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                        <div className="form-btn">
                                            <button className="submit-btn">Check availability</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Roomdemo></Roomdemo>
        <Footer></Footer>
        </React.Fragment>
    )
}
export default Hotel;