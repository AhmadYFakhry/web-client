import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../nav-bar/nav-bar';
import Login from '../forms/login-form/Login';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
