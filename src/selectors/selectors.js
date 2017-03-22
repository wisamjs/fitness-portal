import { createSelector } from 'reselect';
import R from 'ramda';
window.R = R;

export const getExercises = ({exercises}) => exercises;
export const getDates = ({dates}) => dates;
export const getworkouts = ({workouts}) => workouts;
export const getWorkingSets = ({workingSets}) => workingSets;

export const getWorkoutFromSet = (set, workouts) => R.find(R.propEq('id', set.workoutId), workouts);
export const getDateFromWorkout = (workout, dates) => R.find(R.propEq('id', workout.dateId),dates);

export const getExerciseByName = (name) => {
  return (exercises) => 
  R.head(R.filter(R.propEq('name',name), exercises));
}

export const getSquatExercise = createSelector(
  getExercises, 
  getExerciseByName('Barbell Squat')
);

export const getDeadliftExercise = createSelector(
  getExercises, 
  getExerciseByName('Barbell Deadlift')
);



export const getWorkingSetsForExercise = (exercise, workingSets) => {
    return R.filter(
      R.propEq('exerciseId', exercise.id),
      workingSets
    )
};


export const getWorkingSetsByReps = (reps) => {
  return (workingSets) => R.filter(
      R.propEq('reps', reps),
      workingSets
    );
  }

export const sortSetsByWeightAndDate = (workingSets) => {
  return R.sortWith([
    R.descend(R.prop('weight'))
    ], workingSets);
}

export const addDateToSets = (sets, workouts, dates) => {
    return sets.map((set, i) => {
      var workout = getWorkoutFromSet(set, workouts);
      var day = getDateFromWorkout(workout, dates);
      return {
        ...set,
        date: day.date,
        orderId: i + 1
      };
    })
  }


export const getSquatWorkingSets = createSelector(
  getSquatExercise, 
  getWorkingSets,
  getWorkingSetsForExercise
)

export const getDeadliftWorkingSets = createSelector(
  getDeadliftExercise, 
  getWorkingSets,
  getWorkingSetsForExercise
)

export const getSquatWorkingSetsFor5Reps = createSelector(
  getSquatWorkingSets, 
  getWorkingSetsByReps(5)
);

export const getDeadliftWorkingSetsFor5Reps = createSelector(
  getDeadliftWorkingSets, 
  getWorkingSetsByReps(5)
);

export const getSortedSquatSetsFor5Reps = createSelector(
  getSquatWorkingSetsFor5Reps, 
  sortSetsByWeightAndDate
);

export const getSortedDeadliftSetsFor5Reps = createSelector(
  getDeadliftWorkingSetsFor5Reps, 
  sortSetsByWeightAndDate
);

export const getMax1x5Squats = createSelector(
  getSortedSquatSetsFor5Reps, 
  R.uniqBy(R.prop('workoutId'))
)

export const getMax1x5Deadlifts = createSelector(
  getSortedDeadliftSetsFor5Reps, 
  R.uniqBy(R.prop('workoutId'))
)

export const getSortedMax1x5Squats = createSelector(
  getMax1x5Squats, 
  R.sort(R.descend(R.prop('workoutId')))
)

export const getSortedMax1x5Deadlifts = createSelector(
  getMax1x5Deadlifts, 
  R.sort(R.descend(R.prop('workoutId')))
)


export const getDisplayMax1x5Squats = createSelector(
  getSortedMax1x5Squats,
  getworkouts,
  getDates,
  addDateToSets);

export const getDisplayMax1x5Deadlifts = createSelector(
  getSortedMax1x5Deadlifts,
  getworkouts,
  getDates,
  addDateToSets);