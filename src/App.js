import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
}
  from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Main from './components/MainPage';
import NewGame from './components/NewGame';
import Rules from './components/Rules';
import ModeSelector from './components/ModeSelector';
import MobileNewGame from './components/MobileNewGame';

export default function App() {
  return (
    <section>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          {(window.innerWidth <= 850) && <Route path="/NewGame/:name" element={<MobileNewGame />} />}
          {(window.innerWidth > 850) && <Route path="/NewGame/:name" element={<NewGame />} />}
        </Routes>
      </BrowserRouter>
      <Rules />
      <ModeSelector />
    </section>
  );
}
