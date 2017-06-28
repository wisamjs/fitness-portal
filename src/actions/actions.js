import createAction from './utils/createAction';
import {
	ON_APP_MOUNT
} from './consts';

export const updateWorkoutFormat = (payload) => createAction('UPDATE_WORKOUT_FORMAT', payload);
export const updateExercise = (payload) => createAction('UPDATE_EXERCISE', payload);
export const fetchWorkouts = (payload) => createAction(ON_APP_MOUNT, payload);