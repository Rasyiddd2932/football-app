import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import "./TeamDetail.css";

function TeamDetail() {
  const { id } = useParams();
  const [team, setTeam] = React.useState(null);

  useEffect(() => {
    api.get("/teams/" + id).then((response) => {
      setTeam(response.data);
    });
  }, [id]);

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Team Detail</h2>
      <div className="team-detail">
        <div className="team-detail-logo">
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
