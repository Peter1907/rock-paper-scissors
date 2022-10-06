import PropTypes from 'prop-types';

export default function Circle({ id }) {
  const circleStyle = {
    borderRadius: '50%',
    width: '10rem',
    height: '10rem',
    margin: '1.2rem 2.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f3f3f3',
    color: 'navy',
  };

  return (
    <div className={`${id}-container`} style={circleStyle}>
      <div className={id}>
        <img src={`./images/icon-${id}.svg`} alt={`${id} icon`} />
      </div>
    </div>
  );
}

Circle.propTypes = {
  id: PropTypes.string.isRequired,
};
