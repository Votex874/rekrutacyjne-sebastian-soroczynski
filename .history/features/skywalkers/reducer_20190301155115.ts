import { getType } from 'typesafe-actions'
import { deletingSkywalker, fetchSkywalkersRequest } from './actions'
import { getSkywalkersFromSwapi } from './api'

fetch('https://swapi.co/api/people/?search=Skywalker&format=json')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))

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
