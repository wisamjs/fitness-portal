
import {
  getSpecificExercise,
  getExercisetWorkingSets,
  getExerciseWorkingSetsFor5Reps,
  getSortedExerciseSetsFor5Reps,
  getMax1x5Exercise,
  getSortedMax1x5Exercise,
  getDisplayMax1x5Exercise,
} from './exerciseSelectors';

const getDeadliftExercise = getSpecificExercise('Barbell Deadlift');
const getDeadliftWorkingSets = getExercisetWorkingSets(getDeadliftExercise);
const getDeadliftWorkingSetsFor5Reps = getExerciseWorkingSetsFor5Reps(getDeadliftWorkingSets);
const getSortedDeadliftSetsFor5Reps = getSortedExerciseSetsFor5Reps(getDeadliftWorkingSetsFor5Reps);
const getMax1x5Deadlifts = getMax1x5Exercise(getSortedDeadliftSetsFor5Reps);
const getSortedMax1x5Deadlifts = getSortedMax1x5Exercise(getMax1x5Deadlifts);

export const getDisplayMax1x5Deadlifts = getDisplayMax1x5Exercise(getSortedMax1x5Deadlifts);