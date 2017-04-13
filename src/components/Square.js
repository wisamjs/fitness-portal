import React, {PropTypes} from 'react';
import SimpleLineChart from './SimpleLineChart';

const styles = {
	maxWidth:'38rem'
}

const Square = ({chartType, title, graphData, id}) => {
  console.log('cello', graphData);
  return (
    <div className="bg-blue border rounded m2 pb3" style={styles}>
      <h2 className="pl3 open-sans blue">{title}</h2>
        <SimpleLineChart
          data={graphData.data} xKey={graphData.xKey} yKey={graphData.yKey} id={id}>
        </SimpleLineChart>
    </div>
  );
}

Square.defaultName = 'Square';
Square.propTypes = {

}

export default Square;

