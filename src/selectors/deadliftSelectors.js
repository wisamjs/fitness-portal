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

export const getDeadliftExercise = createSelector(
  getExercises, 
  getExerciseByName('Barbell Deadlift')
);


export const getDeadliftWorkingSets = createSelector(
  getDeadliftExercise, 
  getWorkingSets,
  getWorkingSetsForExercise
)

export const getDeadliftWorkingSetsFor5Reps = createSelector(
  getDeadliftWorkingSets, 
  getWorkingSetsByReps(5)
);

export const getSortedDeadliftSetsFor5Reps = createSelector(
  getDeadliftWorkingSetsFor5Reps, 
  sortSetsByWeightAndDate
);

export const getMax1x5Deadlifts = createSelector(
  getSortedDeadliftSetsFor5Reps, 
  R.uniqBy(R.prop('workoutId'))
)

export const getSortedMax1x5Deadlifts = createSelector(
  getMax1x5Deadlifts, 
  R.sort(R.descend(R.prop('workoutId')))
)


export const getDisplayMax1x5Deadlifts = createSelector(
  getSortedMax1x5Deadlifts,
  getworkouts,
  getDates,
  addDateToSets);