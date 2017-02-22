import React from 'react';
import { Link } from 'react-router';
import sendRequest from '../api/api';
import { hasLocalStorageItem } from '../utils/localStorageUtils';
import LOG_IN_KEY from '../consts/consts';


function isUserLogIn() {
  debugger;
  return sendRequest('login')
    .then(response => response)
    .then(response => {
      if (response.status === 200) {
        return true;
      } return false;
    });
}

function renderContent(children) {
  debugger;
  if (hasLocalStorageItem(LOG_IN_KEY)) {
    return children;
  } else if (isUserLogIn()) {
    return children;
  }
  return (
    <div>
      Please
      <Link to="/login">log in before!</Link>
    </div>
  );
}

export default function Authorized({ children }) {
  return (
    <div>
      { renderContent(children) }
    </div>
  );
}
