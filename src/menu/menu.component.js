import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu.module.css';

const Menu = ({ toggleMenu, isMenuVisible, children }) => {
  console.log('MENU: ', toggleMenu, isMenuVisible, children);
  return (
    <div className={styles['menu-container']}>
      <div
        className={`${styles['hamburger-button']} ${
          isMenuVisible ? styles.visible : ''
        }`}
        onClick={() => toggleMenu()}
      >
        <div />
        <div />
        <div />
      </div>

      <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ''}`}>
        {children}
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.shape(PropTypes.object.isRequired))
};

export default Menu;
