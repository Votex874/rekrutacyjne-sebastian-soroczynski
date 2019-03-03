import React, { Component } from 'react'

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { RootState } from 'features/redux/root-reducer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = () => createStyles({
  item: {
    fontSize: '12px',
    padding: '4px 15px'
  },
  list: {
    padding: '5px 0'
  },
  title: {
    padding: '0 10px',
    textShadow: '1px 1px 2px #FFFF00'
  },
  grid: {
    position: 'absolute',
    bottom: '0'
  }
})

interface StateProps {
  legend: string[]
}

type Props = StateProps & WithStyles<typeof styles>;

class Legend extends Component<Props> {
  render() {
    const { classes, legend } = this.props
    return (
      <Grid item className={classes.grid} >
        <Typography className={classes.title} variant="h6">Legend: </Typography>
        <List className={classes.list}>
          {legend.map((e: string, i: number) => {
            return (
              <ListItem className={classes.item} key={i}>
                {e}
              </ListItem>
            )
          }
          )}
        </List>
      </Grid>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    legend: state.skywalkers.legend
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Legend))
