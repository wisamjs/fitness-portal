import { createSelector } from 'reselect';

// import { getDisplayMax1x5Squats } from './squatSelectors';
// import { getDisplayMax1x5Deadlifts } from './deadliftSelectors';
import { getDisplayMax1x5CoreExercises } from './max1x5CoreExerciseSelectors';

export const graphs1x5 = createSelector(
  getDisplayMax1x5CoreExercises,
  (coreExercises1x5) => coreExercises1x5);
