
import {
  getSpecificExercise,
  getExercisetWorkingSets,
  getExerciseWorkingSetsFor5Reps,
  getSortedExerciseSetsFor5Reps,
  getMax1x5Exercise,
  getSortedMax1x5Exercise,
  getDisplayMax1x5Exercise,
} from './exerciseSelectors';


const getSquatExercise = getSpecificExercise('Barbell Squat');
const getSquatWorkingSets = getExercisetWorkingSets(getSquatExercise);
const getSquatWorkingSetsFor5Reps = getExerciseWorkingSetsFor5Reps(getSquatWorkingSets);
const getSortedSquatSetsFor5Reps = getSortedExerciseSetsFor5Reps(getSquatWorkingSetsFor5Reps);
const getMax1x5Squats = getMax1x5Exercise(getSortedSquatSetsFor5Reps);
const getSortedMax1x5Squats = getSortedMax1x5Exercise(getMax1x5Squats);

export const getDisplayMax1x5Squats = getDisplayMax1x5Exercise(getSortedMax1x5Squats);