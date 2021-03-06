import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import Analysis from './containers/Analysis/Analysis';
import Standards from './containers/Standards/Standards';
import Records from './containers/Records/Records';
import Dashboard from './containers/Dashboard/Dashboard';

import './styles/index.css';
import configureStore from './store/';

const store = configureStore();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
	  <Provider store={ store }>
	   <Router history={browserHistory}>
	      <Route path="/" component={App}>
	        <IndexRedirect to='dashboard'/>
	        <Route path="dashboard" component={Dashboard}/>
	        <Route path="analysis" component={Analysis}/>
	        <Route path="standards" component={Standards}/>
	        <Route path="records" component={Records}/>

	      </Route>
	    </Router>
	  </Provider>,
	  document.getElementById('root')
);
