import React from 'react';
import PropTypes from 'prop-types';

import styles from './toggle.module.css';

const renderOptions = (options, active, setActiveOption) => {
  return options.map((option, i) => {
    return (
      <label key={i} className="toggle-container">
        <input
          onChange={() => setActiveOption(option)}
          checked={option.property === active.property}
          name="toggle"
          type="radio"
        />
        <div className="toggle txt-s py3 toggle--active-white">
          {option.name}
        </div>
      </label>
    );
  });
};

const Toggle = props => {
  const { options, active, setActiveOption } = props;
  return (
    <div
      className={`toggle-group absolute top right ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1 ${
        styles['satellite-types']
      }`}
    >
      {renderOptions(options, active, setActiveOption)}
    </div>
  );
};

Toggle.propTypes = {
  options: PropTypes.array.isRequired,
  active: PropTypes.object.isRequired,
  setActiveOption: PropTypes.func.isRequired
};

export default Toggle;
