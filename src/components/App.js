import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FormPage from './Form/FormPage';
import EventPageCtn from '../containers/EventPageCtn';
import EventDetailsPage from './EventDetails/EventDetailsPage';

const App = () =>
  <Router>
    <Switch>
      <Route path="/" exact component={EventPageCtn}/>
      <Route path="/submit-conference" component={FormPage}/>
      <Route path="/conference/:id" component={EventDetailsPage} />
    </Switch>
  </Router>;


export default App;
