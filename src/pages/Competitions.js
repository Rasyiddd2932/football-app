import React, { useEffect, useState } from "react";
import api from "../api/axios";
import CompetitionCard from "../components/CompetitionCard";
import "./Competitions.css";

const Competitions = () => {
  const [competitions, setCompetitions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // import api dari folder api/axios.js, mengambil data dari api https://api.football-data.org/v2/competitions
    api
      .get("/competitions")
      .then((response) => {
        setCompetitions(response.data.competitions);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Competitions</h2>
      <div className="competition-list">
        {competitions.map((competition) => (
          <CompetitionCard data={competition} key={competition.id} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Competitions;
