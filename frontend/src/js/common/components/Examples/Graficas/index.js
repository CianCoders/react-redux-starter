import { connect } from 'react-redux';
import { actions } from '../../../../redux/modules/usuarios/usuarios';
import Graficas from './Graficas';


const ms2p = (state) => {
  return {
    ...state.usuarios,
  };
};

const md2p = { ...actions };

export default connect(ms2p, md2p)(Graficas);
