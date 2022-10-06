const TOGGLE = 'redux/rules/TOGGLE';

const initialState = {
  display: 'none',
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE:
      state = {
        ...state,
        display: (state.display === 'none') ? 'block' : 'none',
      };
      return state;
    default:
      return state;
  };
};

const toggleDisplay = () => ({
    type: TOGGLE,
});

export { toggleDisplay };
