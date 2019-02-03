import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import ScrollToTopRoute from './History';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Projects from './components/pages/Projects';

const Routes = props => (
  <Switch>
    <ScrollToTopRoute path="/" exact component={Home} />
    <ScrollToTopRoute path="/Home" component={Home} />
    <ScrollToTopRoute path="/About" component={About} />
    <ScrollToTopRoute path="/Contact" component={Contact} />
    <ScrollToTopRoute path="/Projects" component={Projects} />
  </Switch>
);

export default Routes;
