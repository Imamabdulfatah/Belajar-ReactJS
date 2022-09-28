import React from 'react';
// import logo from '../../../assets/img/logo/logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from 'react-redux';
// memangil redux dari folder all
import {store} from '../../../config/redux'

// redux-thunk
// -https://github.com/reduxjs/redux-thunk

/// docs firebase authentification
// - https://firebase.google.com/docs/auth/?authuser=0&hl=en

function App() {
  return (
    <Provider store={store}>
       <Router>
      <div>
        <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
    </Provider>   
  );
}

export default App;
