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
  const maxSetOfFive = statistics.maxSetOfFive;
  const maxSetOfAny = statistics.maxSetOfAny;
  const graphTypes = [maxSetOfFive, maxSetOfAny];

  const graphs = graphTypes.map((graphType, id) => {
    const title = graphType.name;
    
    const graphData = graphType.data.map((exercise, id) => {
      const data = exercise.data;
      const title = R.prop('exerciseName', exercise);
      const xValues = exercise.data.map((set) => set.date);
      const xDisplay = exercise.data.map((set) => set.date);

      return <div key={id}>
        <h3>{title}</h3>
        <Chart
          data={data} xValues={xValues} xDisplay={xDisplay} domain={{}}>
        </Chart>
      </div>
    });

    return <div key={id}>
      <h2>{title}</h2>
      <div>
        {graphData}
      </div>
    </div>

  });

  return (
    <div>
    {graphs}
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Analysis);
