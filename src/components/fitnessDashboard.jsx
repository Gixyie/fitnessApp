import React, { useState } from "react";
import "./FitnessDashboard.css";
import Chart from "./Chart";

const FitnessDashboard = () => {
  const [name, setName] = useState("");
  const [activities, setActivities] = useState([
    { name: "Full Body Workout", duration: 20 },
    { name: "Abs and Legs", duration: 30 },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({ name: "", duration: "" });
  const [completedExercises, setCompletedExercises] = useState(0);

  // Dati per il grafico
  const labels = activities.map((_, index) => `Day ${index + 1}`);
  const dataset = activities.map((activity) => activity.duration);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewActivity({ name: "", duration: "" });
  };

  const handleActivityChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addActivity = () => {
    if (newActivity.name.trim() && newActivity.duration.trim()) {
      const parsedDuration = parseInt(newActivity.duration, 10); // Converte la durata in numero
      if (isNaN(parsedDuration)) {
        alert("Inserisci una durata valida (in minuti).");
        return;
      }
      setActivities([...activities, { name: newActivity.name, duration: parsedDuration }]);
      setCompletedExercises((prev) => prev + 1);
      closeModal();
    } else {
      alert("Compila tutti i campi.");
    }
  };

  return (
    <div className="fitness-dashboard">
      <header>
        <h1>Welcome back!</h1>
        {name && <p>Welcome, {name}!</p>}
        <div className="stats">
          <div className="stat-card">
            <h3>Completed Exercises</h3>
            <p>
              {completedExercises}/{activities.length}
            </p>
          </div>
          <div className="stat-card">
            <h3>Steps</h3>
            <p>7,765</p>
          </div>
        </div>
      </header>
      <section className="today-activity">
        <h2>TODAY'S ACTIVITIES</h2>
        <button
          className="add-activity"
          onClick={(e) => {
            e.preventDefault();
            openModal();
          }}
        >
          ADD NEW ACTIVITY
        </button>
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <p>{`${activity.name} - ${activity.duration} min`}</p>
          </div>
        ))}
      </section>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Activity</h3>
            <label>
              Activity:
              <input
                type="text"
                name="name"
                value={newActivity.name}
                onChange={handleActivityChange}
                placeholder="Es. Upper Body"
              />
            </label>
            <label>
              Duration (in minutes):
              <input
                type="number"
                name="duration"
                value={newActivity.duration}
                onChange={handleActivityChange}
                placeholder="Es. 20"
              />
            </label>
            <button onClick={addActivity}>Add Activity</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      {/* Passa labels e dataset al grafico */}
      <Chart labels={labels} dataset={dataset} />
    </div>
  );
};

export default FitnessDashboard;
