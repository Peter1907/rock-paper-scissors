import Circle from './Circle';
import { v4 as uuid } from 'uuid';

function Main() {
  const circlesStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    width: '50rem',
    margin: '0 auto',
    justifyContent: 'center',
    position: 'relative',
  };

  return (
    <div className="container">
      <div className="circles" style={circlesStyle}>
        <img
          className="triangle"
          src="./images/bg-triangle.svg"
          alt="background triangle"
        />
        <Circle key={uuid()} id="paper" />
        <Circle key={uuid()} id="scissors" />
        <Circle key={uuid()} id="rock" />
      </div>
    </div>
  );
}

export default Main;
