import React, {PropTypes} from 'react';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryTheme } from 'victory';

const Chart = ({data, xValues, xDisplay}) => {
  return (
	<VictoryChart
	        // adding the material theme provided with Victory
	        theme={VictoryTheme.material}
	        domainPadding={20}
	        scale={{x: 'time', y: 'linear'}}
	      >
	        <VictoryAxis
	          tickValues={xValues}
	          tickFormat={xDisplay}
	        />
	        <VictoryAxis
	          dependentAxis
	          tickCount={10}
	          tickFormat={(x) => `${x} lb`}
	        />
	        <VictoryBar
	          data={data}
	          x="date"
	          y="weight"
	          />
	          </VictoryChart>
  );
}

Chart.defaultName = 'Chart';
Chart.propTypes = {
	data: PropTypes.array,
	xValues: PropTypes.array,
	xDisplay: PropTypes.array
}

export default Chart;
