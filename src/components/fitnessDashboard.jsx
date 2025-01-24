import React, {useState} from 'react';
import "./FitnessDashboard.css";


const FitnessDashboard = () => {
    // Stato per il nome dell'utente
    const [name, setName] = useState('');
  
    // Funzione per gestire il cambiamento del nome
    const handleNameChange = (e) => {
      setName(e.target.value); // Aggiorna il nome quando l'utente scrive
    };

 // Stato per la lista delle attività
 const [activities, setActivities] = useState([
    { name: 'Full Body Workout', duration: '20 min' },
    { name: 'Abs and Legs', duration: '30 min' },
  ]);

     const [isModalOpen, setIsModalOpen] = useState(false);
     const [NewActivity, setNewActivity] = useState({name:''});
     const openModal = () => {setIsModalOpen(true);
        console.log('modale aperta');
     };
     const closeModal = () => {
        setIsModalOpen(false);
        setNewActivity({name:'', duration: ''})
        console.log('modale chiusa');
     };

 // Funzione per gestire il cambiamento nei campi della modale
 const handleActivityChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  // Funzione per aggiungere una nuova attività
  const addActivity = () => {
    if (newActivity.name && newActivity.duration) {
    setActivities([...activities, newActivity]);
    closeModal(); // Chiudi la modale dopo aver aggiunto l'attività
} else {
    alert('Please fill in all fields');
  }
};

   return (
    <div className="fitness-dashboard">
      <header>
        <h1>
          Welcome back!
        </h1>
        {/* Mostra il nome solo se è stato inserito */}
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
    e.preventDefault(); // Impedisce il comportamento di refresh della pagina
    openModal();
  }}
>
  +
</button>

        {/* Mostra le attività */}
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <p>{`${activity.name} - ${activity.duration}`}</p>
          </div>
        ))}
      </section>

  {/* Modale per aggiungere una nuova attività */}
  {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add New Activity</h3>
            <label>
              Activity Name:
              <input
                type="text"
                name="name"
                value={newActivity.name}
                onChange={handleActivityChange}
                placeholder="Enter activity name"
              />
            </label>
            <label>
              Duration:
              <input
                type="text"
                name="duration"
                value={newActivity.duration}
                onChange={handleActivityChange}
                placeholder="Enter duration"
              />
            </label>
            <button onClick={addActivity}>Add Activity</button>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default FitnessDashboard;