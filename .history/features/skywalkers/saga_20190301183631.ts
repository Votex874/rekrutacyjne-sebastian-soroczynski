import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';
import { fetchSkywalkers, fetchSkywalkersRequest } from './actions';
import * as api from './api';
import { SwapiSkywalkersRespone } from './models';
import { isFetching } from './selectors';

export function* handleFetchSkywalkers() {
  try {
    const state = yield select();
    if (isFetching(state)) {
      return;
    }
    yield put(fetchSkywalkersRequest.request());
    const swapiResponse = yield call(api.getSkywalkersFromSwapi);
    console.log(swapiResponse, 'swapiResponse Skywa23lkwers');
    yield put(fetchSkywalkersRequest.success((swapiResponse)));
  } catch (err) {
    console.log(err);
    yield put(fetchSkywalkersRequest.failure(err));
  }
}

export default function* () {
  yield all([
    takeEvery(getType(fetchSkywalkers), handleFetchSkywalkers),
  ]);
}
