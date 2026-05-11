import "./MatchCard.css";

function MatchCard({ match }) {
  return (
    <div className="match-card">
      <h3 className="match-title">{match.title}</h3>
      <p className="match-competition">{match.competition?.name}</p>

      <div
        className="match-video"
        dangerouslySetInnerHTML={{ __html: match.video }}
      />
    </div>
  );
}

export default MatchCard;