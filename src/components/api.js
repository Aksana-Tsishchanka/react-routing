export default function sendRequest(url, init = {}) {
  const extendInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include', /* to send cookies */
    ...init,
  };

  return fetch(`http://localhost:3000/${url}`, extendInit)
        .then(response => response);
}
