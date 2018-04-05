import { SET_ACTIVE_SATELLITE } from './toggle.actions';

import data from '../data.json';

const satellites = [
  {
    name: 'landsat',
    label: 'Landsat',
    layer: 'Landsat8_Desc_filtr2',
    url: 'mapbox://vincentsarago.8ib6ynrs'
  },
  {
    name: 'sentinel',
    label: 'Sentinel',
    layer: 'Sentinel2_Grid',
    url: 'mapbox://vincentsarago.0qowxm38'
  },
  {
    name: 'cbers',
    label: 'CBERS',
    layer: 'cbers_grid-41mvmk',
    url: 'mapbox://vincentsarago.8ib6ynrs'
  }
];

export const INITIAL_STATE = {
  // data,
  satellites,
  active: satellites[0]
};

export default (state = INITIAL_STATE, action) => {
  // console.log('Toggle Reducer: ', state, action);
  switch (action.type) {
    case SET_ACTIVE_SATELLITE:
      return { ...state, active: action.option };

    default:
      return state;
  }
};
