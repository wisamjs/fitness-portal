import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';

import { updateWorkoutFormat, updateExercise } from '../../actions/actions';
import { SET_FORMATS, CORE_EXERCISES } from '../../utils/constants';

import Square from '../../components/Square';
import RaisedButton from 'material-ui/RaisedButton';

import { statisticsByLift } from '../../selectors/selectors';

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
    <RaisedButton
    className="p1" 
    label={format} 
    primary={true} 
    key={id} 
    onClick={
      () => selectFormat(format)
    }/>
  );

  const exerciseButtons = CORE_EXERCISES.map((exercise, id) =>
    <RaisedButton 
    className="p1"
    label={exercise} 
    secondary={true} 
    key={id} 
    onClick={
     () => selectExercise(exercise)
   }/>
  );

  
  return (
    <div>
      <h3 className="white">Format</h3>
      <div className="p2">
        {formatButtons}
      </div>
      <h3 className="white">Exercises</h3>
      <div>
        {exerciseButtons}
      </div>
      <Square 
        chartType="SimpleBarChart" 
        title={exercise} 
        graphData={graphData}>
      </Square>
    </div>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
