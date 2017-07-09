import { fork } from 'redux-saga/effects';

import { apiSaga } from './history/';

function* rootSaga() {
  yield [
    fork(apiSaga),
    // add more sagas...
  ];
};

export default rootSaga;