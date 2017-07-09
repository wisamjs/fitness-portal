import { call, all, put, takeLatest } from 'redux-saga/effects';

import {
  ON_APP_MOUNT,
  ON_APP_MOUNT_SUCCESS,
  ON_APP_MOUNT_ERROR,
} from '../../actions/consts';

import { getWorkouts } from '../../api/workouts';
import { getExercises } from '../../api/exercises';
import { getDates } from '../../api/dates';
import { getWorkingSets } from '../../api/workingSets';

export function* fetchAppData(action) {
  try {

    const [workouts, exercises, dates, workingSets] = yield all([
      call(getWorkouts), 
      call(getExercises),
      call(getDates),
      call(getWorkingSets)
    ]);

    yield put({ type: ON_APP_MOUNT_SUCCESS, payload: { workouts, exercises, dates, workingSets} });
  } catch (e) {
    yield put({ type: ON_APP_MOUNT_ERROR, message: e.message });
  }
}

export function* apiSaga() {
  yield takeLatest(ON_APP_MOUNT, fetchAppData);
}
