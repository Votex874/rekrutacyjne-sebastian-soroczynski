import React from 'react'

import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const styles = () => createStyles({
  fontSize: {
    fontSize: '2px'
  }
})

const Legend = ({ content, classes }) => {
  return (
    <Grid item >
      <Typography variant="h6">Legend: </Typography>
      <List>
        {content.map((e, i) => {
          return (
            <ListItem key={i}>
              <ListItemText style={{ fontSize: '4px' }} primary={e} />
            </ListItem>
          )
        }
        )}
      </List>
    </Grid>
  )
}

export default (withStyles(styles)(Legend))
