const BASIC = 'redux/newGame/BASIC';
const ADVANCED = 'redux/newGame/ADVANCED';

const initialState = {
  basic: {
    options: ['paper', 'scissors', 'rock'],
    background: './images/bg-triangle.svg',
    rules: './images/image-rules.svg',
    class: 'bsc',
    title: 'ROCK PAPER SCISSORS',
  },
  advanced: {
    options: ['spock', 'scissors', 'paper', 'lizard', 'rock'],
    background: './images/bg-pentagon.svg',
    rules: './images/image-rules-bonus.svg',
    class: 'adv',
    title: 'ROCK PAPER SCISSORS LIZARD SPOCK',
  },
};

export default function gameReducer(state = [], action) {
  switch (action.type) {
    case BASIC:
      return ({
        ...initialState.basic,
      });
    case ADVANCED:
      return ({
        ...initialState.advanced,
      });
    default:
      return state;
  }
}

const getBasic = () => ({
  type: BASIC,
});

const getAdvanced = () => ({
  type: ADVANCED,
});

export { getAdvanced, getBasic };
