import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { updateWorkoutFormat, updateExercise } from '../../actions/actions';
import { SET_FORMATS, CORE_EXERCISES } from '../../utils/constants';

import Graph from '../../components/Graph';
import GraphRadioGroup from '../../components/GraphRadioGroup';

import { exerciseSelectors } from '../../selectors/selectors';

window.R = R;

function mapStateToProps({workouts, preferences}) {
  const workoutData = exerciseSelectors(workouts);
  window.workoutData = workoutData;

  return {
    statisticsByLift: workoutData.statisticsByLift,
    format: preferences.graph.format,
    exercise: preferences.graph.exercise
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectFormat: (e) => dispatch(updateWorkoutFormat(e.target.value)),
    selectExercise: (e) => dispatch(updateExercise(e.target.value))

  };
}

const Analysis = ({statisticsByLift, format, exercise, selectFormat, selectExercise}) => {
  const isFormat = R.propEq('format', format);
  const exerciseName = R.head(statisticsByLift[exercise].filter(isFormat));
    
  const graphData = {
    xKey: 'date',
    yKey: 'weight',
    data: exerciseName.data
  };

  
  return (
    <div>
      <div className="flex space-between">
        <GraphRadioGroup
        name="Format"
        className=" p1 half-width"
        defaultSelected={format}
        onChange={selectFormat}
        values={SET_FORMATS}/>

        <GraphRadioGroup
        name="Exercises"
        className="p1 half-width"
        defaultSelected={exercise}
        onChange={selectExercise}
        values={CORE_EXERCISES}/>
      </div>

      <Graph 
        chartType="line chart" 
        title={exercise} 
        data={graphData}>
      </Graph>
    </div>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
