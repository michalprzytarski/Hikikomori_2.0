import React from "react";
import doctor from '../../pani.png';
import "./HomeScreen.css";
export default function HomeScreen() {
  return (
    <div class="container-home">
      <div id="home-content">
          <h2>Take control of your</h2>
          <h1>health</h1>
          <p>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit,</p>
          <button>make an appointment</button>
      </div>
      <div id="home-image">

        <img src={doctor}></img>
      </div>
    </div>
  );
}
