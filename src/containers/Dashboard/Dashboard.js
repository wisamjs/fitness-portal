import React from 'react';
import { connect } from 'react-redux';
import Analysis from '../Analysis/Analysis';
import Standards from '../Standards/Standards';


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
    border: '1px solid white',
    height: '100%',
    margin: '0 1%',
    borderRadius: '5px'
  }

  return (
    <div className="flex">
      <div style={style}>
        <Analysis></Analysis>
      </div>
      <div style={style}>
        <Standards></Standards>
      </div>
    </div>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Dashboard);
