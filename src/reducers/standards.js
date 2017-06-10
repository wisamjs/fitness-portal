import data from '../utils/standards';

const INITIAL_STATE = data;

window.standards = INITIAL_STATE;

export default function workouts(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case 'test':
			return state;
		default:
			return state;
	}
}
