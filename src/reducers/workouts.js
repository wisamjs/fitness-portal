import data from '../utils/data';

const INITIAL_STATE = data;

window.data = INITIAL_STATE;

export default function workouts(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case 'test':
			return state;
		default:
			return state;
	}
}
