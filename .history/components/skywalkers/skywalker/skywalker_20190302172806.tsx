import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Skywalker = ({ data }) => {
  const borderColor = data.gender === 'male' ? '3px solid blue' : '3px solid pink';
  console.log(borderColor)
  return (
    <React.Fragment>
      <Card>
        <CardContent style={{ border: borderColor }}>
          <Typography gutterBottom variant="h5" component="h2" >
            Name: {data.name}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Skywalker
