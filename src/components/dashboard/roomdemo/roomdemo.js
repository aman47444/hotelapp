import React from 'react'
// import bed from '../Notification'
import bed from '../../img/bed.jpg';
import img8 from '../../img/img8.jpg';
function Roomdemo() {
    return (
        <div className="container-fluid roomcard">
            <h2 className="text-center my-3">Look at this.........</h2>
            <div className="row">
                <div className="col-sm-4 my-2">
                    <div className="card card-body bedcard">
                        <form className="form-group">
                            <div className="card ">
                                <img src={bed} alt={bed} style={{ width: "auto", height: "200px" }} />
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
                                <img src={img8} alt={img8} style={{ width: "auto", height: "200px" }} />
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
                                <img src={img8} alt={img8} style={{ width: "auto", height: "200px" }} />
                            </div>
                            <blockquote>HSR Bangalore, <span className="text-success">Price</span> 200-300(P/N)</blockquote>
                            <button className="btn btn-danger btn-lg mr-3 mt-1">Book</button>
                            <button className="btn btn-success btn-lg mt-1">View</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Roomdemo;
