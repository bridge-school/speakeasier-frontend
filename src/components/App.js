import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import FormPage from './Form/FormPage';
import HomePageCtn from '../containers/HomePageCtn';

const App = () =>
  <Router>
    <Switch>
      <Route path="/submit-conference" component={FormPage}/>
      <Route path="/" component={HomePageCtn}/>
    </Switch>
  </Router>;


export default App;
