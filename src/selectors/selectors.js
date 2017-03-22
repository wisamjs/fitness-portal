import { createSelector } from 'reselect';

import { getDisplayMax1x5Squats } from './squatSelectors';
import { getDisplayMax1x5Deadlifts } from './deadliftSelectors';

export const graphs1x5 = createSelector(
  getDisplayMax1x5Squats, 
  getDisplayMax1x5Deadlifts,
  (squat1x5, deadlift1x5) => {
    return {
      squat1x5, 
      deadlift1x5
    }
  });
