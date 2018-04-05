export const MAP_CLICKED = 'MAP_CLICKED';
export const MAP_MOUSE_MOVED = 'MAP_MOUSE_MOVED';
export const MAP_UPDATE_LAYERS = 'MAP_UPDATE_LAYERS';

export const onMapClick = (map, point) => {
  const selectedFeatures = map.queryRenderedFeatures(point, {
    layers: ['Grid']
  });
  console.log('Selected Features: ', selectedFeatures);
  return {
    type: MAP_CLICKED,
    point,
    selectedFeatures
  };
};

export const onMapMouseMove = point => ({ type: MAP_MOUSE_MOVED, point });

export const updateMapLayers = () => ({ type: MAP_UPDATE_LAYERS });
