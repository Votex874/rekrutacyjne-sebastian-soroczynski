import SkywalkersList from 'components/skywalkers/skywalkers'
import React from 'react'
import { Store } from 'redux';
import { fetchSkywalkers, fetchSkywalkersRequest } from '../features/skywalkers/actions'

const SkywalkersPage = () => {
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
