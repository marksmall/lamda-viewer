export const SET_ACTIVE_SATELLITE = 'SET_ACTIVE_SATELLITE';

export const setActiveSatellite = option => dispatch => {
  // console.log('Setting Active Satellite, ', option);
  dispatch({ type: SET_ACTIVE_SATELLITE, option });
};
