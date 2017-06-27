import createAction from './utils/createAction';
import {
	FETCH_WORKOUTS_API
} from './consts';

export const updateWorkoutFormat = (payload) => createAction('UPDATE_WORKOUT_FORMAT', payload);
export const updateExercise = (payload) => createAction('UPDATE_EXERCISE', payload);
export const fetchWorkouts = (payload) => createAction(FETCH_WORKOUTS_API, payload);