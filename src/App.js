import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Views/Home';
import Films from './Views/Films';
import FilmsList from './Views/Films/List';
import FilmDetail from './Views/Films/Detail';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="films" element={<Films />}>
          <Route path="list" element={<FilmsList />} />
        </Route>
        <Route path="films/:filmId" element={<FilmDetail />} />
      </Routes>
    </div>
  );
};

// I would normally nest the :filmId in the films parent route but following the given architecture the expected rendering was not possible.
export default App;
