import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  render() {
    console.log(this.props.jedi.length, 'jediki')
    return (
      <React.Fragment>
        <button onClick={this.props.onDelete}></button>
      </React.Fragment>
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
  onDelete: dispatch(deletingSkywalker(1))
};

export default connect(mapStateToProps, mapDispatchToProps)(SkywalkersList)
