import { statistics, statisticsByLift } from './exercises/exerciseSelectors';
import { createSelector } from 'reselect';


export const exerciseSelectors = createSelector(
  statistics, 
  statisticsByLift,
  (statistics, statisticsByLift) => {
    return {
      statistics,
      statisticsByLift
    }

  });




