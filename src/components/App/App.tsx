import React, { useEffect } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import firebase from '../../firebase';
import Login from '../forms/login-form/Login';
import Register from '../forms/reg-form/Registration';
import FaqPage from '../pages/faq';
import ProfilePage from '../pages/profile';
import HomePage from '../pages/home'
import './App.css';
import Filler from '../pages/filler';
import ProductPage from '../pages/product';

function App() {
  useEffect(() => {
    console.log(firebase);
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/faq' component={FaqPage} />
          <Route exact path='/product' component={ProductPage} />
          <Route path="/profile/" component={ProfilePage}/>
          <Route path="/404" component={Filler} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
