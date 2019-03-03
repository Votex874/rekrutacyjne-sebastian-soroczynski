import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Legend = ({ content }) => {
  return (
    <List >
      {content.map((e, i) => {
        return (<ListItem key={i}>
          <ListItemText
            primary={e}
          />
        </ListItem>
        )
      }
      )}
    </List>
  )
}

export default Legend
