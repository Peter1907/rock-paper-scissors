import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from './newGame/newGame';
import displayReducer from './rules/rules';
import scoreReducer from './score/score';

const rootReducer = combineReducers({
  score: scoreReducer,
  display: displayReducer,
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
