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

export class Login extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         login : '',
         password : '',
      }
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onLogin = this.onLogin.bind(this);

   };
   onChangeInput({ target : {value, name} }) {
      this.setState({
         [name]: value,
      })
   }
   onLogin(e) {
      e.preventDefault();
      const init = {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.state),
      }   
      sendRequest('http://localhost:3000/login', init);
   }

   render() {
      return (
         <div>
            <h1>Login page...</h1>
            <form>
               User name: <input type="text" name="login" value={this.state.login} onChange={this.onChangeInput} />
               Password: <input type="text" name="password" value={this.state.password} 
               onChange={this.onChangeInput} />
               <button onClick = {this.onLogin}>Log in</button>
            </form> 
         </div>
      )
   }
}

export class TodoList extends React.Component {
   render() {
      return (
         <div>
            <h1>TO DO page...</h1>
         </div>
      )
   }
}

function processJson(json) {
  console.log(json);
}

export function sendRequest(url, init) {
   fetch(url, init)
  .then(response => response.json())
  .then(processJson);
}