import React from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { graphs1x5 } from '../../selectors/selectors';
import R from 'ramda';

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
  const charts = graphs1x5.map((graph1x5, id) => {
    const max1x5Exercise = graph1x5.data;
    const title = R.prop('exerciseName', graph1x5);

    const xValues = max1x5Exercise.map((set) => set.date);
    const xDisplay = max1x5Exercise.map((set) => set.date);

    const description = `Most weight lifted for ${title} for 1 set of 5 reps`;

    return <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Chart
        data={max1x5Exercise} xValues={xValues} xDisplay={xDisplay} domain={{}}>
      </Chart>
    </div>
  });

  return (
    <div>
      {charts}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
