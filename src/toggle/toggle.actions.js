export const SET_ACTIVE_OPTION = 'SET_ACTIVE_OPTION';

export const setActiveOption = option => dispatch => {
  dispatch({
    type: SET_ACTIVE_OPTION,
    option
  });
};
