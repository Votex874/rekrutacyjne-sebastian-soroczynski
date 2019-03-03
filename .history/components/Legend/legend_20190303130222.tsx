import React from 'react'

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = () => createStyles({
  item: {
    fontSize: '12px',
    padding: '4px 0'
  },
})

const Legend = ({ content, classes }) => {
  return (
    <Grid item >
      <Typography variant="h6">Legend: </Typography>
      <List>
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
