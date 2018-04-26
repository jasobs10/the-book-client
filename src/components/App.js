import React from 'react';
import { AuthRoute, ProtectedRoute } from './auth/auth_routes.jsx';
import { Switch } from 'react-router-dom';
import Splash from './auth/splash.jsx';
import Main from './main/main.jsx';
import ModalRoot from './shared/modal_root.jsx';
import '../styles/base/App.css';

const App = () => (
  <div>
    <ModalRoot />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute exact path="/home" component={Main}/>
    </Switch>

  </div>

);

export default App;
