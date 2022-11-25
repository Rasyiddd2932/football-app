import React from "react";
import { Link } from "react-router-dom";

function CompetitionCard({ data }) {
  return (
    <Link to={"/competition/" + data.code}>
      <div className="competition-item">
        <div className="competition-logo-container">
          {data.area?.ensignUrl ? (
            <img
              src={data.area?.ensignUrl}
              alt="logo"
              className="competition-logo"
            />
          ) : (
            <div className="competition-logo-placeholder">No logo</div>
          )}
        </div>
        <div className="competition-item-right">
          <div className="competition-item-name">{data.name}</div>
          <div className="competition-item-area">{data.area.name}</div>
        </div>
      </div>
    </Link>
  );
}

export default CompetitionCard;
