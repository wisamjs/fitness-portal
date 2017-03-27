import { createSelector } from 'reselect';
import { coreExercises } from '../utils/constants';
import {
  getSpecificExercise,
  getExercisetWorkingSets,
  getSortedExerciseSetsFor5Reps,
  getMax1x5Exercise,
  getSortedMax1x5Exercise,
  getDisplayMax1x5Exercise,
} from './exerciseSelectors';

import { getState } from './utils';

export const getDisplayMaxWeightCoreExercises = createSelector(
	getState,
	(state) => {
		return coreExercises.map((exerciseName) => {
			let getCoreExercise = getSpecificExercise(exerciseName);
			let getCoreExerciseWorkingSets = getExercisetWorkingSets(getCoreExercise);
			let getSortedCoreExerciseSets = getSortedExerciseSetsFor5Reps(getCoreExerciseWorkingSets);
			let getMaxWeightCoreExercise = getMax1x5Exercise(getSortedCoreExerciseSets);
			let getDisplayMaxWeightCoreExercise = getSortedMax1x5Exercise(getMaxWeightCoreExercise);

			return {
				exerciseName: exerciseName,
				description: 'test',
				data: getDisplayMax1x5Exercise(getDisplayMaxWeightCoreExercise)(state)
			}
		});
	});
