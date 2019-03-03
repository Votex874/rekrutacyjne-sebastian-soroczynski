import { RootState } from '../redux';

export function getSkywalkers(state: RootState) {
  return state.skywalkers.jedi
}

export function isFetching(state) {
  return state.skywalkers.isFetching
}
