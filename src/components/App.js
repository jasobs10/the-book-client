import React from 'react';
import { AuthRoute, ProtectedRoute } from './auth/auth_routes.jsx';
import { Switch } from 'react-router-dom';
import Splash from './auth/splash.jsx';
import '../styles/base/App.css';

const App = () => (

  <Switch>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute exact path="/home"/>
  </Switch>

);

export default App;
