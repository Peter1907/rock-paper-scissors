const TOGGLE = 'redux/mode/TOGGLE';

export default function modeReducer(state = 'basic', action) {
  switch (action.type) {
    case TOGGLE:
      return (state === 'basic') ? 'advanced' : 'basic';
    default:
      return state;
  }
}

const toggleMode = () => ({
  type: TOGGLE,
});

export { toggleMode };
