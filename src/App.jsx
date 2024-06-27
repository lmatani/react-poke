import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import './App.css';

function App() {
  return  (
    <Router>
      <Routes>
      <Route path="/" element={<Pokemon />} />
      </Routes>
    </Router>
  )

}
export default App;
