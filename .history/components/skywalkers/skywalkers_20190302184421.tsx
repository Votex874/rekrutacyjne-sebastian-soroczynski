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
    const { onDelete, jedi }: any = this.props
    const style = {
      color: 'black',
      WebkitTextStrokeWidth: '1px',
      WebkitTextStrokeColor: "yellow",
      fontWeigth: 'bold',
    }
    return (
      <div>
        <AppBar style={{ backgroundColor: '#000' }} position="static">
          <Toolbar>
            <Typography style={style} variant="h2" color="inherit">List of skywalkers: </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center" direction="column" spacing={24} style={{ padding: 24 }} >
          {jedi.map((e, i) => (
            <Grid key={i} container justify="center" style={{ padding: 12 }} >
              <Skywalker data={e} handleDelete={onDelete} id={i} />
            </Grid>
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
