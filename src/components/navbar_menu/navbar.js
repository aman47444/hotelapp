import React, { Component } from 'react';
import navbar from '../navbar_menu/navbar.css';
import About from '../about/about';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div className="mainmenu">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <Link className="navbar-brand text-white" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/about">About</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/hotel">Hotel</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/location">Locations</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-1 mx-1">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <div className="">
                            <Link className="btn btn-success" to="/login">LogIn</Link>
                            <Link className="btn btn-danger mx-2" to="/signup">SignUp</Link>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar;