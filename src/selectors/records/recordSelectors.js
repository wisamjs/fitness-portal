import { createSelector } from 'reselect';

import { 
  statsForMaxSetOfFive, 
  statsForMaxSetOfAny,
} from '../exercises/selectors';

import {
	getLabeledPRsforExercises,
	getPRsByEstimateForExercises
} from '../../utils/utils';


export const getSetOfFivePR = createSelector(
	statsForMaxSetOfFive,
	getLabeledPRsforExercises
);

export const getMaxWeightPR = createSelector(
	statsForMaxSetOfAny,
	getLabeledPRsforExercises
);

export const getMaxWeightPRByEstimate = createSelector(
	statsForMaxSetOfAny,
	getPRsByEstimateForExercises
);

export const getAllTimePRs = createSelector(
	getSetOfFivePR,
	getMaxWeightPR,
	getMaxWeightPRByEstimate,
	(getSetOfFivePR, getMaxWeightPR, getMaxWeightPRByEstimate ) => {
		return {
			getSetOfFivePR, 
			getMaxWeightPR, 
			getMaxWeightPRByEstimate
		}

});