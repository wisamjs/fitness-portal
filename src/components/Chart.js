import React, {PropTypes} from 'react';
import {
  ResponsiveContainer,
  LineChart, 
  BarChart,
  Bar,
  XAxis,
  Line,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip, 
} from 'recharts';

const Chart = ({data, xKey, yKey, id, type}) => {
  const interval = Math.floor(data.length / 5);
  
  const lineChart =
     <ResponsiveContainer>
    <LineChart data={data} syncId={id}
      margin={{top: 10, right: 30, left: 0, bottom: 0}}>
      <XAxis dataKey={xKey} interval={interval}/>
      <YAxis tickCount={10}/>
      <Tooltip/>
      <Line type='monotone' dataKey={yKey} stroke='#0DE79D' fill='#0DE79D' dot={false} />
    </LineChart>
  </ResponsiveContainer>

  const barChart = 
      <BarChart data={data} syncId={id} width={600} height={300}
        margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey={xKey}/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey={yKey} fill="#8884d8" />
      </BarChart>

  if (type === 'line chart') {
    return lineChart;
  } else {
    return barChart;
  }
}

Chart.defaultName = 'Chart';
Chart.propTypes = {
  data: PropTypes.array,
  xKey: PropTypes.string,
  yKey: PropTypes.string,
  type: PropTypes.string
}

export default Chart;
