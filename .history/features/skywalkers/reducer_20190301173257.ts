import { getType } from 'typesafe-actions'
import { deletingSkywalker, fetchSkywalkersRequest, fetchSkywalkers } from './actions'
import { getSkywalkersFromSwapi, fetchForSkywalkers } from './api'

export const initialState = {
  jedi: [],
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
    case (getType(fetchSkywalkers)):
      return {
        ...state,
        jedi: fetchForSkywalkers,
        isFetching: true,
      }
    default: {
      return state;
    }
  }
}
