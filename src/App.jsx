import React from 'react';
import './App.css';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
import Main from './page/Main';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollToTop from './utils/ScrollToTop';
import ProjectPage from './page/ProjectPage';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={ Main } />
        <Route exact path="/projectPage" component={ ProjectPage } />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
