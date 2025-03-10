import React, { useEffect, useState } from "react"; // ✅ Vérifie bien cette ligne
import axios from "axios";
import UserList from "../components/UserList";

const UsersPage = () => {
  const [users, setUsers] = useState([]); // ✅ Déclaration correcte de users
  const [search, setSearch] = useState(""); // ✅ Déclaration correcte de search

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50")
      .then(response => setUsers(response.data.results))
      .catch(error => console.error("Erreur de chargement :", error));
  }, []);

  return (
    <div>
      <h2>Liste des Utilisateurs</h2>
      <input 
        type="text" 
        placeholder="Rechercher par genre (male/female)" 
        onChange={(e) => setSearch(e.target.value)}
      />
      <UserList users={users} search={search} />
    </div>
  );
};

export default UsersPage;
