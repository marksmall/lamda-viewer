import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveSatellite } from './toggle.actions';
import { isActive, satellites } from './toggle.selector';

import Toggle from './toggle.component';

const mapStateToProps = state => {
  return { satellites: satellites(state), active: isActive(state) };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActiveSatellite }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
