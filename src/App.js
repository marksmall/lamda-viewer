import React from 'react';

import styles from './App.module.css';

import MapContainer from './map/map.container';
import ToggleContainer from './toggle/toggle.container';
// import LegendContainer from './legend/legend.container';
import MenuContainer from './menu/menu.container';
import MenuItem from './menu/menu-item.component';
import SelectionContainer from './selection/selection.container';

const App = ({ toggleMenu }) => (
  <div className={styles.app}>
    <MapContainer />
    <ToggleContainer />

    <MenuContainer>
      <MenuItem>
        <SelectionContainer />
      </MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
    </MenuContainer>
  </div>
);

export default App;
