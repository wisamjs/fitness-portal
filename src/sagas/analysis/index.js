import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_WORKOUTS_API,
  FETCH_WORKOUTS_API_SUCCESS,
  FETCH_WORKOUTS_API_ERROR,
} from '../../actions/consts';

import { getWorkouts } from '../../api/workouts';

export function* apiSideEffect(action) {
  try {
    const user = yield call(getWorkouts);
    yield put({ type: FETCH_WORKOUTS_API_SUCCESS, payload: user });
  } catch (e) {
    yield put({ type: FETCH_WORKOUTS_API_ERROR, message: e.message });
  }
}

export function* apiSaga() {
  yield takeLatest(FETCH_WORKOUTS_API, apiSideEffect);
}
