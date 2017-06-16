import { createSelector } from 'reselect';

import { 
  statsForMaxSetOfFive, 
  statsForMaxSetOfAny,
} from '../exercises/selectors';

import { 
	getPRsforExercises,
	getPRsByEstimateForExercises
} from '../../utils/utils';


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