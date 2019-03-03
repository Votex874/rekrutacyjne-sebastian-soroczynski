import { getType } from 'typesafe-actions'
import { deletingSkywalker, fetchSkywalkersRequest } from './actions'

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
      const array = state.jedi
      return {
        ...state,
        jedi: array.splice(action.payload, 1)
      }
    default: {
      return state;
    }
  }
}
