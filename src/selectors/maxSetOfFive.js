import { createSelector } from 'reselect';
import { coreExercises } from '../utils/constants';
import {
  getSpecificExercise,
  getExercisetWorkingSets,
  getExerciseWorkingSetsFor5Reps,
  getSortedExerciseSetsFor5Reps,
  getMax1x5Exercise,
  getSortedMax1x5Exercise,
  getDisplayMax1x5Exercise,
} from './exerciseSelectors';

import { getState } from './utils';

export const statsForMaxSetOfFive = createSelector(
	getState,
	(state) => {
		return coreExercises.map((exerciseName) => {
			const coreExercise = getSpecificExercise(exerciseName);
			const workingSets = getExercisetWorkingSets(coreExercise);
			const setsWithFiveReps = getExerciseWorkingSetsFor5Reps(workingSets);
			const maxSetsWithFiveReps = getSortedExerciseSetsFor5Reps(setsWithFiveReps);
			const maxSetOfFiveReps = getMax1x5Exercise(maxSetsWithFiveReps);
			const maxSetOfFiveRepsWithDates = getSortedMax1x5Exercise(maxSetOfFiveReps);

			return {
				exerciseName: exerciseName,
				description: 'Most weight lifted in a set of 5 reps',
				data: getDisplayMax1x5Exercise(maxSetOfFiveRepsWithDates)(state)
			}
		});
	});
