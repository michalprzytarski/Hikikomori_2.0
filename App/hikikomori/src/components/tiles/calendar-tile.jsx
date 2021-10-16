import React from "react";
import "./calendar-tile.css";
import Internist from '../../internist.jpg';
import Venerologist from '../../venerology.jpg';
import Neurologist from '../../neurologist.jpg';
import Psychology from '../../psychology.jpg';

export default function Tile(specialist) {
  return (
    <div className="container-tile">
        {console.log(specialist)}
        {(() => {
        switch (specialist.specialist) {
          case 'internist':
            return (<div>
                <img src={Internist} className='tile-photo'></img>
                <h1>Internist</h1>
                <p>Suggested next appointment: 14.12.2021</p>
            </div>);
          case 'neurologist':
            return (<div>
            <img src={Neurologist} className='tile-photo'></img>
            <h1>Neurologist</h1>
            <p>Suggested next appointment: 14.05.2022</p>
        </div>);
          case 'psychologist':
            return (<div>
            <img src={Psychology} className='tile-photo'></img>
            <h1>Psychologist</h1>
            <p>Suggested next appointment: 19.02.2022</p>
            </div>);
        case "venerologist":
            return (<div>
            <img src={Venerologist} className='tile-photo'></img>
            <h1>Venerologist</h1>
            <p>Suggested next appointment: 21.01.2022</p>
            </div>);
          default:
            return null;
        }
      })()}
    </div>
  );
}
