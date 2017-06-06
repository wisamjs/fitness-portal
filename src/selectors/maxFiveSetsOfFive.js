import { createSelector } from 'reselect';
import { FIVE_SETS_OF_FIVE , CORE_EXERCISES } from '../utils/constants';
import {
  getSpecificExercise,
  getSetsFor,
  getSetsWithFiveReps,
  getSortedSets,
  getSortedMaxSetPerWorkout,
  getSetsWithDates,
  getFiveSetsofFive,
  groupSetsByWorkout
} from './exerciseSelectors';

import { getState } from './utils';

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

