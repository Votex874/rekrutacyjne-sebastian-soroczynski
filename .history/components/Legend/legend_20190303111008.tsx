import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const Legend = ({ content }) => {
  return (
    <div>
      {content.map((e, i) => <div key={i}>{e}</div>)}
      <List dense={dense}>
        {generate(
          <ListItem>
            <ListItemText
              primary="Single-line item"
            />
          </ListItem>,
        )}
      </List>
    </div>
  )
}

export default Legend
