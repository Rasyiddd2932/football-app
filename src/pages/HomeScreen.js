import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TeamCard from "../components/TeamCard";
import "./HomeScreen.css";

const Home = () => {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get("/teams")
      .then((response) => {
        setFeatured(response.data.teams);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Featured teams</h2>
      <div className="team-list">
        {featured.map((team) => (
          <TeamCard data={team} key={team.id} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
