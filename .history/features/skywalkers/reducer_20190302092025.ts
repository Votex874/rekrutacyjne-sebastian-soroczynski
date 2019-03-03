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
      return {
        ...state,
        jedi: [...state.jedi.slice(0, action.payload)]
      }
    default: {
      return state;
    }
  }
}
