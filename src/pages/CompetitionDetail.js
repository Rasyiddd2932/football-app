import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import "./CompetitionDetail.css";

const CompetitionDetail = () => {
  const { id } = useParams();
  const [competition, setCompetition] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/competitions/" + id)
      .then((response) => {
        setCompetition(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Competition not available, please try again later or select another
        competition.
      </div>
    );
  }

  return (
    <div>
      <h2>Competition Detail</h2>

      <div className="competition-detail">
        <div className="competition-detail-logo">
          {competition.emblemUrl ? (
            <img
              src={competition.emblemUrl}
              alt="logo"
              className="competition-logo"
            />
          ) : (
            <div className="competition-logo-placeholder">No logo</div>
          )}
        </div>
        <div className="competition-detail-info">
          <h4>Competition name:</h4>
          <p>{competition.name}</p>
          <h4>Area:</h4>
          <p>{competition.area.name}</p>
          <h4>Code:</h4>
          <p>{competition.code}</p>
          <h4>Current season:</h4>
          <p>
            {competition.currentSeason.startDate} -{" "}
            {competition.currentSeason.endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetail;
