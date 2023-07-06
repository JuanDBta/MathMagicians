import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import './App.css';

function App() {
  return (
    <div className="body">
      <Router>
        <nav className="navbar">
          <h1 className="navbar-title">Math Magicians</h1>
          <ul className="navbar-list">
            <li><Link to="/home" className="navbar-item">Home</Link></li>
            <li><Link to="/calculator" className="navbar-item">Calculator</Link></li>
            <li><Link to="/quote" className="navbar-item">Quote</Link></li>
          </ul>
        </nav>

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
