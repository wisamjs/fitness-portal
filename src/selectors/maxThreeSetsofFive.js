import { createSelector } from 'reselect';
import { coreExercises } from '../utils/constants';
import {
  getSpecificExercise,
  getSetsFor,
  getSetsWithFiveReps,
  getSortedSets,
  getSortedMaxSetPerWorkout,
  getSetsWithDates,
  getThreeSetsofFive,
  groupSetsByWorkout
} from './exerciseSelectors';

import { getState } from './utils';

export const statsForMaxThreeSetOfFive = createSelector(
	getState,
	(state) => {
		return coreExercises.map((exerciseName) => {
			const coreExercise = getSpecificExercise(exerciseName);
			const workingSets = getSetsFor(coreExercise);
			const setsWithFiveReps = getSetsWithFiveReps(workingSets);
			const maxSetsWithFiveReps = getSortedSets(setsWithFiveReps);
			const workoutsWithFiveRepSets = groupSetsByWorkout(maxSetsWithFiveReps);
			const threeSetsofFive = getThreeSetsofFive(workoutsWithFiveRepSets);

			const sortedThreeSetsofFive = getSortedMaxSetPerWorkout(threeSetsofFive);

			return {
				exerciseName: exerciseName,
				description: 'Most weight lifted in 3 sets of 5 reps',
				data: getSetsWithDates(sortedThreeSetsofFive)(state)
			}
		});
	});

