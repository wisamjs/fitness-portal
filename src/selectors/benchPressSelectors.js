
import {
  getSpecificExercise,
  getExercisetWorkingSets,
  getExerciseWorkingSetsFor5Reps,
  getSortedExerciseSetsFor5Reps,
  getMax1x5Exercise,
  getSortedMax1x5Exercise,
  getDisplayMax1x5Exercise,
} from './exerciseSelectors';


const getBenchPressExercise = getSpecificExercise('Barbell Bench Press');
const getBenchPressWorkingSets = getExercisetWorkingSets(getBenchPressExercise);
const getBenchPressWorkingSetsFor5Reps = getExerciseWorkingSetsFor5Reps(getBenchPressWorkingSets);
const getSortedBenchPressSetsFor5Reps = getSortedExerciseSetsFor5Reps(getBenchPressWorkingSetsFor5Reps);
const getMax1x5BenchPresss = getMax1x5Exercise(getSortedBenchPressSetsFor5Reps);
const getSortedMax1x5BenchPresss = getSortedMax1x5Exercise(getMax1x5BenchPresss);

export const getDisplayMax1x5BenchPresss = getDisplayMax1x5Exercise(getSortedMax1x5BenchPresss);