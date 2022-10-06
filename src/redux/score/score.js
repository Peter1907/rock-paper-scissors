const INCREMENT = 'redux/score/INCREMENT';
const RESET = 'redux/score/RESET';

export default function scoreReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case RESET:
      return 0;
    default:
      return state;
  }
}

const increaseScore = () => ({
  type: INCREMENT,
});

const resetScore = () => ({
  type: RESET,
});

export { increaseScore, resetScore };
