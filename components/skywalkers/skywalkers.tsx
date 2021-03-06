import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { getSkywalkers } from 'features/skywalkers/selectors'
import Skywalker from './skywalker/skywalker'
import Legend from '../legend/legend'

import { RootState } from 'features/redux/root-reducer';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';


const styles = () => createStyles({
  bgNavbar: {
    backgroundColor: '#000'
  },
  starWarsText: {
    color: '#000',
    WebkitTextStrokeWidth: '1px',
    WebkitTextStrokeColor: "yellow",
    padding: '10px 0'
  },
  gridPadding: {
    padding: '10px 0'
  }
})

interface StateProps {
  jedi: string[],
}

type Props = StateProps & WithStyles<typeof styles>;
//zmienić props any type!!
class SkywalkersList extends PureComponent<Props>{
  render() {
    const { jedi, classes } = this.props
    return (
      <div>
        <AppBar className={classes.bgNavbar} position="static">
          <Toolbar>
            <Typography className={classes.starWarsText} variant="h2" color="inherit">List of skywalkers: </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center" direction="column">
          {jedi.map((e, i: number) => (
            <Grid key={i} container justify="center" className={classes.gridPadding} >
              <Skywalker
                data={e}
                id={i} />
            </Grid>
          ))}
        </Grid>
        <Legend />
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  const jedi = getSkywalkers(state)
  return {
    jedi
  }
}

export default connect(mapStateToProps)
  (withStyles(styles)(SkywalkersList))
