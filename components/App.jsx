import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import About from './About';
import UserForm from './UserForm';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/About" component={About} />
        <Route path="/About" component={About} />
        <Route path="/Form" component={UserForm} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
