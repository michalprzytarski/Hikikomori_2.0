import React from "react";
import "./CalendarScreen.css";
import Tile from '../tiles/calendar-tile';
export default function CalendarScreen({}) {



  return (
    
    <div className="container-calendar">
      <h1 id="calendar-title">Calendar</h1>
      <h2>Incoming follow-up appointments</h2>
      <hr id="line-title"></hr>
      <div className="calendarTiles">
          <Tile specialist="venerologist"></Tile>
          <Tile specialist="psychologist"></Tile>
          <Tile specialist="internist"></Tile>
          <Tile specialist="neurologist"></Tile>
      </div>
    </div>
  );
}