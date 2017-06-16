import { createSelector } from 'reselect';

import { 
  statsForMaxSetOfFive, 
  statsForMaxSetOfAny,
  statsForMaxFiveSetOfFive
} from './selectors';

import R from 'ramda';

export const statistics = createSelector(
  statsForMaxSetOfFive,
  statsForMaxSetOfAny,
  statsForMaxFiveSetOfFive,
  (maxSetOfFive, maxSetOfAny, maxFiveSetsofFive) => {
  	return {
  		maxSetOfFive: {
  			name: 'Set of Five',
  			data: maxSetOfFive
  		},
  		maxSetOfAny: {
  			name: 'Set of Any',
  			data: maxSetOfAny
  		},

      maxFiveSetsofFive: {
        name: 'Five Sets of Five',
        data: maxFiveSetsofFive
      }
  	}
  });

export const statisticsByLift = createSelector(
  statsForMaxSetOfFive,
  statsForMaxSetOfAny,
  statsForMaxFiveSetOfFive,
  (maxSetOfFive, maxSetOfAny, maxFiveSetsofFive) =>
    R.groupBy(R.prop('exerciseName'), maxSetOfFive
    .concat(maxSetOfAny)
    .concat(maxFiveSetsofFive)
  ));



