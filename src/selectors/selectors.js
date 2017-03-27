import { createSelector } from 'reselect';

import { statsForMaxSetOfFive } from './maxSetOfFive';
import { getDisplayMaxWeightCoreExercises } from './maxSetOfAny';

export const graphs1x5 = createSelector(
  statsForMaxSetOfFive,
  (coreExercises1x5) => coreExercises1x5);

export const maxWeightPerWorkout = createSelector(
  getDisplayMaxWeightCoreExercises,
  (coreExercises) => coreExercises);

export const statistics = createSelector(
  statsForMaxSetOfFive,
  maxWeightPerWorkout,
  (maxSetOfFive, maxSetOfAny) => ({
  	maxSetOfFive,
  	maxSetOfAny
  }));