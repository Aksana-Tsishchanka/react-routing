import React from 'react';
import { browserHistory } from 'react-router';
import sendRequest from './api';

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }


  onChangeInput({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  onLogin(e) {
    e.preventDefault();
    const init = {
      method: 'POST',
      body: JSON.stringify(this.state),
    };

    sendRequest('login', init)
      .then(response => response);
    browserHistory.push('todo');
  }

  render() {
    return (
      <div>
        <h1>Login page...</h1>
        <form>
          <div>
            <label htmlFor="login">User name:</label>
            <input
              type="text"
              name="login"
              value={this.state.login}
              onChange={this.onChangeInput}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.onChangeInput}
            />
          </div>
          <button onClick={this.onLogin}>Log in</button>
        </form>
      </div>
    );
  }
}
