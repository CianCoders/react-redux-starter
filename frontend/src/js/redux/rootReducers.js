import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import login from './modules/cuenta/login';
import register from './modules/cuenta/register';
import profile from './modules/cuenta/profile';
import usuarios from './modules/usuarios/usuarios';
import graficas from './modules/graficas/graficas';
import notificaciones from './modules/notificaciones/notificaciones';

export default combineReducers({
    form: formReducer,
    login,
    register,
    profile,
    usuarios,
    graficas,
    routing,
    notificaciones,
});
