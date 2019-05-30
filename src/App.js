import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ConferenceSubmitPage from './ConferenceSubmitPage';
import ConferenceListPage from './ConferenceListPage';

const App = () =>
  <Router>
    <Route exact path="/" component={ConferenceListPage}/>
    <Route path="/submit-conference" component={ConferenceSubmitPage}/>
  </Router>;


export default App;
