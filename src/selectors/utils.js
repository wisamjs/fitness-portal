import R from 'ramda';

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