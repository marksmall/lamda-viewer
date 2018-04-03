import { connect } from 'react-redux';

import Map from './map.component';

function mapStateToProps(state) {
  return {
    data: state.data,
    active: state.active
  };
}

export default connect(mapStateToProps)(Map);
