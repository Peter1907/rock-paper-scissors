import { configureStore, combineReducers } from '@reduxjs/toolkit';
import displayReducer from './rules/rules';
import scoreReducer from './score/score';

const rootReducer = combineReducers({
  score: scoreReducer,
  display: displayReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
