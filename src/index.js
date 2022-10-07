import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';
import Header from './components/Header';
import Main from './components/MainPage';
import NewGame from './components/NewGame';
import Rules from './components/Rules';
import './index.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="NewGame/:name" element={<NewGame />} />
      </Routes>
    </BrowserRouter>
    <Rules />
  </Provider>,
);
