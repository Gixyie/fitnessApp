import React from "react";
import { Line } from "react-chartjs-2";
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
// Dati finti per testare il grafico
const activities = [
     { name: "Cycling", value: 50 },
    { name: "Swimming", value: 60 },
    { name: "Yoga", value: 70 },
    { name: "Workout", value: 80 },
  ];
  
  // Etichette asse X
  const labels = activities.map((activity, index) => `Day ${index + 1}: ${activity.name}`);
  
  // Dati del grafico
  const data = {
    labels,
    datasets: [
      {
        label: "Weight",
        data: activities.map((activity) => activity.value),
        borderColor: "#1b4bea",
        backgroundColor: "#1b4bea",
      },
    ],
  };
  
  // Opzioni per rendere il grafico responsivo
const options = {
  responsive: true,
  maintainAspectRatio: false, // Permette al grafico di adattarsi al contenitore
  plugins: {
    legend: {
      display: true,
      position: "top",
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: window.innerWidth < 600 ? 10 : 14, // Dimensione del testo per mobile
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: window.innerWidth < 600 ? 10 : 14, // Adatta la grandezza delle etichette
        },
      },
    },
  },
}; 
  // Componente Chart2
  const Chart2 = () => {
    return (
      <div style={{ width: "100%", maxWidth: "800px", height: "400px", margin: "auto" }}>
        <Line data={data} options={options} />
      </div>
    );
  };
  
  export default Chart2;