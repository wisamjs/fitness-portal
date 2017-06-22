import { SET_OF_ANY, SQUAT } from '../utils/constants';

const INITIAL_STATE = {
	graph: {
		exercise: SQUAT,
		format: SET_OF_ANY
	}
}

export default function preferences(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case 'UPDATE_WORKOUT_FORMAT':
			return { ...state, graph: { ...state.graph, format: action.payload}};
		case 'UPDATE_EXERCISE':
			return { ...state, graph: { ...state.graph , exercise: action.payload}};
		default:
			return state;
	}
}
