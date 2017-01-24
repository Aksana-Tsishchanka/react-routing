import React from 'react';
import ReactDOM from 'react-dom';
import App, {Login, TodoList} from './App.jsx';
import { Router, Route, browserHistory, hashHistory, IndexRoute  } from 'react-router';

ReactDOM.render((
   <Router history={browserHistory}>
      <Route path = "/" component = { App }>
         { /*<IndexRoute component = { Login } /> */}
         <Route path = "/login" component = {Login} />
         <Route path = "/todo" component = {TodoList} />
      </Route>
   </Router>	
), document.getElementById('app'));