import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu.module.css';

const Menu = ({ toggleMenu, isMenuVisible, children }) => {
  console.log('MENU: ', toggleMenu, isMenuVisible, children);
  return (
    <div>
      <button
        className="absolute top left ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1"
        onClick={() => toggleMenu()}
      >
        Menu
      </button>

      <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ''}`}>
        {children}
      </div>
    </div>
  );
};

// Menu.propTypes = {
//   show:
// };

export default Menu;
