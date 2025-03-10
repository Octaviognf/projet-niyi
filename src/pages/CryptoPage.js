import React, { useEffect, useState } from "react";
import axios from "axios";
import CryptoStats from "../components/CryptoStats";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);


const CryptoPage = () => {
  const [cryptoData, setCryptoData] = useState([]); // Déclaration correcte de cryptoData

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true")
      .then(response => setCryptoData(response.data))
      .catch(error => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div>
      <h2>Statistiques Crypto</h2>
      <CryptoStats cryptoData={cryptoData} />
    </div>
  );
};

export default CryptoPage;

