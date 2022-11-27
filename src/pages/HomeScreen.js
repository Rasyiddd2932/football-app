import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import TeamCard from "../components/TeamCard";
import "./HomeScreen.css";

const Home = () => {
  // deklaras state yang akan digunakan
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // import api dari folder api/axios.js, mengambil data dari api https://api.football-data.org/v2/teams
    api
      .get("/teams")
      .then((response) => {
        // apabila api memberikan response, set data response ke dalam state
        setFeatured(response.data.teams);
      })
      // request selesai, loading di set ke false
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div className="banner">
        <div className="grid-menu">
          <Link to="/competitions" className="menu-item">
            <div className="title">
              <h5>See Competitions</h5>
            </div>
            <img
              src="https://cdn.shopify.com/s/files/1/0625/5971/5549/files/footballhome_1800x.jpg?v=1644933098"
              alt="comp"
            />
          </Link>

          <Link to="/matches" className="menu-item">
            <div className="title">
              <h5>Worldcup Schedules</h5>
            </div>
            <img
              src="https://media.kompas.tv/library/image/content_article/article_img/20220616125541.jpg"
              alt="wc2022"
            />
          </Link>
        </div>
      </div>
      <h2>Featured teams</h2>
      <div className="team-list">
        {/* looping data yang didapat dari api ke komponen TeamCard, 
            passing data team ke dalam props TeamCard bernama data */}
        {featured.map((team) => (
          // key berfungsi untuk membedakan komponen 1 dengan yang lain
          <TeamCard data={team} key={team.id} />
        ))}
      </div>
      {/* apabila state loading bernilai true, render tulisan loading */}
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Home;
