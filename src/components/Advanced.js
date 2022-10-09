import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getAdvanced } from '../redux/newGame/newGame';
import Circle from './Circle';

export default function Advanced() {
  const dispatch = useDispatch();
  dispatch(getAdvanced());

  const state = useSelector((state) => state.game.options);
  const background = useSelector((state) => state.game.background);
  return (
    <div className="adv container">
      <div className="adv circles">
        <img
          className="pentagon"
          src={background}
          alt="background pentagon"
        />
        {state.map((element, index) => (
          <Link
            className={`adv link-${index + 1}`}
            key={uuid()}
            to={`adv NewGame/${element}`}
          >
            <Circle id={element} />
          </Link>
        ))}
      </div>
    </div>
  );
}
