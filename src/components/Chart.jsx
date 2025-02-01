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

const Chart = ({ labels, dataset }) => {
  console.log("Props in Chart.jsx:", { labels, dataset }); // Controlla i dati ricevuti

  // Dati per il grafico
  const data = {
    labels: labels || [], // Se labels è undefined, usa un array vuoto
    datasets: [
      {
        label: "Minuti di allenamento",
        data: dataset || [], // Se dataset è undefined, usa un array vuoto
        borderColor: "#c0f500;",
        backgroundColor: "#c0f500",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Opzioni per il grafico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  
    
  };
  

  return (
    <div>
      <h3
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          letterSpacing: "2px",
        }}
      >
        WORKOUT HABITS CHART
      </h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default Chart;