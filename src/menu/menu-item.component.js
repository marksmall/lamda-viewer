import React from 'react';
import PropTypes from 'prop-types';

import styles from './menu-item.module.css';

// FIXME: This should probably be a HOC, so we can decorate any component
//        With the MenuItem functionality.
const MenuItem = ({ selectMenuItem, children }) => (
  <div
    className={styles['menu-item']}
    onClick={() => console.log('Menu Item clicked')}
  >
    {children}
    <hr />
  </div>
);

MenuItem.propTypes = {
  selectMenuItem: PropTypes.func,
  children: PropTypes.string.isRequired
};

export default MenuItem;
