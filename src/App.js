import React from 'react';

import styles from './App.module.css';

import { setActiveOption } from './map/map.actions';

import MapContainer from './map/map.container';
import Toggle from './map/toggle.component';
import Legend from './map/legend.component';

const App = () => (
  <div className={styles.app}>
    <MapContainer />
    <Toggle onChange={setActiveOption} />
    <Legend />
  </div>
);

export default App;
