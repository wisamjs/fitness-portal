import R from 'ramda';
import moment from 'moment';

//High-level props
export const getState = (state) => state;
export const getStrength = (state) => R.prop('strength');
export const getHistory = (state) => R.prop('history');

//History props
export const getExercises = R.prop('exercises');
export const getDates = R.prop('dates');
export const getWorkouts = R.prop('workouts');
export const getWorkingSets = R.prop('workingSets');

//Strength props
export const getStandardsProp = R.prop('standards');
export const getLevelsProp  = R.prop('levels');

//Low-level props
export const getNameProp = R.prop('name');
export const getExerciseIdProp = R.prop('exerciseId');
export const getWeightProp = R.prop('weight');
export const getDataProp = R.prop('data');
export const getEstimatedMaxProp = R.prop('estimatedMax');

//custom helper functions
export const mapIndex = R.addIndex(R.map);
export const insertHead = R.insert(0);
export const idIs = R.propEq('id');

export const wrapWithProp = R.curry((prop, obj) => {
  const result = {};
  result[prop] = obj;
  return result;
});

export const getOneRepMax = (weight, reps) => {
  return weight/(1.0278 - (0.0278 * reps));
}

export const getMaxByEstimate = R.maxBy(getEstimatedMaxProp);
export const getMaxWeightByEstimateFromSets = R.reduce(getMaxByEstimate, {estimatedMax: 0});

export const getMaxByWeight = R.maxBy(getWeightProp);
export const getMaxWeightFromSets = R.reduce(getMaxByWeight, {weight: 0});

export const getPRsForExercises = (exercises) => {
  return R.map(
  R.compose(
    wrapWithProp('data'), 
    getMaxWeightFromSets, 
    getDataProp
  ))(exercises)
};

export const getLabeledPRsforExercises = (exercises) => {  
  return mapIndex((exercise, i) => R.merge(exercise,  getPRsForExercises(exercises)[i]))(exercises);
}



export const addOneRepEstimate = R.map((workoutData) => {
  return {
    ...workoutData, 
      estimatedMax: getOneRepMax(workoutData.weight, workoutData.reps)
  };
});

export const getPRsByEstimateForExercises = R.map(
  R.compose(
    getMaxWeightByEstimateFromSets, 
    addOneRepEstimate, 
    getDataProp
    )
);

export const formatDate = (date) => moment(date, 'MMM DD, YYYY').format('MMM DD');

export const getDateFromWorkout = (workout, dates) => R.find(R.propEq('id', workout.dateId),dates);
export const getSetsByWorkout = (sets) => R.values(R.groupBy(R.prop('workoutId'))(sets));

export const getWorkoutFromSet = (set, workouts) => R.find(idIs(set.workoutId), workouts);
export const getExerciseFromSet = (set, exercises) => R.find(R.propEq('id', set.exerciseId),exercises);

export const getExerciseByName = (name) => {
  return (exercises = []) => 
  R.head(R.filter(R.propEq('name',name), exercises));
}

export const getExerciseById = (id) => {
  return (exercises) => 
  R.head(R.filter(R.propEq('id',id), exercises));
}

export const countSetsByWeight = (workout) => R.countBy(getWeightProp, workout);


export const getWorkingSetsForExercise = (exercise = '', workingSets = []) => {
    return R.filter(
      R.propEq('exerciseId', exercise.id),
      workingSets
    )
};  


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

export const getFiveSetsofFiveReps = (workouts) => getMultipleSetsofFiveReps(5)(workouts);

export const getWorkingSetsByReps = (reps) => {
  return (workingSets) => R.filter(
      R.propEq('reps', reps),
      workingSets
    );
  }

export const sortSetsByWeightAndDate = (workingSets) => {
  return R.sortWith([
    R.descend(getWeightProp)
    ], workingSets);
}

export const addDateToSets = (sets, workouts, dates, exercises) => {
  if (workouts){
    return R.map((set) => {
      const workout = getWorkoutFromSet(set, workouts);
      const day = getDateFromWorkout(workout, dates);

      return {
        ...set,
        date: formatDate(day.date), 
      };
    })(sets);
  }
  return sets;
  }

  export const getLevelLabels = R.map(getNameProp);
  export const getPersonalizedLevelLabels =  R.compose(getLevelLabels);
  export const groupByExerciseId = R.groupBy(getExerciseIdProp);
  export const getStandardsByExercise = R.compose(R.values, groupByExerciseId);

  export const getPersonalizedStandardsByExercise = (data) => {
    return getStandardsByExercise(data);
  }
