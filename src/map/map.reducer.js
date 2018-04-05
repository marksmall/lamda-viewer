import { MAP_CLICKED, MAP_MOUSE_MOVED, MAP_UPDATE_LAYERS } from './map.actions';

const initialState = {
  point: null,
  selectedFeatures: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP_CLICKED:
      console.log('MAP REDUCER: ', state, action);
      return {
        ...state,
        point: action.point,
        selectedFeatures: action.selectedFeatures
      };
    case MAP_MOUSE_MOVED:
      return { ...state, point: action.point };

    case MAP_UPDATE_LAYERS:
      return state;

    default:
      return state;
  }
};

export default reducer;
