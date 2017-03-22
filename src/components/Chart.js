import React, {PropTypes} from 'react';
import { VictoryAxis, VictoryChart, VictoryBar, VictoryLabel } from 'victory';

const Chart = ({data, xValues, xDisplay, domain}) => {
  return (
	<VictoryChart
	        theme={theme}
	        domainPadding={10}
	        domain={domain}
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
	xDisplay: PropTypes.array,
	domain: PropTypes.object
}

const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const barColor = '#38ABE8';
const tickColor = '#D5DCE4';

// Typography
const sansSerif = "'Roboto', 'Helvetica Neue', Helvetica, sans-serif";
const letterSpacing = "normal";
const fontSize = 8;

// Layout
const padding = 8;
const baseProps = {
  width: 450,
  height: 350,
  padding: 50
};

// Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700
};

const centeredLabelStyles = Object.assign({ textAnchor: "middle" }, baseLabelStyles);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const theme = {
  axis: Object.assign({
    style: {
      axis: {
        fill: "transparent",
        stroke: blueGrey300,
        strokeWidth: 2,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: Object.assign({}, centeredLabelStyles, {
        padding,
        stroke: "transparent"
      }),
      grid: {
        fill: "transparent",
        stroke: 'transparent',
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        size: 5,
        stroke: blueGrey300,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      tickLabels: Object.assign({}, baseLabelStyles, {
        fill: tickColor,
        stroke: "transparent"
      })
    }
  }, baseProps),
  bar: Object.assign({
    style: {
      data: {
        fill: barColor,
        padding,
        stroke: "transparent",
        strokeWidth: 0,
        width: 5
      },
      labels: baseLabelStyles
    }
  }, baseProps)
};

export default Chart;
