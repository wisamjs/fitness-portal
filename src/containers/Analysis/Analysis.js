import React from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { graphs1x5 } from '../../selectors/selectors';
function mapStateToProps({workouts}) {

  return {
    graphs1x5: graphs1x5(workouts)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };

}

const Analysis = ({graphs1x5}) => {
  const max1x5Squats = graphs1x5.squat1x5;
  const max1x5Deadlifts = graphs1x5.deadlift1x5;

  const xValuesSquat = max1x5Squats.map((set) => set.date);
  const xDisplaySquat = max1x5Squats.map((set) => set.date);
  
  const xValuesDeadlift = max1x5Deadlifts.map((set) => set.date);
  const xDisplayDeadlift = max1x5Deadlifts.map((set) => set.date);


  return (
    <div>
  	 <Chart
    data={max1x5Squats} xValues={xValuesSquat} xDisplay={xDisplaySquat}>
    </Chart>

    <Chart
    data={max1x5Deadlifts} xValues={xValuesDeadlift} xDisplay={xDisplayDeadlift}>
    </Chart>
  </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
