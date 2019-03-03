import { getType } from 'typesafe-actions'
import { RootAction } from '../redux';
import { deletingSkywalker, fetchSkywalkersRequest } from './actions'

export type StarwalkersState = {
  jedi: string[],
  isFetching: boolean,
  legend: string[]
}

export const initialState: StarwalkersState = {
  jedi: [''],
  isFetching: false,
  legend: [
    'N - name',
    'H - height',
    'W - weight',
    'EC - eye color',
    'unknow - we are lack of data'
  ]
}

export default function (state: StarwalkersState = initialState, action: RootAction): StarwalkersState {
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
      const arrayOfJedi = [...state.jedi];
      arrayOfJedi.splice(action.payload, 1)
      return {
        ...state,
        jedi: arrayOfJedi
      }
    default: {
      return state;
    }
  }
}
