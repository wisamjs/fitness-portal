import R from 'ramda';
import moment from 'moment';

export const mapIndex = R.addIndex(R.map);
export const insertHead = R.insert(0);
export const idIs = R.propEq('id');


export const getState = (state) => state;
export const getExercises = R.prop('exercises');
export const getDates = R.prop('dates');
export const getworkouts = R.prop('workouts');
export const getWorkingSets = R.prop('workingSets');
export const getNameProp = R.prop('name');
export const getExerciseIdProp = R.prop('exerciseId');
export const getStandardsProp = R.prop('standards');
export const getLevelsProp  = R.prop('levels');
export const getWeightProp = R.prop('weight');
export const getDataProp = R.prop('data');
export const getEstimatedMaxProp = R.prop('estimatedMax');

export const wrapWithProp = R.curry((prop, obj) => {
  const result = {};
  result[prop] = obj;
  return result;
});

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

export const getOneRepMax = (weight, reps) => {
  return weight/(1.0278 - (0.0278 * reps));
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
  return (exercises) => 
  R.head(R.filter(R.propEq('name',name), exercises));
}

export const getExerciseById = (id) => {
  return (exercises) => 
  R.head(R.filter(R.propEq('id',id), exercises));
}

export const countSetsByWeight = (workout) => R.countBy(getWeightProp, workout);


export const getWorkingSetsForExercise = (exercise, workingSets) => {
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
    return R.map((set) => {
      const workout = getWorkoutFromSet(set, workouts);
      const day = getDateFromWorkout(workout, dates);

      return {
        ...set,
        date: formatDate(day.date), 
      };
    })(sets);
  }

export const sampleData = [
  { id: 0, exerciseId: 0, standard: "245 lbs"},
  { id: 0, exerciseId: 1, standard: "---"},
  { id: 0, exerciseId: 2, standard: "315 lbs"},
  { id: 0, exerciseId: 3, standard: "---"},
  { id: 0, exerciseId: 4, standard: "---"},
  { id: 0, exerciseId: 5, standard: "170 lbs"},
  { id: 0, exerciseId: 6, standard: "---"},
  { id: 0, exerciseId: 7, standard: "---"},
  { id: 0, exerciseId: 8, standard: "105 lbs"},
  { id: 0, exerciseId: 9, standard: "---"},
  { id: 0, exerciseId: 10, standard: "---"},
  { id: 0, exerciseId: 11, standard: "+20"},
  { id: 0, exerciseId: 12, standard: "+5"},
  { id: 0, exerciseId: 13, standard: "---"}
]

  export const getLevelLabels = R.map(getNameProp);
  export const getPersonalizedLevelLabels =  R.compose(insertHead('You'), getLevelLabels);
  export const groupByExerciseId = R.groupBy(getExerciseIdProp);
  export const getStandardsByExercise = R.compose(R.values, groupByExerciseId);

  export const getPersonalizedStandardsByExercise = (data) => {
    // return mapIndex((standard, i) => { return insertHead(sampleData[i])(standard) })(getStandardsByExercise(data));
    // return mapIndex((standard, i) => { return insertHead(sampleData[i])(standard) })(getStandardsByExercise(data));
    return getStandardsByExercise(data);
  }
