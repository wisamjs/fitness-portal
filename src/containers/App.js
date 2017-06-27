import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from '../styles/customTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import {fetchWorkouts} from '../actions/actions';

class App extends Component {

	componentWillMount() {
		this.props.fetchWorkouts();
	}

	render() {
		return (
			<MuiThemeProvider  muiTheme={getMuiTheme(customTheme)}>
	    	<div>
	      	{this.props.children}
	    	</div>
    	</MuiThemeProvider>
  	);
	}
}

function mapStateToProps({workouts, preferences}) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchWorkouts: (e) => dispatch(fetchWorkouts()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
