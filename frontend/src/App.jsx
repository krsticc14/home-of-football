import { useEffect, useState } from "react";
import { getHighlights } from "./services/api";
import MatchCard from "./components/MatchCard";
import Navbar from "./components/Navbar";
import "./App.css";
import { FaHome } from "react-icons/fa";

function App() {
  const [matches, setMatches] = useState([]);
  const [selectedLeague, setSelectedLeague] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getHighlights();
        setMatches(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

 const filteredMatches = matches
  .filter((match) => {
    if (selectedLeague === "All") return true;

    return match.competition?.name
      ?.toLowerCase()
      .includes(selectedLeague.toLowerCase());
  })
  .filter((match) => {
   const searchText = (searchQuery || searchInput || "").toLowerCase();

   if(!searchText) return true;

    return match.title
      ?.toLowerCase()
      .includes(searchText);
  });

  const trendingMatches = [...matches] 
  .sort((a, b) =>  new Date(b.date) - new Date(a.date))
  .slice(0,5);

  return (
    <div className="app-container">
      <h1 className="app-title">
        <FaHome className="home-icon" /> Home of Football: Highlights
      </h1>

      <div className="section section-trending">
      <h2 className="section-title"> Trending Matches </h2>
      <div className="matches-grid">
      {trendingMatches.map((match, index) => (
        <MatchCard key={index} match={match} />
      ))}
      </div>
      </div>
      
      <div className="section section-controls">
      <Navbar 
        selectedLeague={selectedLeague}
        setSelectedLeague={setSelectedLeague}
      />

      <div className="search-container">
      <input
      className="search-input" 
        type="text"
        placeholder="Search for a team..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setSearchQuery(searchInput);
          }
        }}
        style={{ marginBottom: "20px", padding: "8px", width: "200px"}}
        />

        <button className="search-button" onClick={() => setSearchQuery(searchInput)}>Search</button>
        </div>
        </div>
        
        <div className="section section-all">
          <h2 className="section-title"> All Matches </h2>
        <div className="matches-grid">
      {filteredMatches.map((match, index) => {
        return <MatchCard key={index} match={match} />;
      })}
      </div>
      </div>
    </div>
  );
}

export default App;