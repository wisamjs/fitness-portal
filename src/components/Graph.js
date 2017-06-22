import React, {PropTypes} from 'react';
import Chart from './Chart';

const styles = {
	height: '500px'
}

const Graph = ({chartType, title, data, id}) => {
  return (
    <div className="border rounded m2 pb3" style={styles}>
      <h2 className="pl3 open-sans blue">{title}</h2>
        <Chart
        type={chartType}
        width={1000}
        data={data.data} 
        xKey={data.xKey} 
        yKey={data.yKey} 
        id={id}>
        </Chart>
    </div>
  );
}

Graph.defaultName = 'Graph';
Graph.propTypes = {
	chartType: PropTypes.string,
	title: PropTypes.string,
	data: PropTypes.object,
	id: PropTypes.number
}

export default Graph;

