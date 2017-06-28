import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { updateWorkoutFormat, updateExercise } from '../../actions/actions';
import { CORE_EXERCISES } from '../../utils/constants';

import Graph from '../../components/Graph';
import Select from '../../components/Select';
import { historySelectors } from '../../selectors/history';

window.R = R;

function mapStateToProps({history, preferences}) {
  const workoutData = historySelectors(history);
  window.workoutData = workoutData;

  return {
    statisticsByLift: workoutData.statisticsByLift,
    format: preferences.graph.format,
    exerciseName: preferences.graph.exercise
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectFormat: (e, i, val) => dispatch(updateWorkoutFormat(val)),
    selectExercise: (e, i, val) => dispatch(updateExercise(val))

  };
}

const Analysis = ({statisticsByLift, format, exerciseName, selectFormat, selectExercise}) => {
  const isFormat = R.propEq('format', format);
  const exercise = R.head(statisticsByLift[exerciseName].filter(isFormat));

    
  const graphData = {
    xKey: 'date',
    yKey: 'weight',
    data: exercise.data
  };

  const selectStyles = {
    selectField: {
      // width: '150px'
    },

    label: {
      fontSize: '24px'
    },
    floatingLabel: {
      color: '#40629B',
      // display: 'none'
    }
  }

  
  return (
    <div className="rounded card m1 p3">
      <div className="flex pb2">
        <Select
        name="Exercises"
        styles={selectStyles}
        className="p1 half-width"
        defaultSelected={exerciseName}
        onChange={selectExercise}
        values={CORE_EXERCISES}/>

      {
        // <Select
        // name="Format"
        // className=" p1 half-width"
        // defaultSelected={format}
        // onChange={selectFormat}
        // values={SET_FORMATS}/>
      }
      </div>

      <Graph 
        chartType="line chart" 
        title={exerciseName} 
        data={graphData}>
      </Graph>
    </div>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
