import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import "./TeamDetail.css";

function TeamDetail() {
  // route: /team/:id
  // ambil variable id yang ada di route dengan useParams
  const { id } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    // import api dari folder api/axios.js,
    // mengambil data dari api https://api.football-data.org/v2/teams/ + id yang didapat dari route
    api.get("/teams/" + id).then((response) => {
      setTeam(response.data);
    });
  }, [id]);

  // jika belum ada data team yang didapat dari api, render tulisan loading
  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Team Detail</h2>
      <div className="team-detail">
        <div className="team-detail-logo">
          {/* render logo team apabila ada, render tulisan no logo apabila tidak ada */}
          {team.crestUrl ? (
            <img src={team.crestUrl} alt="logo" className="team-logo" />
          ) : (
            <div className="team-logo-placeholder">No logo</div>
          )}
        </div>
        <div className="team-detail-info">
          <h4>Club name:</h4>
          <p>{team.name}</p>
          <h4>Founded:</h4>
          <p>{team.founded}</p>
          <h4>Address:</h4>
          <p>{team.address}</p>
          <h4>Phone:</h4>
          <p>{team.phone}</p>
          <h4>Website:</h4>
          <p>{team.website}</p>
          <h4>Email:</h4>
          <p>{team.email}</p>
          <h4>Club colors:</h4>
          <p>{team.clubColors}</p>
          <h4>Venue:</h4>
          <p>{team.venue}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
