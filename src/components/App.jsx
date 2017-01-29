import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

  render() {
    return (<div>
        <ul>
          <li><Link to="login">Log In</Link></li>
          <li><Link to="todo">TODO list</Link></li>
        </ul>
        {this.props.children}
      </div>);
  }
}
