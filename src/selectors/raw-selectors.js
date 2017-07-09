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
export const getWorkoutId = R.prop('workoutId');

//custom helper functions
export const mapIndex = R.addIndex(R.map);
export const insertHead = R.insert(0);

export const idEq = R.propEq('id');
export const nameEq = R.propEq('name');
export const weightEq = R.propEq('weight');
export const repsEq = R.propEq('reps');
export const exerciseIdEq = R.propEq('excerciseId');

// Data retrieval by referencing foreign key
export const getDateFromWorkout = (workout, dates) => R.find(idEq(workout.dateId),dates);
export const getWorkoutFromSet = (set, workouts) => R.find(idEq(set.workoutId), workouts);
export const getExerciseFromSet = (set, exercises) => R.find(idEq(set.exerciseId),exercises);

// Data grouping
export const groupDataByProp = R.curry((getProp, data ) => R.values(R.groupBy(getProp)(data)))
export const groupByExerciseId = R.groupBy(getExerciseIdProp);

// Max data retrieval
export const getMaxByEstimate = R.maxBy(getEstimatedMaxProp);
export const getMaxWeightByEstimateFromSets = R.reduce(getMaxByEstimate, {estimatedMax: 0});
export const getMaxByWeight = R.maxBy(getWeightProp);
export const getMaxWeightFromSets = R.reduce(getMaxByWeight, {weight: 0});

// Date & Time handling
export const formatDate = (date) => moment(date, 'MMM DD, YYYY').format('MMM DD');

export const wrapWithProp = R.curry((prop, obj) => {
  const result = {};
  result[prop] = obj;
  return result;
});

export const getOneRepMax = (weight, reps) => {
  return weight/(1.0278 - (0.0278 * reps));
}

export const getPRsForExercises = (exercises) => {
  return R.map(
  R.compose(
    wrapWithProp('data'), 
    getMaxWeightFromSets, 
    getDataProp
  ))(exercises)
};

export const getLabeledPRsforExercises = (exercises) => 
  mapIndex(
    (exercise, i) => R.merge(
      exercise,  
      getPRsForExercises(exercises)[i])
  );



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

// Data filtering
export const getExerciseByName = (name) => {
  return (exercises = []) => 
  R.head(R.filter(nameEq(name), exercises));
}

export const getExerciseById = (id) => {
  return (exercises) => 
  R.head(R.filter(idEq(id), exercises));
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
          return weightEq( set.weight)
        }, workout));
        return sets.concat(set);
      }

      return sets;
    }, [])
}

export const getFiveSetsofFiveReps = (workouts) => getMultipleSetsofFiveReps(5)(workouts);

export const getWorkingSetsByReps = (reps) => {
  return (workingSets) => R.filter(
      repsEq( reps),
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
  export const getStandardsByExercise = R.compose(R.values, groupByExerciseId);

  export const getPersonalizedStandardsByExercise = (data) => {
    return getStandardsByExercise(data);
  }
