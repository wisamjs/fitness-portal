import { createSelector } from 'reselect';
import R from 'ramda';

import {
	getExercises,
	getExerciseByName,
	getWorkingSets,
	getWorkingSetsForExercise,
	getWorkingSetsByReps,
	sortSetsByWeightAndDate,
	getworkouts,
	getDates,
	addDateToSets,
} from './utils';


export const getSquatExercise = createSelector(
  getExercises, 
  getExerciseByName('Barbell Squat')
);

export const getSquatWorkingSets = createSelector(
  getSquatExercise, 
  getWorkingSets,
  getWorkingSetsForExercise
)
export const getSquatWorkingSetsFor5Reps = createSelector(
  getSquatWorkingSets, 
  getWorkingSetsByReps(5)
);
export const getSortedSquatSetsFor5Reps = createSelector(
  getSquatWorkingSetsFor5Reps, 
  sortSetsByWeightAndDate
);
export const getMax1x5Squats = createSelector(
  getSortedSquatSetsFor5Reps, 
  R.uniqBy(R.prop('workoutId'))
)
export const getSortedMax1x5Squats = createSelector(
  getMax1x5Squats, 
  R.sort(R.descend(R.prop('workoutId')))
)
export const getDisplayMax1x5Squats = createSelector(
  getSortedMax1x5Squats,
  getworkouts,
  getDates,
  addDateToSets);