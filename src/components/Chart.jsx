import React, { useState } from "react";
import { Line } from "react-chartjs-2";

// Configura Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  // Stati per le etichette e i dati del grafico
  const initialLabels = ["Lun", "Mar", "Mer"];
  const initialDataset = [30, 45, 20];

  const [labels, setLabels] = useState(initialLabels);
  const [dataset, setDataset] = useState(initialDataset);

  // Stati per i nuovi dati da aggiungere
  const [newLabel, setNewLabel] = useState("");
  const [newValue, setNewValue] = useState("");

  // Dati per il grafico
  const data = {
    labels: labels, // Usa lo stato labels
    datasets: [
      {
        label: "Minuti di allenamento",
        data: dataset, // Usa lo stato dataset
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4, // Arrotonda le linee
      },
    ],
  };

  // Opzioni per il grafico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // Posizione della legenda
      },
      tooltip: {
        enabled: true, // Mostra tooltip al passaggio del mouse
      },
    },
    scales: {
      y: {
        beginAtZero: true, // L'asse Y parte da 0
      },
    },
  };

  // Funzione per aggiungere nuovi dati
  const handleAddData = () => {
    if (newLabel && newValue) {
      setLabels([...labels, newLabel]);
      setDataset([...dataset, parseFloat(newValue)]);
      setNewLabel(""); // Resetta il campo di input
      setNewValue("");
    } else {
      alert("Compila tutti i campi!");
    }
  };

  // Funzione per resettare i dati
  const handleReset = () => {
    setLabels(initialLabels);
    setDataset(initialDataset);
  };

  return (
    <div>
      <h3 style={{fontSize: "2rem", justifyContent:"center", alignContent:"center", alignItems:"center", display:"flex"}}>Workout Habits Chart</h3>
      {/* Grafico */}
      <Line data={data} options={options} />
      {/* Campi di input e pulsanti */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Nuova etichetta (es: Gio)"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          style={{ marginRight: "20px", padding: "8px" }}
        />
        <input
          type="number"
          placeholder="Nuovo valore (es: 25)"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          style={{ marginRight: "20px", padding: "8px" }}
        />
        <button onClick={handleAddData} style={{ padding: "5px 10px" }}>
          Aggiungi Dati
        </button>
        <button onClick={handleReset} style={{ padding: "5px 10px", marginLeft: "10px" }}>
          Reset
        </button>
      </div>
    </div>
   
  );
};

export default Chart;
