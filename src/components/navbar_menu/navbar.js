import React, { Component } from 'react'
import navbar from '../navbar_menu/navbar.css'
import About from '../about/about'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class Navbar extends Component {
    render() {
        return (
            <div className="mainmenu">
                <Router>
                    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                        <Link class="navbar-brand text-white" to="/dashboard">Home</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link class="nav-link text-white" to="/about">About</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link text-white" to="/hotel">Hotel</Link>
                                </li><li class="nav-item active">
                                    <Link class="nav-link text-white" to="/rooms">Rooms</Link>
                                </li>
                                <li class="nav-item active">
                                    <Link class="nav-link text-white" to="/location">Locations</Link>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-1 mx-1">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            <div className="">
                                <Link className="btn btn-success" to="/login">LogIn</Link>
                                <Link className="btn btn-danger mx-2" to="/signup">SignUp</Link>
                            </div>
                        </div>
                    </nav>
                </Router>
            </div>
        )
    }
}
export default Navbar;