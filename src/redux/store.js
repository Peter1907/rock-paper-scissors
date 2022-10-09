import { configureStore, combineReducers } from '@reduxjs/toolkit';
import modeReducer from './mode/mode';
import gameReducer from './newGame/newGame';
import displayReducer from './rules/rules';
import scoreReducer from './score/score';

const rootReducer = combineReducers({
  score: scoreReducer,
  display: displayReducer,
  game: gameReducer,
  mode: modeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
