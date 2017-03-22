import React from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { getDisplayMax1x5Squats, getDisplayMax1x5Deadlifts } from '../../selectors/selectors';
function mapStateToProps({workouts}) {

  return {
    max1x5Squats: getDisplayMax1x5Squats(workouts),
    max1x5Deadlifts: getDisplayMax1x5Deadlifts(workouts)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };

}

const Analysis = ({max1x5Squats, max1x5Deadlifts}) => {
  console.log(max1x5Squats, max1x5Deadlifts);

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
