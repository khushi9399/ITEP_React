import React, { Component } from "react";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h2>DreamVilla</h2>
        <ul>
          <li>Home</li>
          <li>Villas</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
