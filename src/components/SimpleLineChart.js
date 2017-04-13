import React, {PropTypes} from 'react';
import {
  LineChart, 
  Bar, 
  Brush, 
  ReferenceLine, 
  XAxis,
  Line,
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts';

const SimpleLineChart = ({data, xKey, yKey, id}) => {

  return (
    <LineChart width={600} height={200} data={data} syncId={id}
      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey={xKey}/>
      <YAxis/>
      <Tooltip/>
      <Line type='monotone' dataKey={yKey} stroke='#0DE79D' fill='#82ca9d' />
      <Brush />
    </LineChart>

    // <LineChart width={600} height={300} data={data}
    //       margin={{top: 5, right: 30, left: 20, bottom: 5}}>
    //  <XAxis dataKey={xKey}/>
    //  <YAxis/>
    //  <CartesianGrid strokeDasharray="3 3"/>
    //  <Tooltip/>
    //  <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
    //  <ReferenceLine y={0} stroke='#000'/>
    //  <Brush dataKey={xKey} height={30} stroke="#38ABE8"/>
    //  <Bar dataKey={yKey} fill="#38ABE8" />
    // </LineChart>
  );
}

SimpleLineChart.defaultName = 'SimpleLineChart';
SimpleLineChart.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string
}

export default SimpleLineChart;

