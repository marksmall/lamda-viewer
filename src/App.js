import React from 'react';

import styles from './App.module.css';

import MapContainer from './map/map.container';
import ToggleContainer from './toggle/toggle.container';
import LegendContainer from './legend/legend.container';

const App = () => (
  <div className={styles.app}>
    <MapContainer />
    <ToggleContainer />
    <LegendContainer />
  </div>
);

export default App;
