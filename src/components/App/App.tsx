import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import Navbar from '../nav-bar/nav-bar';
import firebase from '../../firebase';
import Login from '../forms/login-form/Login';
import Register from '../forms/reg-form/Registration';
import './App.css';

function App() {
  useEffect(() => {
    console.log(firebase);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
      </BrowserRouter>
    </div>
  );
}

export default App;
