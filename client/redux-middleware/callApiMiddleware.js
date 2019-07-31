import fetch from 'isomorphic-fetch';

const API_URL = '/api';

async function callAPI(endpoint, method = 'GET', body) {
  /*
  return fetch(`${API_URL}/${endpoint}`, {
    headers: {
      'content-type': 'application/json',
    },
    method,
    credentials: 'include',
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }

    return json;
  })
  .catch(error => Promise.reject(error));
  */

  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      headers: {
        'content-type': 'application/json',
      },
      method,
      credentials: 'include',
      body: JSON.stringify(body),
    });
    const json = await response.json();

    if (!response.ok) {
      throw new Error(json);
    } else {
      return json;
    }
  } catch (err) {
    return err;
  }
}

function requestAPI(requestType) {
  return {
    type: requestType,
  };
}

export const CALL_API = Symbol('CALL_API');

/*
export default store => next => (action) => {
  const request = action[CALL_API];

  if (!request) {
    return next(action);
  }

  const { dispatch } = store;
  const { endpoint, method, body, types } = request;
  const [requestType, successType, errorType] = types;

  if (method !== 'GET') {
    const _csrf = store.getState()._csrf;
    Object.assign(body, { _csrf });
  }

  dispatch(requestAPI(requestType));

  return callAPI(endpoint, method, body)
    .then(
      (response) => {
        next({
          response: response.response,
          type: successType,
        });
      },
      error =>
        next({
          error: error.error || 'Error',
          type: errorType,
        })
    );
};
*/

export default store => next => async (action) => {
  const request = action[CALL_API];

  if (!request) {
    return next(action);
  }

  const { dispatch } = store;
  const { endpoint, method, body, types } = request;
  const [requestType, successType, errorType] = types;

  if (method !== 'GET') {
    const _csrf = store.getState()._csrf;
    Object.assign(body, { _csrf });
  }

  dispatch(requestAPI(requestType));

  try {
    const response = await callAPI(endpoint, method, body);

    return next({
      response: response.response,
      type: successType,
    });
  } catch (err) {
    return next({
      error: err.error || 'Error',
      type: errorType,
    });
  }
};
