import React from "react";

function MatchCard({ data }) {
  return (
    <div className="match-item">
      <div className="match-item__date">
        {new Date(data.utcDate).toLocaleDateString()}
      </div>
      <div className="scoreboard">
        <div className="home-team">{data.homeTeam.name}</div>
        <div className="match-item__score">
          {data.score.fullTime.homeTeam} - {data.score.fullTime.awayTeam}
        </div>

        <div className="away-team">{data.awayTeam.name}</div>
      </div>
    </div>
  );
}

export default MatchCard;
