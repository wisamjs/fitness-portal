import { createSelector } from 'reselect';
import { SET_OF_ANY, CORE_EXERCISES } from '../../utils/constants';
import {
  getSpecificExercise,
  getSetsFor,
  getSortedSets,
  getMaxSetPerWorkout,
  getSortedMaxSetPerWorkout,
  getSetsWithDates
} from './helperSelectors';
import { getState } from './utils';

export const statsForMaxSetOfAny = createSelector(
	getState,
	(state) => {
		return CORE_EXERCISES.map((exerciseName) => {
			let getCoreExercise = getSpecificExercise(exerciseName);
			let getCoreExerciseWorkingSets = getSetsFor(getCoreExercise);
			let getSortedCORE_EXERCISESets = getSortedSets(getCoreExerciseWorkingSets);
			let getMaxWeightCoreExercise = getMaxSetPerWorkout(getSortedCORE_EXERCISESets);
			let getDisplayMaxWeightCoreExercise = getSortedMaxSetPerWorkout(getMaxWeightCoreExercise);

			return {
				exerciseName: exerciseName,
				description: 'test',
				format: SET_OF_ANY,
				data: getSetsWithDates(getDisplayMaxWeightCoreExercise)(state)
			}
		});
	});
