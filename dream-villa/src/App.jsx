import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Villas from "./components/Villas";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Hero />
        <Villas />
        <Footer />
      </>
    );
  }
}

export default App;
