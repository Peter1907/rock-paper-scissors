import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getBasic } from '../redux/newGame/newGame';
import Circle from './Circle';

function Main() {
  const circlesStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    width: '50rem',
    margin: '0 auto',
    justifyContent: 'center',
    position: 'relative',
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBasic())
  }, []);

  const state = useSelector((state) => state.game);

  return (
    <div className="container">
      <div className="circles" style={circlesStyle}>
        <img
          className="triangle"
          src="./images/bg-triangle.svg"
          alt="background triangle"
        />
        {state.map((element, index) => (
          <Link
            className={`link-${index + 1}`}
            key={uuid()}
            to={`NewGame/${element}`}
          >
            <Circle id={element} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Main;
