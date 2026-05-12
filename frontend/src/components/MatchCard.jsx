import "./MatchCard.css";

function MatchCard({ match }) {
  return (
    <div className="match-card">
      <h3 className="match-title">{match.title}</h3>
      <p className="match-competition">{match.competition?.name}</p>

      <img 
      src={match.thumbnail}
      alt={match.title}
      className="match-thumbnail"
      />

      <a 
      href={match.url}
      target="_blank"
      rel="noopener noreferrer"
      className="watch-button"
      > Watch Highlights</a>
    </div>
  );
}

export default MatchCard;