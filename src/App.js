import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

//import AnotherPage from './components/Pages/AnotherPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;
