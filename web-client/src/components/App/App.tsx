import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../nav-bar/nav-bar';
import Login from '../forms/login-form/Login';
import Register from '../forms/reg-form/Registration';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
