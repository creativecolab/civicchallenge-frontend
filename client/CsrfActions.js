export const SET_CSRF_TOKEN = 'SET_CSRF_TOKEN';

export function setToken(_csrf) {
  return {
    type: SET_CSRF_TOKEN,
    _csrf,
  };
}
