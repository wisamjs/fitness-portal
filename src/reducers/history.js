import {ON_APP_MOUNT_SUCCESS} from '../actions/consts';

const INITIAL_STATE = {
	loading: true
};

export default function history(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case ON_APP_MOUNT_SUCCESS:
		const {workouts, workingSets, exercises, dates} = action.payload;
			return {...state, loading: false, workouts, workingSets, exercises, dates};
		default:
			return state;
	}
}
