import React from 'react';
import './App.css';
import { Survey } from './components/surveyContainer/survey';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { SurveyUserData } from './components/surveyUserData/surveyUserData';
import { Questions } from './components/questionsContainer/questions';
import { Report } from './components/reportContainer/report';

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route exact path="/" component={Survey}/>
        <Route exact path="/survey" component={SurveyUserData}/>
        <Route exact path="/question/:id" component={Questions}/>
        <Route exact path="/report" component={Report}/>
      </Switch>
  </Router>
  );
}

export default App;
