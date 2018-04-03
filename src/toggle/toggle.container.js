import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setActiveOption } from './toggle.actions';

import Toggle from './toggle.component';

const mapStateToProps = state => {
  return {
    options: state.options,
    active: state.active
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setActiveOption }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);
