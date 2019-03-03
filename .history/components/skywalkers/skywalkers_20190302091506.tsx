import { deletingSkywalker } from 'features/skywalkers/actions'
import { delSkywalker } from 'features/skywalkers/subActions'
import { getSkywalkers } from 'features/skywalkers/selectors'
import { Store } from 'redux';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  render() {
    const { onDelete, jedi } = this.props
    console.log(jedi, 'jediki')
    return (
      <div>
        <button onClick={onDelete}>12312312312</button>
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

const mapDispatchToProps = {
  onDelete: deletingSkywalker(10)
};

export default connect(mapStateToProps, mapDispatchToProps)(SkywalkersList)
