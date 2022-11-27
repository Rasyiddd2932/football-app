import React, { useEffect, useState } from "react";
import api from "../api/axios";
import TeamCard from "./TeamCard";

function TeamsInCompetition({ code }) {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/competitions/" + code + "/teams")
      .then((res) => {
        setTeams(res.data.teams);
      })
      .finally(() => setLoading(false));
  }, [code]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!loading && teams.length === 0) {
    return <div>There is no team in this competition</div>;
  }
  return (
    <div className="team-list">
      {/* looping data team dari competition yang didapat dari api ke komponen TeamCard, 
    passing data team ke dalam props TeamCard bernama data */}
      {teams.map((team) => (
        // key berfungsi untuk membedakan komponen 1 dengan yang lain
        <TeamCard data={team} key={team.id} />
      ))}
    </div>
  );
}

export default TeamsInCompetition;
