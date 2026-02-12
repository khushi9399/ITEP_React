import React, { Component } from "react";
import "../styles/Hero.css";

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <h1>Luxury Villas for Your Perfect Getaway</h1>
        <p>Find premium villas in top destinations</p>
        <button>Explore Villas</button>
      </section>
    );
  }
}

export default Hero;
