import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSelectedFeatures } from './selection.selector';
// import { setActiveSatellite } from './selection.actions';

import Selection from './selection.component';

const mapStateToProps = state => {
  return { selectedFeatures: getSelectedFeatures(state) };
};

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ toggleMenu }, dispatch);

export default connect(mapStateToProps)(Selection);
