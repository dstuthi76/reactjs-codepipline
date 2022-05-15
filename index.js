import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Categories from './components/Categories'
import A from './components/Announcement'
ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/Home" exact={true} element={<Home />} />
      <Route path="/" exact={true} element={<Login />} />
      <Route path="/Register" exact={true} element={<Register />} />
      <Route path="/categories" exact={true} element={<Categories />} />
      <Route path="/Agriculture" exact={true} element={<A/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

