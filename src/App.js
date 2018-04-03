import React from 'react';

import styles from './App.module.css';

import MapContainer from './map/map.container';
import ToggleContainer from './toggle/toggle.container';
import LegendContainer from './legend/legend.container';
import MenuContainer from './menu/menu.container';
// import Menu from './menu/menu.component';
// import MenuItem from './menu/menu-item.component';

const App = ({ toggleMenu }) => (
  <div className={styles.app}>
    <MapContainer />
    <ToggleContainer />
    <LegendContainer />

    <MenuContainer />
  </div>
);

export default App;
