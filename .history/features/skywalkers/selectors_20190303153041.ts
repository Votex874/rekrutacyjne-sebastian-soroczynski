import { RootState } from '../redux';

export function getSkywalkers(state: RootState): string[] {
  return state.skywalkers.jedi
}

export function isFetching(state: RootState): boolean {
  return state.skywalkers.isFetching
}
