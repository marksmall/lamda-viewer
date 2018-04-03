import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveOption } from './toggle.actions';
import { isActive, options } from './toggle.selector';

import Toggle from './toggle.component';

const mapStateToProps = state => {
  return {
    options: options(state),
    active: isActive(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActiveOption }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
