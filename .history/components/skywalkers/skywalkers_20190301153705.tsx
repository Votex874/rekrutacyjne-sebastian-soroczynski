import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  render() {
    return (
      1
    )
  }
}

const mapStateToProps = (state) => {
  const jedi = getSkywalkers(state)

  return {
    jedi,
  }
}

export default SkywalkersList
