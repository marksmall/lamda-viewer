const MAP_CLICKED = 'MAP_CLICKED';
const MAP_MOUSE_MOVED = 'MAP_MOUSE_MOVED';

export const onMapClick = point => ({
  type: MAP_CLICKED,
  point
});

export const onMapMouseMove = point => ({
  type: MAP_MOUSE_MOVED,
  point
});

const initialState = {
  point: null
};

const reducer = (state = initialState, action) => {
  console.log('MAP REDUCER: ', state, action);
  switch (action.type) {
    case MAP_CLICKED:
      return {
        ...state,
        point: action.point
      };
    case MAP_MOUSE_MOVED:
      return {
        ...state,
        point: action.point
      };

    default:
      return state;
  }
};

export default reducer;
