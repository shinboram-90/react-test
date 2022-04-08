import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Films from './Views/Films';
import FilmsList from './Views/Films/List';
import FilmDetail from './Views/Films/Detail';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="films" element={<Films />}>
          <Route path="list" element={<FilmsList />} />
        </Route>
        <Route path="films/:filmId" element={<FilmDetail />} />
      </Routes>
    </div>
  );
};

export default App;
