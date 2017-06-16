import React from 'react';
import { connect } from 'react-redux';
import { recordSelectors } from '../../selectors/selectors';



function mapStateToProps({workouts}) {
  window.recordSelectors = recordSelectors(workouts);

  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

const Records = () => {

  return (
    <div>
    </div>
  );

}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Records);
