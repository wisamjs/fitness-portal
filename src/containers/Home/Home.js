import React from 'react';
import { connect } from 'react-redux';
import Square from '../../components/Square';
import SimpleBarChart from '../../components/SimpleBarChart';
import SimpleLineChart from '../../components/SimpleLineChart';

import { statistics } from '../../selectors/selectors';
import R from 'ramda';
window.R = R;

function mapStateToProps({workouts}) {

  return {
    statistics: statistics(workouts)
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

const Home = ({statistics}) => {
  const maxSetOfFive = statistics.maxSetOfFive;
  // const maxSetOfAny = statistics.maxSetOfAny;
  // const maxFiveSetsofFive = statistics.maxFiveSetsofFive;

  // const graphTypes = [maxSetOfFive, maxSetOfAny, maxFiveSetsofFive];
  const title = maxSetOfFive.name;
    
  const graphs = maxSetOfFive.data.map((exercise, id) => {
    const title = R.prop('exerciseName', exercise);
    const graphData = {
      xKey: 'date',
      yKey: 'weight',
      data: exercise.data
    };

    console.log(graphData);

    return <Square 
        key={id}
        id={id}
        chartType="SimpleBarChart" 
        title={title} 
        graphData={graphData}>
      </Square>
  });


  return (
    <div>
      <div className="flex">
        {graphs}
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Home);
