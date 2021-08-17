import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';
import NoMatch from './pages/noMatch/noMatch';
import Quote from './pages/quote/quote';
import Calculator from './components/calc/calc';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Switch>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
