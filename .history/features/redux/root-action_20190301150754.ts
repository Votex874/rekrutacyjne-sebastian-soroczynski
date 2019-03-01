import { Dispatch as ReduxDispatch } from 'redux';
import { ActionType } from 'typesafe-actions';
import * as counter from '../counter/actions';
import * as skywalkers from '../skywalkers/actions';

export const actions = {
  counter,
  skywalkers
};

type RootAction = ActionType<typeof actions>;
type Dispatch = ReduxDispatch<RootAction>;

export { RootAction, Dispatch };
