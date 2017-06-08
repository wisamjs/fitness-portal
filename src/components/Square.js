import React, {PropTypes} from 'react';
import SimpleLineChart from './SimpleLineChart';

const styles = {
	// maxWidth:'38rem'
	height: '500px'
}

const Square = ({chartType, title, graphData, id}) => {
  return (
    <div className="bg-blue border rounded m2 pb3" style={styles}>
      <h2 className="pl3 open-sans blue">{title}</h2>
        <SimpleLineChart
        width={1000}
          data={graphData.data} xKey={graphData.xKey} yKey={graphData.yKey} id={id}>
        }
        }
        </SimpleLineChart>
    </div>
  );
}

Square.defaultName = 'Square';
Square.propTypes = {
	chartType: PropTypes.string,
	title: PropTypes.string,
	graphData: PropTypes.object,
	id: PropTypes.number
}

export default Square;

