import { createSelector } from 'reselect';
import { statsForMaxSetOfFive } from './maxSetOfFive';
import { statsForMaxSetOfAny } from './maxSetOfAny';
import { statsForMaxFiveSetOfFive } from './maxFiveSetsOfFive';
import R from 'ramda';

export const statistics = createSelector(
  statsForMaxSetOfFive,
  statsForMaxSetOfAny,
  statsForMaxFiveSetOfFive,
  (maxSetOfFive, maxSetOfAny, maxFiveSetsofFive) => {
    console.log('ALIVE');
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



