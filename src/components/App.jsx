import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {

  render() {
    return (<div>
      <Link to="login" activeStyle={{ color: '#53acff' }} >Log In</Link>
      <Link to="todo" activeStyle={{ color: '#53acff' }} > | TODO list</Link>
      <Link to="/todo/completed" activeStyle={{ color: '#53acff' }}> | Only completed items</Link>
      <Link to="/todo/incompleted" activeStyle={{ color: '#53acff' }}> | Only incompleted items</Link>
      {this.props.children}
    </div>);
  }
}
