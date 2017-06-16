import { 
	getLevelsProp,
	getPersonalizedLevelLabels,
	getStandardsProp,
	getPersonalizedStandardsByExercise
} from '../../utils/utils';

import { createSelector } from 'reselect';



export const levelLabels = createSelector(
	getLevelsProp,
	getPersonalizedLevelLabels
);

export const standardsRowData = createSelector(
	getStandardsProp,
	getPersonalizedStandardsByExercise
);


