import React, {PropTypes} from 'react';
import {
  BarChart, 
  Bar, 
  Brush, 
  ReferenceLine, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend
} from 'recharts';

const SimpleBarChart = ({data, xKey, yKey}) => {

  return (
    <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
     <XAxis dataKey={xKey}/>
     <YAxis/>
     <CartesianGrid strokeDasharray="3 3"/>
     <Tooltip/>
     <Legend verticalAlign="top" wrapperStyle={{lineHeight: '40px'}}/>
     <ReferenceLine y={0} stroke='#000'/>
     <Brush dataKey={xKey} height={30} stroke="#38ABE8"/>
     <Bar dataKey={yKey} fill="#38ABE8" />
    </BarChart>
  );
}

SimpleBarChart.defaultName = 'SimpleBarChart';
SimpleBarChart.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string
}

export default SimpleBarChart;

