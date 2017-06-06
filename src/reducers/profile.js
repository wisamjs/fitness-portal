const INITIAL_STATE = {
	name: 'Wisam Zaghal'
}

export default function profile(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case 'test':
			return state;
		default:
			return state;
	}
}
