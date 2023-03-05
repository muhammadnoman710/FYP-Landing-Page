import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import Container from './Components/FrontContainer/Container';
import TopSellers from './Components/TopSellers/TopSellers';
import Login from "./Components/Login/Login";
import HotBids from "./Components/HotBids/HotBids";
//import ReactSlick from "./Components/ReactSlick/ReactSlick";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<><NavBar/><Container/><TopSellers/><HotBids/></>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
