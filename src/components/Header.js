import { useSelector } from 'react-redux';

export default function Header() {
  const score = useSelector((state) => state.score);
  const className = useSelector((state) => state.game.class);
  let title = useSelector((state) => state.game.title);

  return (
    <header className={`${className} header`}>
      <h1 className={`${className} title`}>{title}</h1>
      <div className="score-container">
        <p className="score-title">SCORE</p>
        <p className="score">{score}</p>
      </div>
    </header>
  );
}
