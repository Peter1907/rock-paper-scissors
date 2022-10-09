import { useDispatch } from 'react-redux';
import { toggleMode } from '../redux/mode/mode';

const ModeSelector = () => {
  const dispatch = useDispatch();

  const changeMode = () => {
    dispatch(toggleMode());
  };

  return (
    <button
      type="button"
      className="mode-btn"
      onClick={changeMode}
    >
      CHANGE MODE
    </button>
  )
};

export default ModeSelector;
