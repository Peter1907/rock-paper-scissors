import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

export default function Circle({ id }) {
  const icon = (`../images/icon-${id}.svg`);
  const className = useSelector((state) => state.game.class);

  return (
    <div className={`${className} ${id}-container`}>
      <div className={`${className} ${id}`}>
        <img src={icon} alt={`${id} icon`} />
      </div>
    </div>
  );
}

Circle.propTypes = {
  id: PropTypes.string.isRequired,
};
