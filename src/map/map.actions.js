import store from '../store';

export const SET_ACTIVE_OPTION = 'SET_ACTIVE_OPTION';

export function setActiveOption(option) {
  store.dispatch({
    type: SET_ACTIVE_OPTION,
    option
  });
}
