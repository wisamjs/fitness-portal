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
    let max1x5Exercise = graph1x5;

    let xValues = max1x5Exercise.map((set) => set.date);
    let xDisplay = max1x5Exercise.map((set) => set.date);

    // const maxSet = R.reduce(R.maxBy(R.prop('weight')), {weight: 0}, graph1x5);
    // const minSet = R.reduce(R.minBy(R.prop('weight')), maxSet, graph1x5);

    return <Chart key={id}
    data={max1x5Exercise} xValues={xValues} xDisplay={xDisplay} domain={{}}>
    </Chart>
  });

  return (
    <div> {charts}
  </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
