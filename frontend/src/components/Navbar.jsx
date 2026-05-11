function Navbar({ selectedLeague, setSelectedLeague }) {
    const leagues =[
        "All",
        "Premier League",
        "La Liga",
        "Serie A",
        "Champions League",
    ];

    return (
        <div className="navbar-wrapper">
        <div className="navbar">
            {leagues.map((league) => (
            <button
                key={league}
                className={`nav-button ${
                selectedLeague === league ? "active" : ""
                    }`}
                onClick={() => setSelectedLeague(league)}
                        >
                {league}
            </button>
            ))}
        </div>
        </div>
    );
}

export default Navbar;