import createAction from './utils/createAction';

export const updateWorkoutFormat = (payload) => createAction('UPDATE_WORKOUT_FORMAT', payload);
export const updateExercise = (payload) => createAction('UPDATE_EXERCISE', payload);
