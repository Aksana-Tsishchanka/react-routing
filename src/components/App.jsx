import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
   render() {
      return (
          <div>
            <ul>
               <li><Link to="/login">Login</Link></li>
               <li><Link to="/todo">TO DO list</Link></li>
            </ul>   
           {this.props.children}
         </div>
      );
   }
}

class Login extends React.Component {
   render() {
      return (
         <div>
            <h1>Login page...</h1>
         </div>
      )
   }
}

class TodoList extends React.Component {
   render() {
      return (
         <div>
            <h1>TO DO page...</h1>
         </div>
      )
   }
}