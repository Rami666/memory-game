import "./SingleCard.css";

export default function SingleCard({ card }) {
  return (
    <div className="card">
      <div>
        <img className="front" alt="card front" src={card.src} />
        <img className="back" alt="card back" src="/img/cover.png" />
      </div>
    </div>
  );
}
