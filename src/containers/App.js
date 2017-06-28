import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import customTheme from '../styles/customTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Spinner from '../components/Spinner';

import {fetchWorkouts} from '../actions/actions';

class App extends Component {

	componentWillMount() {
		this.props.fetchWorkouts();
	}

	render() {
		return (
			<MuiThemeProvider  muiTheme={getMuiTheme(customTheme)}>
			{
				this.props.loading ? <Spinner/> : this.props.children
			}
    	</MuiThemeProvider>
  	);
	}
}

function mapStateToProps({history, preferences}) {
  return {
  	loading: history.loading
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
