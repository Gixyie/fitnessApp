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
  const labels = activities.map(
    (activity, index) => `Day ${index + 1}: ${activity.name}`
  );
  
  // Funzione per estrarre solo i minuti da una durata in formato "30 min", "1h20min"
  const extractMinutes = (duration) => {
    if (!duration || typeof duration !== "string") {
      console.warn("Valore non valido per duration:", duration);
      return 0;
    }
  
    // Trova ore e minuti nel formato "1h30m" o "2.5h"
    const hoursMatch = duration.match(/(\d+(\.\d+)?)\s*h/);
    const minutesMatch = duration.match(/(\d+)\s*m/);
  
    const hours = hoursMatch ? parseFloat(hoursMatch[1]) * 60 : 0; // Converte ore in minuti
    const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0; // Prende i minuti direttamente
  
    return hours + minutes;
  };
  
  
  
  const dataset = activities.map((activity) => extractMinutes(activity.duration));
  
  
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
  
    setNewActivity((prevState) => {
      if (name === "duration") {
        // Accetta solo numeri + "h" e "m" (es. "1h30m", "90m")
        const validDuration = value.replace(/[^0-9hm]/gi, ""); 
        return { ...prevState, duration: validDuration };
      }
  
      // Se è l'activity name, lascia tutto invariato
      return { ...prevState, name: value };
    });
  };
  
  const removeActivity = (indexToRemove) => {
    setActivities((prevActivities) =>
      prevActivities.filter((_, index) => index !== indexToRemove)
    );
  };
  
  

  const addActivity = () => {
    if (newActivity.name.trim() && newActivity.duration.trim()) {
      setActivities([...activities, newActivity]); // Aggiunge l'attività alla lista
      closeModal();
    } else {
      alert("Please fill in all fields");
    }
  };
  

  return (
    <div className="fitness-dashboard">
      <header>
       <div className="avatar">
        <img></img>
        <h1>Welcome back!</h1>
        </div>
        
        {name && <p>Welcome, {name}!</p>}
        <div className="stats">
          <div className="stat-card">
            <h3>Completed Exercises <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m826-585-56-56 30-31-128-128-31 30-57-57 30-31q23-23 57-22.5t57 23.5l129 129q23 23 23 56.5T857-615l-31 30ZM346-104q-23 23-56.5 23T233-104L104-233q-23-23-23-56.5t23-56.5l30-30 57 57-31 30 129 129 30-31 57 57-30 30Zm397-336 57-57-303-303-57 57 303 303ZM463-160l57-58-302-302-58 57 303 303Zm-6-234 110-109-64-64-109 110 63 63Zm63 290q-23 23-57 23t-57-23L104-406q-23-23-23-57t23-57l57-57q23-23 56.5-23t56.5 23l63 63 110-110-63-62q-23-23-23-57t23-57l57-57q23-23 56.5-23t56.5 23l303 303q23 23 23 56.5T857-441l-57 57q-23 23-57 23t-57-23l-62-63-110 110 63 63q23 23 23 56.5T577-161l-57 57Z"/></svg></h3>
            <p>
              {completedExercises}/{activities.length}
            </p>
          </div>

          <div className="stat-card">
            <h3>Burned kcal <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-400q0 52 21 98.5t60 81.5q-1-5-1-9v-9q0-32 12-60t35-51l113-111 113 111q23 23 35 51t12 60v9q0 4-1 9 39-35 60-81.5t21-98.5q0-50-18.5-94.5T648-574q-20 13-42 19.5t-45 6.5q-62 0-107.5-41T401-690q-39 33-69 68.5t-50.5 72Q261-513 250.5-475T240-400Zm240 52-57 56q-11 11-17 25t-6 29q0 32 23.5 55t56.5 23q33 0 56.5-23t23.5-55q0-16-6-29.5T537-292l-57-56Zm0-492v132q0 34 23.5 57t57.5 23q18 0 33.5-7.5T622-658l18-22q74 42 117 117t43 163q0 134-93 227T480-80q-134 0-227-93t-93-227q0-129 86.5-245T480-840Z"/></svg></h3>
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
            <button onClick={() => removeActivity(index)} style={{
    backgroundColor: '#f44336', // Rosso per indicare la rimozione
    color: 'white', // Testo bianco
    border: 'none', // Nessun bordo
    padding: '5px 10px', // Aggiungi un po' di spazio
    cursor: 'pointer', // Mostra la mano quando ci passi sopra
    borderRadius: '5px', // Angoli arrotondati
    fontSize: '12px', // Dimensione del font
  marginLeft: 'auto'
  }}>🗑 Remove</button>
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
                type="text"
                name="duration"
                value={newActivity.duration}
                onChange={handleActivityChange}
                placeholder="Es. 1h20m"
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
