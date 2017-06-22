import React from 'react';
import { connect } from 'react-redux';
import { exerciseSelectors, recordSelectors } from '../../selectors/selectors';
import Chart from '../../components/Chart';


function mapStateToProps({workouts}) {
  const selectors = recordSelectors(workouts);

  return {
    allTime: selectors.getAllTimePRs
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const Records = ({allTime}) => {

  return (
    <div>
    </div>
 
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Records);
