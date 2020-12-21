import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";


class NavBar extends Component {
  render() {
    return (
    
    <Navbar bg="light" variant="light">
    <Nav className="mr-auto">
      <NavLink exact to="/">Home</NavLink>|
      <NavLink to="/menu">Menu</NavLink>|
      <NavLink to="/about">About</NavLink>|
      <NavLink to="/motivation">Motivation</NavLink>
    </Nav>
    
  </Navbar>

    


      // <div className="nav">
      //   <Link to="/">Home</Link>|
      //   <Link to="/menu">Menu</Link>|
      //   <Link to="/about">About</Link>|
      //   <Link to="/motivation">Motivation</Link>
      // </div>
    );
  }
}





export default NavBar;