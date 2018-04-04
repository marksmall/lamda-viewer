import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mapboxgl, { NavigationControl } from 'mapbox-gl';

import styles from './map.module.css';

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

const SATELLITE_TYPES = [
  {
    name: 'landsat',
    layer: 'Landsat8_Desc_filtr2',
    url: 'mapbox://vincentsarago.8ib6ynrs'
  }
];

const LAYERS = [
  {
    id: 'Grid',
    type: 'fill',
    source: SATELLITE_TYPES[0].name,
    'source-layer': SATELLITE_TYPES[0].layer,
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
    source: SATELLITE_TYPES[0].name,
    'source-layer': SATELLITE_TYPES[0].layer,
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
    source: SATELLITE_TYPES[0].name,
    'source-layer': SATELLITE_TYPES[0].layer,
    paint: {
      'line-color': '#4c67da',
      'line-width': 3
    },
    filter: ['in', 'PATH', '']
  }
];

class Map extends Component {
  map;

  static propTypes = {
    data: PropTypes.object.isRequired,
    active: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      sat: 1,
      selection: []
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    // TODO: This should be linked to the toggle button, we can change the visible vectors from there, consider hide/show, rather than add/remove.
    //   this.setFill();
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/satellite-streets-v9',
      zoom: 3
    });

    this.map.addControl(new NavigationControl(), 'top-right');

    this.map.on('load', () => {
      SATELLITE_TYPES.forEach(type => {
        this.map.addSource(type.name, {
          type: 'vector',
          url: type.url
        });

        LAYERS.forEach(layer => {
          this.map.addLayer(layer);
        });
      });

      this.map.on('click', this.onClick);
      this.map.on('mousemove', this.onMouseMove);
    });
  }

  onClick = event => {
    const features = this.map.queryRenderedFeatures(event.point, {
      layers: ['Grid']
    });
    const predicate = this.buildFilterPredicate(features);
    this.map.setFilter('Selected', predicate);
    this.setState({ selection: features });
  };

  onMouseMove = event => {
    // console.log('Handling mouse move event: ', event);
    const features = this.map.queryRenderedFeatures(event.point, {
      layers: ['Grid']
    });
    let predicate = this.buildFilterPredicate(features);
    this.map.setFilter('Highlighted', predicate);
  };

  buildFilterPredicate = features => {
    let predicate;
    switch (this.state.sat) { // FIXME: Is this state access safe?
      case 1:
        if (features.length > 0) {
          predicate = [].concat.apply(
            [],
            [
              'any',
              features.map(e => {
                return [
                  'all',
                  ['==', 'PATH', e.properties.PATH],
                  ['==', 'ROW', e.properties.ROW]
                ];
              })
            ]
          );
        } else {
          predicate = ['in', 'PATH', ''];
        }
        break;

      default:
        break;
    }

    return predicate;
  };

  // getFeatures = event => {
  //   console.log('Getting Features: ', event);
  //   const features = this.map.queryRenderedFeatures(event.point, {
  //     layers: ['Grid']
  //   });
  //   console.log('Features: ', features);
  //   return features;
  // };

  // setFill() {
  //   const { property, stops } = this.props.active;
  //   this.map.setPaintProperty('countries', 'fill-color', {
  //     property,
  //     stops
  //   });
  // }

  render() {
    return (
      <div
        ref={el => (this.mapContainer = el)}
        className={styles['map-container']}
      />
    );
  }
}

export default Map;
