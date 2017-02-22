import React from 'react';
import { browserHistory } from 'react-router';
import sendRequest from '../api/api';
import { deleteLocalStorageItem } from '../utils/localStorageUtils';
import LOG_IN_KEY from '../consts/consts';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.updateAuthState = this.updateAuthState.bind(this);
  }

  updateAuthState(e) {
    e.preventDefault();

    sendRequest('logout')
      .then(deleteLocalStorageItem(LOG_IN_KEY));

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
