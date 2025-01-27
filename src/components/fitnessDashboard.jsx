import React, { useState } from 'react';
import "./FitnessDashboard.css";
import Chart from "./Chart";
import { toPadding } from 'chart.js/helpers';

const FitnessDashboard = () => {
  const [name, setName] = useState('');
  const [activities, setActivities] = useState([
    { name: 'Full Body Workout', duration: '20 min' },
    { name: 'Abs and Legs', duration: '30 min' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({ name: '', duration: '' });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewActivity({ name: '', duration: '' });
  };

  const handleActivityChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addActivity = () => {
    console.log("New Activity:", newActivity);
    if (newActivity.name.trim() && newActivity.duration.trim()) {
      setActivities([...activities, newActivity]);
      console.log("Activity added:", [...activities, newActivity]);
      closeModal();
    } else {
      alert('Please fill in all fields');
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
            <p>2/4</p>
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
            <p>{`${activity.name} - ${activity.duration}`}</p>
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
                placeholder="Es. upper body"
              />
            </label>
            <label>
              Duration:
              <input
                type="text"
                name="duration"
                value={newActivity.duration}
                onChange={handleActivityChange}
                placeholder="Es. 1h20min"
              />
            </label>
            <button onClick={addActivity}>Add Activity</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
      <Chart />
    </div>
  );
};

export default FitnessDashboard;
