import Circle from './components/Circle';
import Header from './components/Header';
import Rules from './components/Rules';

function App() {
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
      <Header />
      <div className="circles" style={circlesStyle}>
        <img
          className="triangle"
          src="./images/bg-triangle.svg"
          alt="background triangle"
        />
        <Circle key={1} id="paper" />
        <Circle key={2} id="scissors" />
        <Circle key={3} id="rock" />
      </div>
      <Rules />
    </div>
  );
}

export default App;
