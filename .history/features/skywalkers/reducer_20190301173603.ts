import { getType } from 'typesafe-actions'
import { deletingSkywalker, fetchSkywalkersRequest, fetchSkywalkers } from './actions'
import { getSkywalkersFromSwapi, fetchForSkywalkers } from './api'

const data = fetchForSkywalkers();
console.log(data, 'data')

export const initialState = {
  jedi: []],
  isFetching: false
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case (getType(fetchSkywalkersRequest.request)):
      return {
        ...state,
        isFetching: true,
      };
    case (getType(fetchSkywalkersRequest.success)):
      return {
        ...state,
        jedi: action.payload,
        isFetching: false
      }
    case (getType(fetchSkywalkersRequest.failure)):
      return {
        ...state,
        isFetching: false
      }
    case (getType(deletingSkywalker)):
      return {
        ...state,
      }
    default: {
      return state;
    }
  }
}
