import React from 'react';
import ReactDOM from 'react-dom';
import App, {Login, TodoList} from './App.jsx';
import { Router, Route, browserHistory, IndexRoute  } from 'react-router';

const router = (
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {App} />
         <Route path = "login" component = {Login} />
         <Route path = "todo" component = {TodoList} />
      </Route>
   </Router>
	
);

ReactDOM.render(router, document.getElementById('app'));