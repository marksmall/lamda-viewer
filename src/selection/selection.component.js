import React from 'react';
import PropTypes from 'prop-types';

import styles from './selection.module.css';

const SelectionIndicator = ({ selectedFeatures }) => {
  console.log('Selected Features: ', selectedFeatures);
  return (
    <div className={styles['feature-container']}>
      <h1 className={styles['selected-title']}>Selected</h1>

      <div className={` ${styles['table-header']} ${styles['table-row']}`}>
        <span>PATH</span>
        <span>ROW</span>
      </div>
      {/* <div className={styles['table-row']}>
        <span>204</span>
        <span>24</span>
      </div>
      <div className={styles['table-row']}>
        <span>204</span>
        <span>24</span>
      </div> */}

      {selectedFeatures.map(feature => {
        return (
          <div className={styles['table-row']} key={feature.id}>
            <span className={styles['feature-cell']}>
              {feature.properties.PATH}
            </span>
            <span className={styles['feature-cell']}>
              {feature.properties.ROW}
            </span>
          </div>
        );
      })}
    </div>
  );
};

SelectionIndicator.propTypes = {};

export default SelectionIndicator;
