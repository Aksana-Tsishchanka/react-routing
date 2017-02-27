function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export default function sendRequest(url, options = {}) {
  const extendOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', /* to send cookies */
    ...options,
  };

  return fetch(`http://localhost:3000/${url}`, extendOptions)
        .then(response => checkStatus(response));
}
