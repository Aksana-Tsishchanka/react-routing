import React from 'react';
import { browserHistory } from 'react-router';
import sendRequest from '../api/api';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateAuthState = this.updateAuthState.bind(this);
  }

  updateAuthState(e) {
    e.preventDefault();

    sendRequest('logout')
      .then(console.log('user logout'));

    browserHistory.push({
      pathname: '/login',
    });
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.updateAuthState}>Log Out</button>
      </div>
    );
  }
}
