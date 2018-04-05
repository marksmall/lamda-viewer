import React from 'react';
import PropTypes from 'prop-types';

import styles from './toggle.module.css';

const renderOptions = (satellites, active, setActiveSatellite) =>
  satellites.map((satellite, i) => {
    return (
      <label key={i} className="toggle-container">
        <input
          type="radio"
          name="satellite"
          value={satellite.layer}
          checked={satellite.name === active.name}
          onChange={() => setActiveSatellite(satellite)}
        />
        <div className="toggle txt-s py3 toggle--active-white">
          {satellite.label}
        </div>
      </label>
    );
  });

const Toggle = ({ satellites, active, setActiveSatellite }) => (
  <div className={styles['satellite-types']}>
    {renderOptions(satellites, active, setActiveSatellite)}
  </div>
);

Toggle.propTypes = {
  satellites: PropTypes.array.isRequired,
  active: PropTypes.object.isRequired,
  setActiveSatellite: PropTypes.func.isRequired
};

export default Toggle;
