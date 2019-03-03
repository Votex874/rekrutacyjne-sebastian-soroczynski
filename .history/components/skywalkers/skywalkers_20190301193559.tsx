import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  render() {
    console.log(this.props.jedi.length, 'jediki')
    return (
      1
    )
  }
}

const mapStateToProps = (state) => {
  const jedi = getSkywalkers(state)
  return {
    jedi
  }
}

const mapDispatchToProps = (dispatch: any) => {
  onDelete: dispatch(deletingSkywalker(10))
};

export default connect(mapStateToProps)(SkywalkersList)
