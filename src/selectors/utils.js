import R from 'ramda';
import moment from 'moment';

export const getState = (state) => state;
export const getExercises = ({exercises}) => exercises;
export const getDates = ({dates}) => dates;
export const getworkouts = ({workouts}) => workouts;
export const getWorkingSets = ({workingSets}) => workingSets;

export const formatDate = (date) => moment(date, 'MMM DD, YYYY').format('MMM DD');

export const getWorkoutFromSet = (set, workouts) => R.find(R.propEq('id', set.workoutId), workouts);
export const getDateFromWorkout = (workout, dates) => R.find(R.propEq('id', workout.dateId),dates);
export const getExerciseFromSet = (set, exercises) => R.find(R.propEq('id', set.exerciseId),exercises);

export const getExerciseByName = (name) => {
  return (exercises) => 
  R.head(R.filter(R.propEq('name',name), exercises));
}

export const getSetsByWorkout = (sets) => R.values(R.groupBy(R.prop('workoutId'))(sets));

export const getWorkingSetsForExercise = (exercise, workingSets) => {
    return R.filter(
      R.propEq('exerciseId', exercise.id),
      workingSets
    )
};  

export const getFiveSetsofFiveReps = (workouts) => getMultipleSetsofFiveReps(5)(workouts);

export const getMultipleSetsofFiveReps = (repLimit) => {
    return R.reduce(function(sets, workout) {
      var mostReps = R.filter(R.lte(repLimit) , countSetsByWeight(workout));
      var hasMultipleSetsOfFive = R.head(R.keys(mostReps));

      if (hasMultipleSetsOfFive) {
        var set = R.head(R.filter(function(set) {
          return R.propEq('weight', set.weight)
        }, workout));
        return sets.concat(set);
      }

      return sets;
    }, [])
}


export const countSetsByWeight = (workout) => R.countBy(R.prop('weight'), workout);

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

export const addDateToSets = (sets, workouts, dates, exercises) => {
    return sets.map((set, i) => {
      const workout = getWorkoutFromSet(set, workouts);
      const day = getDateFromWorkout(workout, dates);

      return {
        ...set,
        date: formatDate(day.date),
      };
    })
  }