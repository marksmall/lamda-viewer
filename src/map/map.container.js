import { connect } from 'react-redux';

import { data, isActive } from './map.selector';

import Map from './map.component';

const mapStateToProps = state => {
  return {
    data: data(state),
    active: isActive(state)
  };
};

export default connect(mapStateToProps)(Map);
