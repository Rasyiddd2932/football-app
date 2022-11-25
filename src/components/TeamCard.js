import React from "react";
import { Link } from "react-router-dom";

function TeamCard({ data }) {
  return (
    // apabila card diklik, akan navigasi ke halaman detail team
    <Link to={"/team/" + data.id}>
      <div className="team-item">
        <div className="team-logo-container">
          {data.crestUrl ? (
            <img src={data.crestUrl} alt="logo" className="team-logo" />
          ) : (
            <div className="team-logo-placeholder">No logo</div>
          )}
        </div>
        <div className="team-item__name">{data.name}</div>
        <div className="team-item__area">{data.area.name}</div>
      </div>
    </Link>
  );
}

export default TeamCard;
