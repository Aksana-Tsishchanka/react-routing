import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './components/App';
import Login from './components/Login';
import TodoList from './components/TodoList';


const rootEl = document.getElementById('app');

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/login" component={Login} />
      <Route path="/todo" component={TodoList}>
        <Router name="todo" path="/todo/:filter" component={TodoList} />
      </Route>
    </Route>
    {/* only for built app */}
    <Route path="*" component={App} />
  </Router>
), rootEl);

