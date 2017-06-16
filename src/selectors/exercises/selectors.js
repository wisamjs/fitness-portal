import { createSelector } from 'reselect';
import { 
	SET_OF_ANY, 
	SET_OF_FIVE, 
	FIVE_SETS_OF_FIVE, 
	CORE_EXERCISES 
} from '../../utils/constants';
import R from 'ramda';
import {
getState,
  getExercises,
  getExerciseByName,
  getWorkingSets,
  getWorkingSetsForExercise,
  getWorkingSetsByReps,
  getSetsByWorkout,
  getFiveSetsofFiveReps,
  sortSetsByWeightAndDate,
  getworkouts,
  getDates,
  addDateToSets
} from '../../utils/utils';


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
    getFiveSetsofFiveReps
  );
}

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

export const statsForMaxSetOfAny = createSelector(
	getState,
	(state) => {
		return CORE_EXERCISES.map((exerciseName) => {
			const getCoreExercise = getSpecificExercise(exerciseName);
			const getCoreExerciseWorkingSets = getSetsFor(getCoreExercise);
			const getSortedCORE_EXERCISESets = getSortedSets(getCoreExerciseWorkingSets);
			const getMaxWeightCoreExercise = getMaxSetPerWorkout(getSortedCORE_EXERCISESets);
			const getDisplayMaxWeightCoreExercise = getSortedMaxSetPerWorkout(getMaxWeightCoreExercise);

			return {
				exerciseName: exerciseName,
				description: 'test',
				format: SET_OF_ANY,
				data: getSetsWithDates(getDisplayMaxWeightCoreExercise)(state)
			}
		});
	});

export const statsForMaxFiveSetOfFive = createSelector(
	getState,
	(state) => {
		return CORE_EXERCISES.map((exerciseName) => {
			const coreExercise = getSpecificExercise(exerciseName);
			const workingSets = getSetsFor(coreExercise);
			const setsWithFiveReps = getSetsWithFiveReps(workingSets);
			const maxSetsWithFiveReps = getSortedSets(setsWithFiveReps);
			const workoutsWithFiveRepSets = groupSetsByWorkout(maxSetsWithFiveReps);
			const fiveSetOfFives = getFiveSetsofFive(workoutsWithFiveRepSets);

			const sortedFiveSetOfFives = getSortedMaxSetPerWorkout(fiveSetOfFives);

			return {
				exerciseName: exerciseName,
				format: FIVE_SETS_OF_FIVE,
				description: 'Most weight lifted in 5 sets of 5 reps',
				data: getSetsWithDates(sortedFiveSetOfFives)(state)
			}
		});
	});



export const statsForMaxSetOfFive = createSelector(
	getState,
	(state) => {
		return CORE_EXERCISES.map((exerciseName) => {
			const coreExercise = getSpecificExercise(exerciseName);
			const workingSets = getSetsFor(coreExercise);
			const setsWithFiveReps = getSetsWithFiveReps(workingSets);
			const maxSetsWithFiveReps = getSortedSets(setsWithFiveReps);
			const maxSetOfFiveReps = getMaxSetPerWorkout(maxSetsWithFiveReps);
			const maxSetOfFiveRepsWithDates = getSortedMaxSetPerWorkout(maxSetOfFiveReps);

			return {
				exerciseName: exerciseName,
				description: 'Most weight lifted in a set of 5 reps',
				format: SET_OF_FIVE,
				data: getSetsWithDates(maxSetOfFiveRepsWithDates)(state)
			}
		});
	});
