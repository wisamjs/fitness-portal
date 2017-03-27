import React from 'react';
import { connect } from 'react-redux';
import Chart from '../../components/Chart';
import { statistics } from '../../selectors/selectors';
import R from 'ramda';

function mapStateToProps({workouts}) {

  return {
    statistics: statistics(workouts)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };

}

const Analysis = ({statistics}) => {
  const graphs1x5 = statistics.maxSetOfFive;
  const graphs1xAny = statistics.maxSetOfAny;

  const setOfFivecharts = graphs1x5.map((graph1x5, id) => {
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

    const graphs1xAnyCharts = graphs1xAny.map((graph1xAny, id) => {
    const max1xAny = graph1xAny.data;
    const title = R.prop('exerciseName', graph1xAny);

    const xValues = max1xAny.map((set) => set.date);
    const xDisplay = max1xAny.map((set) => set.date);

    const description = `Most weight lifted for ${title}`;

    return <div key={id}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Chart
        data={max1xAny} xValues={xValues} xDisplay={xDisplay} domain={{}}>
      </Chart>
    </div>
  });

  return (
    <div>
      {setOfFivecharts}
      {graphs1xAnyCharts}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
