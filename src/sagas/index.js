import { fork } from 'redux-saga/effects';

import { apiSaga } from './analysis/';

function* rootSaga() {
  yield [
    fork(apiSaga),
    // add more sagas...
  ];
};

export default rootSaga;