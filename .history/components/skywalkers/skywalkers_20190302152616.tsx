import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'
import Skywalker from './skywalker/skywalker'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

class SkywalkersList extends PureComponent {
  render() {
    const { onDelete, jedi } = this.props
    console.log(jedi, 'jediki')
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" color="inherit">List of skywalkers: </Typography>
          </Toolbar>
        </AppBar>
        <Grid container direction="column" justify="center" spacing={24} style={{ padding: 24 }} >
          {jedi.map((e, i) => (
            <div>
              {e.name}
              <button onClick={() => onDelete(i)}>usuń</button>
            </div>
          ))}
        </Grid>
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
