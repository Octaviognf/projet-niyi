import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import UsersPage from "./pages/UsersPage.js";
import CountriesPage from "./pages/CountriesPage.js";
import CryptoPage from "./pages/CryptoPage.js";
import "./App.css";


const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Utilisateurs</Link>
        <Link to="/countries">Pays</Link>
        <Link to="/crypto">Crypto</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UsersPage />} />
        <Route path="/countries" element={<CountriesPage />} />
        <Route path="/crypto" element={<CryptoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
