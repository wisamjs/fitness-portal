import React, {PropTypes} from 'react';
import Chart from './Chart';

const styles = {
  height: '100%'
}

const chartStyles = {

  boxSizing: 'borderBox',
  padding: '10px',
  height: '600px'
}


const Graph = ({chartType, title, data, id}) => {
  return (
    <div className="rounded" style={styles}>
       <div style={chartStyles}> 
          <Chart
          type={chartType}
          width={1000}
          data={data.data} 
          xKey={data.xKey} 
          yKey={data.yKey} 
          id={id}>
          </Chart>
        </div>
  {
    // <div className="flex p3 justify-between">
    //     <div>
    //       <p>150 lb</p>
    //       <h2>Year</h2>
    //       </div>

    //     <div>
    //       <p>150 lb</p>
    //       <h2>Month</h2>
    //       </div>

    //     <div>
    //       <p>150 lb</p>
    //       <h2>Week</h2>
    //       </div>

    //   </div>
    }
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

