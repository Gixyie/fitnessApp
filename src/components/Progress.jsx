import React from 'react';
import "./Progress.css";
import Chart2 from "./Chart2";

const Progress = () => {
  return (
    <div className="progresspage">
    <div className= "button-container-time">
        <button className="progress-button" onClick={()=> console.log("Week")}>Week</button>
        <button className="progress-button" onClick={()=> console.log("Month")}>Month</button>
        <button className="progress-button" onClick={()=> console.log("Year")}>Year</button>
    </div>

    <div className="weight2">
        <div className="weight-header2">
        <h2>WEIGHT</h2>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="44px" fill="#5f6368"><path d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"/></svg>
    </div>
    </div>
    <Chart2 />
</div>

  );
 
}

export default Progress;