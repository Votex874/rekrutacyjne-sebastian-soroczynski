import SkywalkersList from 'components/skywalkers/skywalkers'
import React from 'react'
import { Store } from 'redux';
import { RootAction } from 'features/redux/root-action';
import { RootState } from 'features/redux/root-reducer';
import { NextContext, NextSFC } from 'next';
import { fetchSkywalkers } from '../features/skywalkers/actions'

const SkywalkersPage: NextSFC<{}, {}, NextContext & { store: Store<RootState, RootAction> }> = () => {
  return (
    <div>
      <SkywalkersList />
    </div>
  )
}

SkywalkersPage.getInitialProps = async ({ store }) => {
  store.dispatch(fetchSkywalkers());
  return {};
};


export default SkywalkersPage
