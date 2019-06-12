import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FormPage from './Form/FormPage';
import EventPageCtn from '../containers/EventPageCtn';

const App = () =>
  <Router>
    <Switch>
      <Route path="/submit-conference" component={FormPage}/>
      <Route path="/" component={EventPageCtn}/>
    </Switch>
  </Router>;


export default App;
