import React from "react";
import Navbar from "./components/navbar_menu/navbar";
import DashBoard from "./components/dashboard/DashBoard";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from "./components/about/about";
import Location from "./components/locations/location";
import Hotel from "./components/hotel/hotel";
import Login from "./components/login/login";
import Facalities from "./components/facalities/facalities";
import Signup from "./components/signup/signup";
import Profile from "./components/profile/profile";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Navbar/>
                {/* <Profile></Profile> */}
                <Switch>
                    <Route exact path="/"  component={DashBoard}></Route>
                    <Route path="/about"  component={About}></Route>
                    <Route path="/facalities"  component={Facalities}></Route>
                    <Route path="/hotel"  component={Hotel}></Route>
                    <Route path="/location"  component={Location}></Route>
                    <Route path="/login"  component={Login}></Route>
                    <Route path="/signup"  component={Signup}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}
export default App;
