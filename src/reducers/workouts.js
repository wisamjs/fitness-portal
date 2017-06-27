import data from '../utils/data';
import {FETCH_WORKOUTS_API_SUCCESS} from '../actions/consts';
const INITIAL_STATE = data;

window.data = INITIAL_STATE;

export default function workouts(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case FETCH_WORKOUTS_API_SUCCESS:
			return state;
		default:
			return state;
	}
}
