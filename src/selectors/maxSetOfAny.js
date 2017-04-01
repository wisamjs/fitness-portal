import { createSelector } from 'reselect';
import { coreExercises } from '../utils/constants';
import {
  getSpecificExercise,
  getSetsFor,
  getSortedSets,
  getMaxSetPerWorkout,
  getSortedMaxSetPerWorkout,
  getSetsWithDates
} from './exerciseSelectors';
import { getState } from './utils';

export const statsForMaxSetOfAny = createSelector(
	getState,
	(state) => {
		return coreExercises.map((exerciseName) => {
			let getCoreExercise = getSpecificExercise(exerciseName);
			let getCoreExerciseWorkingSets = getSetsFor(getCoreExercise);
			let getSortedCoreExerciseSets = getSortedSets(getCoreExerciseWorkingSets);
			let getMaxWeightCoreExercise = getMaxSetPerWorkout(getSortedCoreExerciseSets);
			let getDisplayMaxWeightCoreExercise = getSortedMaxSetPerWorkout(getMaxWeightCoreExercise);

			return {
				exerciseName: exerciseName,
				description: 'test',
				data: getSetsWithDates(getDisplayMaxWeightCoreExercise)(state)
			}
		});
	});
