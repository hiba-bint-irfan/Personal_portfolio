import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';


function RoutePages() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
        
      </Routes>
    </Router>
  );
}

export default RoutePages;
