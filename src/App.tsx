import React from 'react';
import './App.css';
import { Survey } from './components/surveyContainer/survey';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import { SurveyUserData } from './components/surveyUserData/surveyUserData';
import { Questions } from './components/questionsContainer/questions';
import { Report } from './components/reportContainer/report';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Survey}/>
        <Route exact path="/survey" component={SurveyUserData}/>
        <Route exact path="/survey/question/:id" component={Questions}/>
        <Route exact path="/survey/report" component={Report}/>
      </Switch>
  </Router>
  );
}

export default App;
