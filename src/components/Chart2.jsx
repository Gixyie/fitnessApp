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
        borderColor: "rgba(290,280,20)",
        backgroundColor: "rgba(1, 13, 13)",
      },
    ],
  };
  
  // Componente Chart2
  const Chart2 = () => {
    return <Line data={data} />;
  };
  
  export default Chart2;