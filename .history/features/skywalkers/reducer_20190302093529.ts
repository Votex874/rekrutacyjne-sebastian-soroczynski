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
      const jedi = [...state.jedi];
      jedi.splice(action.payload, 1)
      state.jedi.splice(action.payload, 1)
      return {
        ...state,
        jedi: jedi
      }
    default: {
      return state;
    }
  }
}
