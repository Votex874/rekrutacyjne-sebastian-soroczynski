import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  render() {
    console.log(this.props.state, 'jediki')
    return (
      1
    )
  }
}

const mapStateToProps = (state) => {

  return {
    state
  }
}

export default connect(mapStateToProps)(SkywalkersList)