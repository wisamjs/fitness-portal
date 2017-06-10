import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import App from './containers/App';
import Analysis from './containers/Analysis/Analysis';
import Standards from './containers/Standards/Standards';


import * as reducers from './reducers/index';
import './styles/index.css';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, {});

ReactDOM.render(
	  <Provider store={ store }>
	   <Router history={browserHistory}>
	      <Route path="/" component={App}>
	        <IndexRedirect to='analysis'/>
	        <Route path="analysis" component={Analysis}/>
	        <Route path="standards" component={Standards}/>

	      </Route>
	    </Router>
	  </Provider>,
	  document.getElementById('root')
);
