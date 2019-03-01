import { getType } from 'typesafe-actions'
import { RootAction } from '../redux';
import { deletingSkywalker, fetchSkywalkersRequest } from './actions'

export const initialState = {
  skywalkers: '',
  isFetching: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case (getType(fetchSkywalkersRequest.request)):
      return {
        ...state,
        isFetching: true,
      };
    case (getType(fetchSkywalkersRequest.success)):
      return {
        ...state,
        skywalkers: action.payload,
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
  }
}
