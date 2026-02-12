import React, { Component } from "react";
import "../styles/VillaCard.css";

class VillaCard extends Component {
  render() {
    return (
      <div className="villa-card">
        <img
          src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c"
          alt="villa"
        />
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
        <button>Book Now</button>
      </div>
    );
  }
}

export default VillaCard;
