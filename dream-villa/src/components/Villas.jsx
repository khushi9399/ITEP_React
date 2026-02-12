import React, { Component } from "react";
import VillaCard from "./VillaCard";
import "../styles/Villas.css";

class Villas extends Component {
  state = {
    villas: [
      { id: 1, name: "Ocean View Villa", price: "₹25,000 / night" },
      { id: 2, name: "Mountain Retreat", price: "₹18,000 / night" },
      { id: 3, name: "Private Pool Villa", price: "₹30,000 / night" }
    ]
  };

  render() {
    return (
      <section className="villas">
        <h2>Our Featured Villas</h2>

        <div className="villa-list">
          {this.state.villas.map((villa) => (
            <VillaCard
              key={villa.id}
              name={villa.name}
              price={villa.price}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Villas;
