import { createSelector } from 'reselect';
import R from 'ramda';

import {
  getExercises,
  getExerciseByName,
  getWorkingSets,
  getWorkingSetsForExercise,
  getWorkingSetsByReps,
  getSetsByWorkout,
  sortSetsByWeightAndDate,
  getworkouts,
  getDates,
  countSetsByWeight,
  addDateToSets,
} from './utils';

  export const getSpecificExercise = (name) => {
	return createSelector(
  	getExercises, 
  	getExerciseByName(name)
  );
}

export const getSetsFor = (exercise) => {
  return createSelector(
    exercise, 
    getWorkingSets,
    getWorkingSetsForExercise
  )
}

export const getSetsWithFiveReps = (sets) => {
    return createSelector(
    sets, 
    getWorkingSetsByReps(5)
  );
}

export const getSortedSets = (sets) => {
    return createSelector(
    sets, 
    sortSetsByWeightAndDate
  );
}

export const groupSetsByWorkout = (sets) => {
  return createSelector(
    sets,
    getSetsByWorkout)
}

export const getFiveSetsofFive = (workouts) => {
  return createSelector(
    workouts,
    R.reduce(function(fiveByFive, workout) {
      var byWeight = countSetsByWeight(workout);
      var most = R.filter((reps)=> { return reps >= 5},byWeight);
      var weight = R.head(R.keys(most));

      if (weight) {
        var set = R.head(R.filter(function(set) {
          return R.propEq('weight', set.weight)
        }, workout));
        return fiveByFive.concat(set);
      }

      return fiveByFive;
    }, [])
)};


export const getMaxSetPerWorkout = (sets) => {
    return createSelector(
    sets, 
    R.uniqBy(R.prop('workoutId'))
  )
}

export const getSortedMaxSetPerWorkout = (sets) => {
  return createSelector(
    sets, 
    R.sort(R.descend(R.prop('workoutId')))
  )
}

export const getSetsWithDates = (sets) => {
  return createSelector(
  sets,
  getworkouts,
  getDates,
  getExercises,
  addDateToSets);
}