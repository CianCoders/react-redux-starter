import { connect } from 'react-redux';
import { actions } from '../../../../redux/modules/graficas/graficas';
import Graficas from './Graficas';


const ms2p = (state) => {
  return {
    ...state.graficas,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(Graficas);
