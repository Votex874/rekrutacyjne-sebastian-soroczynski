import { getType } from 'typesafe-actions'
import { deletingSkywalker, fetchSkywalkersRequest, fetchSkywalkers } from './actions'

export const initialState = {
  jedi: [],
  isFetching: false,
  fetched: false
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case (getType(fetchSkywalkersRequest.request)):
      return {
        ...state,
        fetched: false,
        isFetching: true,
      };
    case (getType(fetchSkywalkersRequest.success)):
      return {
        ...state,
        jedi: action.payload,
        fetched: true,
        isFetching: false,
      }
    case (getType(fetchSkywalkersRequest.failure)):
      return {
        ...state,
        fetched: false,
        isFetching: false
      }
    case (getType(deletingSkywalker)):
      return {
        ...state,
        jedi: 1
      }
    default: {
      return state;
    }
  }
}
