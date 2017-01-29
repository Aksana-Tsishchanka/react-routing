import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './App.jsx';
import Login from './Login.jsx';
import TodoList from './TodoList.jsx';


const rootEl = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <Route path="/login" component={Login} />
        <Route path="/todo" component={TodoList} />
    </Route>
  </Router>
), rootEl);

