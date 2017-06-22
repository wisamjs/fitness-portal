import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import Analysis from './containers/Analysis/Analysis';
import Standards from './containers/Standards/Standards';
import Records from './containers/Records/Records';
import Dashboard from './containers/Dashboard/Dashboard';


import * as reducers from './reducers/index';
import './styles/index.css';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
	  <Provider store={ store }>
	   <Router history={browserHistory}>
	      <Route path="/" component={App}>
	        <IndexRedirect to='analysis'/>
	        <Route path="dashboard" component={Dashboard}/>
	        <Route path="analysis" component={Analysis}/>
	        <Route path="standards" component={Standards}/>
	        <Route path="records" component={Records}/>

	      </Route>
	    </Router>
	  </Provider>,
	  document.getElementById('root')
);
