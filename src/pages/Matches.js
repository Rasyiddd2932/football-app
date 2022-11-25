import React, { useEffect, useState } from "react";
import api from "../api/axios";
import MatchCard from "../components/MatchCard";
import "./Matches.css";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // import api dari folder api/axios.js, mengambil data dari api https://api.football-data.org/v2/matches
    api
      .get("/matches")
      .then((response) => {
        setMatches(response.data.matches);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Matches</h2>
      <div className="matches-list">
        {matches.map((match) => (
          <MatchCard data={match} key={match.id} />
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Matches;
