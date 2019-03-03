import React from 'react'

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = () => createStyles({
  item: {
    fontSize: '12px',
    padding: '4px 10px'
  },
  title: {
    padding: '0 10px'
  }
})

const Legend = ({ content, classes }) => {
  return (
    <Grid item >
      <Typography className={classes.title} variant="h6">Legend: </Typography>
      <List>Legend:
        {content.map((e, i) => {
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

export default (withStyles(styles)(Legend))