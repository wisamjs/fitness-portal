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

  export const getSpecificExercise = (name) => {
	return createSelector(
  	getExercises, 
  	getExerciseByName(name)
  );
}

export const getExercisetWorkingSets = (getSpecificExercise) => {
  return createSelector(
    getSpecificExercise, 
    getWorkingSets,
    getWorkingSetsForExercise
  )
}

export const getExerciseWorkingSetsFor5Reps = (getWorkingSets) => {
    return createSelector(
    getWorkingSets, 
    getWorkingSetsByReps(5)
  );
}

export const getSortedExerciseSetsFor5Reps = (getExerciseWorkingSetsFor5Reps) => {
    return createSelector(
    getExerciseWorkingSetsFor5Reps, 
    sortSetsByWeightAndDate
  );
}

export const getMax1x5Exercise = (getSortedExerciseSetsFor5Reps) => {
    return createSelector(
    getSortedExerciseSetsFor5Reps, 
    R.uniqBy(R.prop('workoutId'))
  )
}

export const getSortedMax1x5Exercise = (getMax1x5Exercise) => {
  return createSelector(
    getMax1x5Exercise, 
    R.sort(R.descend(R.prop('workoutId')))
  )
}

export const getDisplayMax1x5Exercise = (getSortedMax1x5Exercise) => {
  return createSelector(
  getSortedMax1x5Exercise,
  getworkouts,
  getDates,
  getExercises,
  addDateToSets);
}