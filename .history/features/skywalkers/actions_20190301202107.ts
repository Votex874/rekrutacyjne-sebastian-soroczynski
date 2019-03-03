import { RequestError } from 'features/api/models'
import { createAction, createAsyncAction, action } from 'typesafe-actions';

export const fetchSkywalkers = createAction(
  'skywalkers/FETCH_SKYWALKERS'
)

export const fetchSkywalkersRequest = createAsyncAction(
  'skywalkers/FETCH_SKYWALKERS_REQUESTED',
  'skywalkers/FETCH_SKYWALKERS_SUCCEEDED',
  'skywalkers/FETCH_SKYWALKERS_FAILED',
)<void, number, RequestError>();

export const deletingSkywalker = (id: any) => action(
  'skywalkers/DELETING', { iD: id }
);
