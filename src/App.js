import React from 'react';
import {
  createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Link, Outlet,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quotes';
import './App.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/home" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Route>,
    ),
  );

  return (
    <div className="body">
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => (
  <>
    <nav className="navbar">
      <h1 className="navbar-title">Math Magicians</h1>
      <ul className="navbar-list">
        <li><Link to="/home" className="navbar-item">Home</Link></li>
        <li><Link to="/calculator" className="navbar-item">Calculator</Link></li>
        <li><Link to="/quote" className="navbar-item">Quote</Link></li>
      </ul>
    </nav>
    <div>
      <Outlet />
    </div>
  </>
);

export default App;
