import React, {PropTypes} from 'react';
import {
  ResponsiveContainer,
  LineChart, 
  Brush, 
  XAxis,
  Line,
  YAxis, 
  Tooltip, 
} from 'recharts';

const SimpleLineChart = ({data, xKey, yKey, id}) => {

  return (
     <ResponsiveContainer>
    <LineChart data={data} syncId={id}
      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey={xKey}/>
      <YAxis/>
      <Tooltip/>
      <Line type='monotone' dataKey={yKey} stroke='#0DE79D' fill='#82ca9d' />
      <Brush />
    </LineChart>
  </ResponsiveContainer>
  );
}

SimpleLineChart.defaultName = 'SimpleLineChart';
SimpleLineChart.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string
}

export default SimpleLineChart;

