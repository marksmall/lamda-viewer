import React from 'react';
import PropTypes from 'prop-types';

const SelectionIndicator = ({ selection }) => {
  return (
    <div>
      <h1>Selection</h1>
      <p>
        {selection.map(i => {
          return (
            <span>
              PATH: {i.properties.PATH}, ROW: {i.properties.ROW}
              <br />
            </span>
          );
        })}
      </p>
    </div>
  );
};

SelectionIndicator.propTypes = {};

export default SelectionIndicator;
