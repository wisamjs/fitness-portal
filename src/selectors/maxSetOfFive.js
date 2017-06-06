import { createSelector } from 'reselect';
import { SET_OF_FIVE, CORE_EXERCISES } from '../utils/constants';
import {
  getSpecificExercise,
  getSetsFor,
  getSetsWithFiveReps,
  getSortedSets,
  getMaxSetPerWorkout,
  getSortedMaxSetPerWorkout,
  getSetsWithDates
} from './exerciseSelectors';

import { getState } from './utils';

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
