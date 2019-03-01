import { getType } from 'typesafe-actions'
import { deletingSkywalker, fetchSkywalkersRequest } from './actions'
import { getSkywalkersFromSwapi } from './api'

getSkywalkersFromSwapi()
  .then(res => res.json());
  .then(res => console.log(res, 'res'));

export const initialState = {
  jedi: getSkywalkersFromSwapi(),
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
