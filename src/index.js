import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Main from './components/MainPage';
import Rules from './components/Rules';
import './index.css';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <Main />
      <Rules />
    </Provider>
  </React.StrictMode>,
);
