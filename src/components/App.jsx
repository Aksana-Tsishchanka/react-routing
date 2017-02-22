import React from 'react';
import { Link } from 'react-router';

export default function App(props) {
  return (
    <div>
      <Link to="/login" activeStyle={{ color: '#53acff' }} >Log In</Link>
      { props.children }
    </div>
  );
}
