import { createSelector } from 'reselect';

import { getDisplayMax1x5Squats } from './squatSelectors';
import { getDisplayMax1x5Deadlifts } from './deadliftSelectors';
import { getDisplayMax1x5BenchPresss } from './benchPressSelectors';

export const graphs1x5 = createSelector(
  getDisplayMax1x5Squats, 
  getDisplayMax1x5Deadlifts,
  getDisplayMax1x5BenchPresss,
  (squat1x5, deadlift1x5, benchPress1x5) => {
    return [
      squat1x5, 
      deadlift1x5,
      benchPress1x5
    ]
  });
