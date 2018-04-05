import React, { Component } from 'react';
import ReactMapboxGl, {
  GeoJSONLayer,
  Layer,
  Feature,
  Source,
  ZoomControl,
  RotationControl,
  ScaleControl
} from 'react-mapbox-gl';
import PropTypes from 'prop-types';

import styles from './map.module.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
});

const SATELLITE_TYPES = [
  {
    name: 'landsat',
    label: 'Landsat-8',
    layer: 'Landsat8_Desc_filtr2',
    url: 'mapbox://vincentsarago.8ib6ynrs'
  },
  {
    name: 'sentinel',
    label: 'Sentinel-2',
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

const LAYERS = [
  {
    id: 'Grid',
    type: 'fill',
    paint: {
      'fill-color': 'hsla(0, 0%, 0%, 0)',
      'fill-outline-color': {
        base: 1,
        stops: [[0, 'hsla(207, 84%, 57%, 0.24)'], [22, 'hsl(207, 84%, 57%)']]
      },
      'fill-opacity': 1
    }
  },
  {
    id: 'Highlighted',
    type: 'fill',
    paint: {
      'fill-color': '#0f6d8e',
      'fill-outline-color': '#1386af',
      'fill-opacity': 0.3
    },
    filter: ['in', 'PATH', '']
  },
  {
    id: 'Selected',
    type: 'line',
    paint: {
      'line-color': '#4c67da',
      'line-width': 3
    },
    filter: ['in', 'PATH', '']
  }
];

// class MapWrapper extends Component {
// map;

const MapWrapper = ({ active, onMapClick, onMapMouseMove }) => {
  // render() {
  //   const { active, onMapClick, onMapMouseMove } = this.props;
  console.log('MapWrapper: ', active);
  return (
    <Map
      style="mapbox://styles/mapbox/satellite-streets-v9"
      containerStyle={{ height: '100vh', width: '100vw' }}
      zoom={[3]}
      onClick={(map, event) => onMapClick(map, event.point)}
      onMouseMove={(map, event) => onMapMouseMove(event.point)}
      className={styles['map-container']}
      // ref={map => (this.map = map)}
    >
      <ZoomControl />
      <RotationControl />
      <ScaleControl />

      {SATELLITE_TYPES.map(type => (
        <Source
          key={type.name}
          id={type.name}
          tileJsonSource={{ type: 'vector', url: type.url }}
        />
      ))}

      {LAYERS.map(layer => {
        console.log('Draw LAYERS: ', layer, active);
        return (
          <Layer
            key={layer.id}
            id={layer.id}
            type={layer.type}
            sourceId={active.name}
            sourceLayer={active.layer}
            paint={layer.paint}
            filter={layer.filter ? layer.filter : null}
          />
        );
      })}
    </Map>
  );
};
// }

MapWrapper.propTypes = {};

export default MapWrapper;
