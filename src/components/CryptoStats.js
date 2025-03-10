import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

// ✅ Enregistrement des modules Chart.js
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const CryptoStats = ({ cryptoData }) => {
  if (!cryptoData || cryptoData.length === 0) return <p>Chargement des données...</p>;

  const data = {
    labels: cryptoData.map((coin) => coin.name),
    datasets: [
      {
        label: "Prix en USD",
        data: cryptoData.map((coin) => coin.current_price),
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
        fill: true,
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((coin) => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>{coin.current_price} $</td>
              <td>
                <img src={coin.image} alt={coin.name} width="30" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoStats;

