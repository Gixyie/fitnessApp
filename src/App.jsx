import React from 'react'
import "./App.css";
import FitnessDashboard from './components/fitnessDashboard.JSX';
import Profile from "./components/Profile.jsx";

function App() {
  const [currentPage, setCurrentPage] = React.useState("dashboard");

 

  return (
    <div className="app">
      <main>
        {currentPage === "dashboard" && <FitnessDashboard />}
        {currentPage === "profile" && <Profile />}
        {currentPage === "progress" && <ProgressPage />}
      </main>
      <nav>
        <button  onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("profile")} style={{ display: "flex", alignItems: "center" }}>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" style={{ marginRight: "8px" }}>
    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/>
  </svg>
  Profile
</button>

        <button onClick={() => setCurrentPage("progress")} style={{ display: "flex", alignItems: "center" }}>
  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" style={{ marginRight: "8px", color: "white" }}>
    <path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/>
  </svg> Progress</button>
      </nav>
    </div>
  );
}

export default App;