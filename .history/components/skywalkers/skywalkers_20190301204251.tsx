import { deletingSkywalker } from 'features/skywalkers/actions'
import { delSkywalker } from 'features/skywalkers/subActions'
import { getSkywalkers } from 'features/skywalkers/selectors'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  render() {
    console.log(this.props.jedi, 'jediki')
    return (
      <div>
        <button onClick={this.props.onDelete}>12312312312</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const jedi = getSkywalkers(state)
  return {
    jedi
  }
}

const mapDispatchToProps = dispatch => {
  onDelete: (id) => { dispatch(delSkywalker(id)) }
};

export default connect(mapStateToProps, mapDispatchToProps)(SkywalkersList)
