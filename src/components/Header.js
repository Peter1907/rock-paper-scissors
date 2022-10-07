import { useSelector } from 'react-redux';

export default function Header() {
  const score = useSelector((state) => state.score);

  return (
    <header className="header">
      <h1>ROCK<br />PAPER<br />SCISSORS</h1>
      <div className="score-container">
        <p className="score-title">SCORE</p>
        <p className="score">{score}</p>
      </div>
    </header>
  );
}
