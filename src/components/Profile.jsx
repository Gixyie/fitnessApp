import React from 'react';
import "./Profile.css";

const Profile = () => {
  return ( 
    <div className="profile-container">
        <div className="avatar1">
        <img src="https://img.freepik.com/foto-gratuito/ritratto-di-una-bella-giovane-donna-d-affari-rendering-3d_1142-51666.jpg?t=st=1738248321~exp=1738251921~hmac=2f00725518099594185385c32c753acf0216afa29ba041dd499dd2b6d9db1533&w=740"></img>
        </div>
        <div className="nameheader">
        <h1>Dalia</h1>
        </div>
      

        <div className="weight">
            <div className="weight-header">
            <h1>WEIGHT</h1>    
            <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="44px" fill="#5f6368"><path d="M480-800q-33 0-56.5-23.5T400-880q0-33 23.5-56.5T480-960q33 0 56.5 23.5T560-880q0 33-23.5 56.5T480-800ZM360-200v-480q-60-5-122-15t-118-25l20-80q78 21 166 30.5t174 9.5q86 0 174-9.5T820-800l20 80q-56 15-118 25t-122 15v480h-80v-240h-80v240h-80ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"/></svg>
        </div>
            <div className="weights">
                <div className="weight-labels">
                <h2>Start</h2>
                <h2>Current</h2>
                <h2>Target</h2>
             </div>
             <div className="weight-values">
                <p>70kg</p>
                <p>68kg</p>
                <p>65kg</p>
             </div>
        </div>
     </div>
     {/*sezione log--> collegamento grafico*/}
     <div className="logweight">
     <button className="log-weight" onClick={() => console.log("Log weight")}>
    Log weight
    </button>
     </div>

     {/* Sezione Bottoni */}
    <div className="profile-buttons">
    <button className="profile-button" onClick={() => console.log("Edit Profile")}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
      
      Edit Profile 
      <div className="icon2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
   </div>
    </button>

    <button className="profile-button" onClick={() => console.log("Saved Workouts")}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z"/></svg>
      Saved Workouts 
      <div className="icon2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
    </div>
    </button>

    <button className="profile-button" onClick={() => console.log("History")}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M480-120q-138 0-240.5-91.5T122-440h82q14 104 92.5 172T480-200q117 0 198.5-81.5T760-480q0-117-81.5-198.5T480-760q-69 0-129 32t-101 88h110v80H120v-240h80v94q51-64 124.5-99T480-840q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z"/></svg>
      History   
      <div className="icon2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
    </div>
    </button>
  </div>
</div>
  );

};




export default Profile;