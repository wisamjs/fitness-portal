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

export const getDisplayMax1x5CoreExercises = createSelector(
	getState,
	(state) => {
		return coreExercises.map((exerciseName) => {
			let getCoreExercise = getSpecificExercise(exerciseName);
			let getCoreExerciseWorkingSets = getExercisetWorkingSets(getCoreExercise);
			let getCoreExerciseWorkingSetsFor5Reps = getExerciseWorkingSetsFor5Reps(getCoreExerciseWorkingSets);
			let getSortedCoreExerciseSetsFor5Reps = getSortedExerciseSetsFor5Reps(getCoreExerciseWorkingSetsFor5Reps);
			let getMax1x5CoreExercise = getMax1x5Exercise(getSortedCoreExerciseSetsFor5Reps);
			let getSortedMax1x5CoreExercise = getSortedMax1x5Exercise(getMax1x5CoreExercise);

			return {
				exerciseName: exerciseName,
				description: 'test',
				data: getDisplayMax1x5Exercise(getSortedMax1x5CoreExercise)(state)
			}
		});
	});
