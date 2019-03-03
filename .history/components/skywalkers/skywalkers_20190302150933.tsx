import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'
import Skywalker from './skywalker/skywalker'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

class SkywalkersList extends PureComponent {
  render() {
    const { onDelete, jedi } = this.props
    console.log(jedi, 'jediki')
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant="h2" color="inherit">List of skywalkers: </Typography>
          </Toolbar>
        </AppBar>
        <button onClick={() => onDelete(0)}>12312312312</button>
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
  onDelete: deletingSkywalker
};

export default connect(mapStateToProps, mapDispatchToProps)(SkywalkersList)
