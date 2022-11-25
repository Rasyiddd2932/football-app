import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TeamCard from "../components/TeamCard";
import "./HomeScreen.css";

const Home = () => {
  // deklaras state yang akan digunakan
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // import api dari folder api/axios.js, mengambil data dari api https://api.football-data.org/v2/teams
    api
      .get("/teams")
      .then((response) => {
        // apabila api memberikan response, set data response ke dalam state
        setFeatured(response.data.teams);
      })
      // request selesai, loading di set ke false
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Featured teams</h2>
      <div className="team-list">
        {/* looping data yang didapat dari api ke komponen TeamCard, 
            passing data team ke dalam props TeamCard bernama data */}
        {featured.map((team) => (
          // key berfungsi untuk membedakan komponen 1 dengan yang lain
          <TeamCard data={team} key={team.id} />
        ))}
      </div>
      {/* apabila state loading bernilai true, render tulisan loading */}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
