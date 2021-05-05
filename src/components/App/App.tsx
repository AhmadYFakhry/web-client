import React, { useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from '../nav-bar/nav-bar';
import firebase from '../../firebase';
import Login from '../forms/login-form/Login';
import Register from '../forms/reg-form/Registration';
import FaqPage from '../pages/faq';
import ProfilePage from '../pages/profile';

import './App.css';
import Filler from '../pages/filler';

function App() {
  useEffect(() => {
    console.log(firebase);
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/faq' component={FaqPage} />
          <Route path="/profile/" component={ProfilePage}/>
          <Route path="/404" component={Filler} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
