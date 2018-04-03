import React from 'react';
import PropTypes from 'prop-types';

const renderLegendKeys = (stop, i) => (
  <div key={i} className="txt-s">
    <span
      className="mr6 round-full w12 h12 inline-block align-middle"
      style={{ backgroundColor: stop[1] }}
    />
    <span>{`${stop[0].toLocaleString()}`}</span>
  </div>
);

const Legend = props => {
  const { name, description, stops } = props.active;

  return (
    <div className="bg-white absolute bottom right mr12 mb24 py12 px12 shadow-darken10 round z1 wmax180">
      <div className="mb6">
        <h2 className="txt-bold txt-s block">{name}</h2>
        <p className="txt-s color-gray">{description}</p>
      </div>
      {stops.map(renderLegendKeys)}
    </div>
  );
};

Legend.propTypes = {
  active: PropTypes.object.isRequired
};

export default Legend;
