const TOGGLE = 'redux/rules/TOGGLE';

const initialState = {
  display: 'none',
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      return state = {
        ...state,
        display: (state.display === 'none') ? 'block' : 'none',
      };
    default:
      return state;
  };
};

const toggleDisplay = () => {
  return ({
    type: TOGGLE,
  });
};

export { toggleDisplay };
