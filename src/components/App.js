import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import FormPage from './FormPage';
import HomePageCtn from '../containers/HomePageCtn';

const App = () =>
  <Router>
    <Route exact path="/" component={HomePageCtn}/>
    <Route path="/submit-conference" component={FormPage}/>
  </Router>;


export default App;
