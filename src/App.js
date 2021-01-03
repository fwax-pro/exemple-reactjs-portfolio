import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {
  ABOUT,
  EDUCATION,
  EXPERIENCE
} from './constants/routes';

import AboutPage from './components/About';
import EducationPage from './components/Education';
import ExperiencePage from './components/Experience';

import Layout from './components/Layout';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path={ABOUT} component={AboutPage} />
            <Route path={EXPERIENCE} component={ExperiencePage} />
            <Route path={EDUCATION} component={EducationPage} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
