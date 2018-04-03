import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { data, isActive } from './map.selector';

import { toggleMenu } from './menu.actions';
import { isMenuVisible } from './menu.selector';

import Menu from './menu.component';

const mapStateToProps = state => {
  return {
    // data: data(state),
    isMenuVisible: isMenuVisible(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleMenu }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
