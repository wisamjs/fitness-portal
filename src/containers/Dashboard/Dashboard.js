import React from 'react';
import { connect } from 'react-redux';
import Analysis from '../Analysis/Analysis';
import Standards from '../Standards/Standards';
import Paper from 'material-ui/Paper';


function mapStateToProps({workouts, preferences}) {


  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const Dashboard = () => {
  const style = {
    width: '46%',
    height: '100%',
    margin: '0 1%',
    borderRadius: '5px'
  }

  return (
    <div className="flex">
      <Paper
      style={style} 
      zDepth={2}>
        <Analysis></Analysis>
      </Paper>
      <Paper 
      style={style}
      zDepth={2}>
        <Standards></Standards>
      </Paper>
    </div>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Dashboard);
