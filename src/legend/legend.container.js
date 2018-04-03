import { connect } from 'react-redux';

import { isActive } from './legend.selector';
import Legend from './legend.component';

const mapStateToProps = state => {
  return {
    active: isActive(state)
  };
};

export default connect(mapStateToProps)(Legend);
