import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Skywalker = ({ data }) => {
  const borderColor = data.gender === 'male' ? '2px solid #00ABFF' : '2px solid #FF54EB';
  const minWidth = '300px'
  return (
    <React.Fragment>
      <Card style={{ minWidth: minWidth }}>
        <CardContent style={{ border: borderColor }}>
          <Typography gutterBottom variant="h5" component="h1" >
            N: {data.name}
          </Typography>
          <Grid container justify="space-between">
            <Typography>H: {data.height}</Typography>
            <Typography>W: {data.mass}</Typography>
            <Typography>EC: {data.eye_color}</Typography>
          </Grid>
          <CardActions style={{ marginLeft: 'auto' }}>
            <Button size="small" variant="outlined" color="primary" >Delete</Button>
          </CardActions>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Skywalker
