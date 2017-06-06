import { createSelector } from 'reselect';

import { statsForMaxSetOfFive } from './maxSetOfFive';
import { statsForMaxSetOfAny } from './maxSetOfAny';
import { statsForMaxFiveSetOfFive } from './maxFiveSetsOfFive';
import { statsForMaxThreeSetsofFive } from './maxThreeSetsofFive';

export const statistics = createSelector(
  statsForMaxSetOfFive,
  statsForMaxSetOfAny,
  statsForMaxFiveSetOfFive,
  statsForMaxThreeSetsofFive,
  (maxSetOfFive, maxSetOfAny, maxFiveSetsofFive, maxThreeSetsofFive) => {
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
      },
      maxThreeSetsofFive: {
        name: 'Three Sets of Five',
        data: maxFiveSetsofFive
      }
  	}
  });