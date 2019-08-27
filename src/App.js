import React from "react";
import Navbar from "./components/navbar_menu/navbar";
import DashBoard from "./components/dashboard/DashBoard";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import About from "./components/about/about";
import Location from "./components/locations/location";
function App() {
    return (
        <div>
            <Navbar></Navbar>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={DashBoard}></Route>                
                    <Route path="/about" component={About}></Route>
                    <Route path="/location" component={Location}></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}
export default App;
