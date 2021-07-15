import { INCREMENT, DECREMENT, RESET, SET_INTERVAL } from "../actions/counter";

export const initialState = {
	value: 0,
	interval: 1,
};

/*
Programacion funcional: Funcion Pura
	Una funcion tal que para una entrada X siempre tiene una salida Y
*/
export const counterReducer = (state, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				value: state.value + state.interval,
			};
		case DECREMENT:
			return {
				...state,
				value: state.value - state.interval,
			};
		case SET_INTERVAL:
			return {
				...state,
				interval: +action.payload?.interval,
			};
		case RESET:
			return initialState;
		default:
			return state;
	}
};
