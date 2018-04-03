export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = () => dispatch => {
  console.log('Dispatching toggle menu');
  dispatch({ type: TOGGLE_MENU });
};
