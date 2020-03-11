import {handleActions} from 'redux-actions';


/****** REDUCER PARA PROBAR COMPORTAMIENTO DE GRAFICAS CUANDO HAY PETICIONES A BACKEND***/

// ------------------------------------
// Constants
// ------------------------------------

const constants = {
	LOADER: `GRAFICAS_LOADER`,
	DATA: `GRAFICAS_DATA`
};


// -----------------------------------
// Pure Actions
// -----------------------------------

	const setLoader = loader => ({
		type: constants.LOADER,
		loader,
	});

	const setData = data => ({
		type: constants.DATA,
		data,
	});


/**
 * Función que obtiene la data que alimienta el chart
 * @param  {[object]}
 * @return {[object]}
 */
const getData = () => (dispatch, getStore) => {

		const resource = getStore().graficas;
		dispatch(setLoader(true));
		try{

			setTimeout(()=>{
				//Data debe ser un array, para poder ser recibido por el componente
				const data = [
							['Ciudad', 'Población en 2010', 'Población en 2000'],
							['Ciudad de Nueva York, NY', 8175000, 8008000],
							['Los Angeles, CA', 3792000, 3694000],
							['Chicago, IL', 2695000, 2896000],
							['Houston, TX', 2099000, 1953000],
							['Philadelphia, PA', 1526000, 1517000],
						];
				dispatch(setData(data));
				dispatch(setLoader(false));
			}, 1000);
		}
		catch(e){
			console.log(e);
		}
	
};


export const actions = {
	getData,
};

const reducers = {
		[constants.LOADER]: (state, { loader }) => {
			return {
				...state,
				loader,
			};
		},
		[constants.DATA]: (state, { data }) => {
			return {
				...state,
				data,
			};
		}
 };

const initialState = {
		loader: false,
		data: []
	};



export default handleActions(reducers, initialState);
