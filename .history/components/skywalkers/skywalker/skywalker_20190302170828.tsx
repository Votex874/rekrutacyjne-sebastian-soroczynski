import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Skywalker = ({ data }) => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" ></Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Skywalker
