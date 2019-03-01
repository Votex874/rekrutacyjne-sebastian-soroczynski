import { fork } from 'redux-saga/effects';
import countSaga from '../counter/saga';
import skywalkersSaga from '../skywalkers/saga'

export default function* rootSaga() {
  yield fork(countSaga);
}
