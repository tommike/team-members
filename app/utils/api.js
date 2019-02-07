const API = {};

function handleJSONResponse(response) {
  return response.json().then(json => {
    if (response.ok) {
      return json;
    }

    return Promise.reject(
      Object.assign({}, json, {
        status: response.status,
        statusText: response.statusText,
      })
    );
  });
}

API.fetchMembers = function() {
  return fetch('http://jsonplaceholder.typicode.com/users')
    .then(handleJSONResponse)
    .then(incomingData => incomingData)
    .catch(error => Promise.reject(error.error || error.statusText));
};

export function getInitialData() {
  return API.fetchMembers().then(members => ({
    members,
  }));
}

export default API;
