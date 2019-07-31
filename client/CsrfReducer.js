import {
  SET_CSRF_TOKEN,
} from './CsrfActions';

const initialState = '';

export default function items(state = initialState, action) {
  switch (action.type) {
    case SET_CSRF_TOKEN:
      return action._csrf ? action._csrf : '';
    default:
      return state;
  }
}
