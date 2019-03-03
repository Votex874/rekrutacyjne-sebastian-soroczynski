import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Skywalker = ({ data }) => {
  const border1 = '1px solid #000'
  return (
    <React.Fragment>
      <Card>
        <CardContent style={{ border: border1 }}>
          <Typography gutterBottom variant="headline" component="h2" >
            Name: {data.name}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Skywalker
