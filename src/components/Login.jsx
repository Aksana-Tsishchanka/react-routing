import React from 'react';
import { browserHistory } from 'react-router';
import sendRequest from '../api/api';
import LOG_IN_KEY from '../consts/consts';
import { setLocalStorageItem } from '../utils/localStorageUtils';

export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      showError: false,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onHandleLogin = this.onHandleLogin.bind(this);
    this.onShowLoginError = this.onShowLoginError.bind(this);
  }

  onHandleLogin({ status }) {
    debugger;
    if (status === 200) {
      setLocalStorageItem(LOG_IN_KEY, '1');
      browserHistory.push('/todo');
    } else {
      this.setState({
        showError: true,
      });
    }
  }
  onShowLoginError() {
    this.setState({
      showError: true,
    });
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

    sendRequest('login', init, () => {})
      .then(response => this.onHandleLogin(response))
      .catch(this.onShowLoginError());
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
          { this.state.showError ? <div style={{ color: '#ef3933' }}>Your credentials are wrong</div> : '' }
        </form>
      </div>
    );
  }
}
