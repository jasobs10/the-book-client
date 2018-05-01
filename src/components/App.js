import React from 'react';
import { AuthRoute, ProtectedRoute } from './auth/auth_routes.jsx';
import { Switch, Route } from 'react-router-dom';
import Splash from './auth/splash.jsx';
import Main from './main/main.jsx';
import ModalRoot from './shared/modal_root.jsx';
import Footer from './shared/footer.jsx';
import '../styles/base/App.css';

// add protected routes here, but should have the footer and header

const App = () => (
  <div>
    <ModalRoot />
    <Switch>
      <AuthRoute exact path="/" component={Splash} />
      <ProtectedRoute path="/" component={Main}/>
    </Switch>
    <Footer />
  </div>

);

export default App;
