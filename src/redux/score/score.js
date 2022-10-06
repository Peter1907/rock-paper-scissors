const INCREMENT = 'redux/score/INCREMENT';
const RESET = 'redux/score/RESET';

export default function scoreReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      state += 1;
      break;
    case RESET:
      state = 0;
      break;
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
