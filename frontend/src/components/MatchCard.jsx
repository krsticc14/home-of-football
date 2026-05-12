import "./MatchCard.css";

function MatchCard({ match }) {

  const safeVideo = match.video?.replace("http://", "https://");

  return (
    <div className="match-card">
      <h3 className="match-title">{match.title}</h3>
      <p className="match-competition">{match.competition?.name}</p>

      <div
        className="match-video"
        dangerouslySetInnerHTML={{ __html: safeVideo }}
      />
    </div>
  );
}

export default MatchCard;