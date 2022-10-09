/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getAdvanced, getBasic } from '../redux/newGame/newGame';
import Circle from './Circle';

export default function Main() {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  const changeMode = () => {
    (mode === 'basic') ? dispatch(getBasic()) : dispatch(getAdvanced());
  };

  useEffect(() => {
    changeMode();
  }, [mode]);

  const state = useSelector((state) => state.game.options || []);
  const background = useSelector((state) => state.game.background);
  const className = useSelector((state) => state.game.class);
  return (
    <div className={`${className} container`}>
      <div className={`${className} circles`}>
        <img
          className={`${className} background`}
          src={background}
          alt="background shape"
        />
        {state.map((element, index) => (
          <Link
            className={`${className} link-${index + 1}`}
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
