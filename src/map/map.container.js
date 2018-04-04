import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import { data, isActive } from './map.selector';
import { onMapClick, onMapMouseMove } from './map.reducer';

import Map from './map.component';
import MapWrapper from './map-react.component';

const mapStateToProps = state => {
  return {
    active: isActive(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onMapClick,
      onMapMouseMove
    },
    dispatch
  );

// export default connect(mapStateToProps)(Map);
export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper);
