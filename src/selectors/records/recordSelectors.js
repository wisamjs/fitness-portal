import { 
  statsForMaxSetOfFive, 
  statsForMaxSetOfAny,
  statsForMaxFiveSetOfFive
} from '../exercises/selectors';

import { 
	getWeightProp, 
	getMaxByWeight,
	getDataProp,
	getMaxWeightFromSets,
	getPRsforExercises,
	getPRsByEstimateForExercises
} from '../../utils/utils';

import { createSelector } from 'reselect';

export const getSetOfFivePR = createSelector(
	statsForMaxSetOfFive,
	getPRsforExercises
);

export const getMaxWeightPR = createSelector(
	statsForMaxSetOfAny,
	getPRsforExercises
);

export const getMaxWeightPRByEstimate = createSelector(
	statsForMaxSetOfAny,
	getPRsByEstimateForExercises
);