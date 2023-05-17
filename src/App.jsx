import React from 'react';
import './App.css';
import { BrowserRouter as Redirect, Route, Switch } from 'react-router-dom';
import Main from './page/Main';


function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={ Main } />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
