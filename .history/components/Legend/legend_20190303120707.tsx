import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Legend = ({ content }) => {
  return (
    <Grid>
      <Typography>Legend: </Typography>
      <List>
        {content.map((e, i) => {
          return (
            <ListItem key={i}>
              <ListItemText primary={e} />
            </ListItem>
          )
        }
        )}
      </List>
    </Grid>
  )
}

export default Legend
