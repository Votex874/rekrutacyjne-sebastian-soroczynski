import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'
import Skywalker from './skywalker/skywalker'
import Legend from '../legend/legend'

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
  jedi: string[]
}

interface DispatchProps {
  onDelete: () => number
}

type Props = StateProps & DispatchProps & WithStyles<typeof styles> & any;

class SkywalkersList extends PureComponent<Props>{
  constructor(props) {
    super(props)
    this.state = {
      legendContent: [
        'N - name',
        'H - height',
        'W - weight',
        'EC - eye color',
        'unknow - we are lack of data'
      ]
    }
  }
  render() {
    const { onDelete, jedi, classes }: any = this.props
    return (
      <div>
        <AppBar className={classes.bgNavbar} position="static">
          <Toolbar>
            <Typography className={classes.starWarsText} variant="h2" color="inherit">List of skywalkers: </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" alignItems="center" direction="column">
          {jedi.map((e, i) => (
            <Grid key={i} container justify="center" className={classes.gridPadding} >
              <Skywalker
                data={e}
                handleDelete={onDelete}
                id={i} />
            </Grid>
          ))}
        </Grid>
        <Legend content={this.state.legendContent} />
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

export default connect(mapStateToProps, mapDispatchToProps)
  (withStyles(styles)(SkywalkersList))
