import React from "react";
import HealthIcon from '../../health.svg';
import "./FaqScreen.css";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";
export default function FaqScreen() {
  return (
    <div class="container-faq">
      <h1 id="title">FREQUENTLY ASKED QUESTIONS</h1>
      <hr id="line-title"></hr>
      <div id="container-group-questions">
          <div class="container-icons" id="left">
            <img src={HealthIcon}></img>
            <hr></hr>
            <img src={HealthIcon}></img>
            <hr></hr>
            <img src={HealthIcon}></img>
          </div>
          <div class="container-questions" id="left">
            <div class="question">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>{text}</p>
            </div>
            <div class="question">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>{text}</p>
            </div>
            <div class="question">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>{text}</p>
            </div>
          </div>
          <div class="container-icons" id="right">
            <img src={HealthIcon}></img>
            <hr></hr>
            <img src={HealthIcon}></img>
            <hr></hr>
            <img src={HealthIcon}></img>
          </div>
          <div class="container-questions" id="right">
          <div class="question">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>{text}</p>
            </div>
            <div class="question">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>{text}</p>
            </div>
            <div class="question">
              <h1>Lorem ipsum dolor sit amet</h1>
              <p>{text}</p>
            </div>
          </div>
          
      </div>
    </div>
  );
}
