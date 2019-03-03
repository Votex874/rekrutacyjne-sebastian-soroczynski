import React from 'react'

import { createStyles, withStyles } from '@material-ui/core/styles';
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

const Legend = ({ content, classes }) => {
  return (
    <Grid item className={classes.grid} >
      <Typography className={classes.title} variant="h6">Legend: </Typography>
      <List className={classes.list}>
        {content.map((e: string, i: number) => {
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
