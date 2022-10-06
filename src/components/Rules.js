import { useDispatch, useSelector } from 'react-redux';
import { toggleDisplay } from '../redux/rules/rules';

export default function Rules() {
  const dispatch = useDispatch();

  const style = useSelector((state) => state.display);

  const changeDisplay = () => {
    dispatch(toggleDisplay());
  };

  return (
    <section className="rules-container">
      <button type="button" onClick={changeDisplay}>RULES</button>
      <div className="rules" style={style}>
        <h2>RULES</h2>
        <button type="button" className="close-btn" onClick={changeDisplay}>
          <img src="./images/icon-close.svg" alt="close sign" />
        </button>
        <img src="./images/image-rules.svg" alt="rules img" />
      </div>
      <div className="screen" style={style} />
    </section>
  );
}
