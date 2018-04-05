import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { isActive, satellites } from './toggle.selector';
import { setActiveSatellite } from './toggle.actions';

import Toggle from './toggle.component';

const mapStateToProps = state => {
  return { satellites: satellites(state), active: isActive(state) };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActiveSatellite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
