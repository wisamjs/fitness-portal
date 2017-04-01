import { createSelector } from 'reselect';

import { statsForMaxSetOfFive } from './maxSetOfFive';
import { statsForMaxSetOfAny } from './maxSetOfAny';
import { statsForMaxFiveSetOfFive } from './maxFiveSetsOfFive';

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