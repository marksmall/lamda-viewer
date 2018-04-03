import React from 'react';
import PropTypes from 'prop-types';

// FIXME: This should probably be a HOC, so we can decorate any component
//        With the MenuItem functionality.
const MenuItem = ({ selectMenuItem, children }) => (
  <div className="menu-item" onClick={() => console.log('Menu Item clicked')}>
    {children}
  </div>
);

// MenuItem.propTypes = {};

export default MenuItem;
