import React from 'react';

import styles from './App.module.css';

import { setActiveOption } from './map/map.actions';

import MapContainer from './map/map.container';
import Toggle from './map/toggle.component';
import LegendContainer from './legend/legend.container';

const App = () => (
  <div className={styles.app}>
    <MapContainer />
    <Toggle onChange={setActiveOption} />
    <LegendContainer />
  </div>
);

export default App;
