/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Circle from './Circle';
import getWinner from '../logic';
import { increaseScore } from '../redux/score/score';

export default function NewGame() {
  const [style, setStyle] = useState({
    opacity: 0,
  });
  const [gameStyle, setGameStyle] = useState({});
  const [holderStyle, setHolderStyle] = useState({
    opacity: 1,
  });
  const [resultStyle, setResultStyle] = useState({
    transform: 'scale(0)',
  });
  const [header, setHeader] = useState('');
  const state = useSelector((state) => state.game.options);
  const random = Math.floor(Math.random() * state.length);
  const [computerChoice] = useState(state[random]);

  const update = () => new Promise((res) => {
    setTimeout(() => {
      setStyle({
        opacity: 1,
      });
      setHolderStyle({
        opacity: 0,
      });
      setResultStyle({
        transform: 'scale(1)',
        width: '100%',
      });
      setGameStyle({
        gap: '3.5rem',
      });
      res();
    }, 1500);
  });

  const { name } = useParams();

  const dispatch = useDispatch();
  const upadteScore = () => {
    const winner = getWinner(name, computerChoice);
    setHeader(winner);
    setTimeout(() => {
      if (winner === 'YOU WIN') {
        dispatch(increaseScore());
      }
    }, 2000);
  };

  useEffect(() => {
    update();
    upadteScore();
  }, []);

  return (
    <section className="game" style={gameStyle}>
      <div className="player-choice">
        <h5>YOU PICKED</h5>
        <Circle key={uuid()} id={name} />
      </div>
      <div className="result" style={resultStyle}>
        <h1>{header}</h1>
        <Link to="/" className="again-btn">PLAY AGAIN</Link>
      </div>
      <div className="computer-choice">
        <h5>THE HOUSE PICKED</h5>
        <div className="circle-placeholder" style={holderStyle} />
        <div style={style}>
          <Circle key={uuid()} id={computerChoice} />
        </div>
      </div>
    </section>
  );
}
