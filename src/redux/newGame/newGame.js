const BASIC = 'redux/newGame/BASIC';
const ADVANCED = 'redux/newGame/ADVANCED';

const initialState = {
  basic: ['rock', 'paper', 'scissors'],
  advanced: ['rock', 'paper', 'scissors', 'lizard', 'spock'],
};

export default function gameReducer(state = [], action) {
  switch (action.type) {
    case BASIC:
      return ([...initialState.basic]);
    case ADVANCED:
      return ([...initialState.advanced]);
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
