import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import LOG_IN_KEY from './consts/consts';
import { hasLocalStorageItem } from './utils/localStorageUtils';
import TodoList from './components/TodoList';

function requireAuth(nextState, replace) {
  if (!hasLocalStorageItem(LOG_IN_KEY)) {
    replace('/login');
  }
}

const rootEl = document.getElementById('app');
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/todo" component={TodoList} onEnter={requireAuth}>
        <Router name="todo" path="/todo/:filter" component={TodoList} />
      </Route>
    </Route>
  </Router>
), rootEl);

