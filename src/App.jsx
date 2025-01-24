import React from 'react'
import "./App.css";
import FitnessDashboard from './components/fitnessDashboard.JSX';


function App() {
  const [currentPage, setCurrentPage] = React.useState("dashboard");

  return (
    <div className="app">
      <main>
        {currentPage === "dashboard" && <FitnessDashboard />}
        {currentPage === "profile" && <UserProfile />}
        {currentPage === "progress" && <ProgressPage />}
      </main>
      <nav>
        <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("profile")}>Profile</button>
        <button onClick={() => setCurrentPage("progress")}>Progress</button>
      </nav>
    </div>
  );
}

export default App;