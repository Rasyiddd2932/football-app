import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/HomeScreen";
import Competitions from "./pages/Competitions";
import About from "./pages/About";
import TeamDetail from "./pages/TeamDetail";
import CompetitionDetail from "./pages/CompetitionDetail";
import Matches from "./pages/Matches";

function App() {
  return (
    <div className="App">
      {/* header */}
      <header>⚽ Football App</header>
      <main className="main-container">
        {/* deklarasi route yang digunakan*/}
        <Routes>
          {/* home */}
          <Route path="/" element={<Home />} />

          {/* halaman detail team, 
              contoh: team/1 
                      team/2 
                      team/3
          */}
          <Route path="/team/:id" element={<TeamDetail />} />

          <Route path="/competitions" element={<Competitions />} />

          {/* halaman detail competition, 
              contoh: competition/1 
                      competition/2 
                      competition/3
          */}
          <Route path="/competition/:id" element={<CompetitionDetail />} />

          <Route path="/matches" element={<Matches />} />

          <Route path="/about" element={<About />} />
          {/* apabila tidak ada yang sesuai, akan tampil 404 */}
          <Route path="*" element={<div>404 Not found</div>} />
        </Routes>
      </main>
      {/* footer */}
      <footer>
        <div className="navigation">
          {/* navlink untuk berpindah route/halaman */}
          <NavLink to="/" className="navigation-item">
            Home
          </NavLink>
          <NavLink to="/competitions" className="navigation-item">
            Competition
          </NavLink>
          <NavLink to="/matches" className="navigation-item">
            Matches
          </NavLink>
          <NavLink to="/about" className="navigation-item">
            About
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
