import { 
	getLevelsProp,
	getStandardsProp,
	getPersonalizedLevelLabels,
	getPersonalizedStandardsByExercise,
	getExerciseById,
	getWorkouts,
	getExerciseFromSet
} from './raw-selectors';

import R from 'ramda';

import { createSelector, createStructuredSelector } from 'reselect';

export const getLevelLabelsSelector =  createSelector(
	getLevelsProp,
	getPersonalizedLevelLabels
)

export const getStandardsData = createSelector(
	getStandardsProp,
	getPersonalizedStandardsByExercise
)

export const getExercisesWithStandards = (standards, exercises) => {
	const ids = R.uniq(
			R.map(
				(std) => std.exerciseId
			)(standards)
		);
	return R.map((exerciseId) => getExerciseById(exerciseId)(exercises))(ids);
}

export const levelLabels = createSelector(
	(state) =>state.strength,
	getLevelLabelsSelector
);

export const standardsRowData = createSelector(
	(state) =>state.strength,
	getStandardsData
);

export const exercises = createSelector(
(state) => state.strength.standards,
(state) => state.history.exercises,
getExercisesWithStandards
);

export const strengthSelectors = createStructuredSelector({
  levelLabels,
  standardsRowData,
  exercises
});
