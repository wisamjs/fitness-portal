import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { updateWorkoutFormat, updateExercise } from '../../actions/actions';
import { SET_FORMATS, CORE_EXERCISES } from '../../utils/constants';

import Square from '../../components/Square';
import SimpleBarChart from '../../components/SimpleBarChart';
import SimpleLineChart from '../../components/SimpleLineChart';

import { statistics, statisticsByLift } from '../../selectors/selectors';

window.R = R;

function mapStateToProps({workouts, preferences}) {

  return {
    statisticsByLift: statisticsByLift(workouts),
    format: preferences.graph.format,
    exercise: preferences.graph.exercise
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectFormat: (value) => dispatch(updateWorkoutFormat(value)),
    selectExercise: (value) => dispatch(updateExercise(value))

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

  const formatButtons = SET_FORMATS.map((format, id) =>
    <button key = {id} onClick={ () => selectFormat(format)}>{format}</button>
  );

  const exerciseButtons = CORE_EXERCISES.map((exercise, id) =>
    <button key = {id} onClick={ () => selectExercise(exercise)}>{exercise}</button>
  );

  
  return (
    <div className="flex">
      <div className="flex flex-column half-width">
        <div className="temporary">Box 1</div>
        <div className="temporary">Box 2</div>
      </div>
      <div className="flex flex-column half-width">
        <div className="temporary">Box 3</div>
        <div>
          {formatButtons}
          {exerciseButtons}
          <Square 
            chartType="SimpleBarChart" 
            title={exercise} 
            graphData={graphData}>
          </Square>
        </div>
      </div>
    </div>
/*    
    */
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
