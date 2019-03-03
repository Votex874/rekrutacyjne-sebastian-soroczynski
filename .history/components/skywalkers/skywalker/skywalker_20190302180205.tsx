import React from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const Skywalker = ({ data }) => {
  const borderColor = data.gender === 'male' ? '2px solid #00ABFF' : '2px solid #FF54EB';
  const iconColor = data.gender === 'male' ? 'blue' : 'pink';
  const minWidth = '300px'
  return (
    <React.Fragment>
      <Card style={{ minWidth: minWidth }}>
        <CardContent style={{ border: borderColor }}>
          <Typography gutterBottom variant="h5" component="h1" >
            N: {data.name}
          </Typography>
          <Grid container justify="space-between">
            <Typography>H: {data.height} cm</Typography>
            <Typography>W: {data.mass} kg</Typography>
            <Typography>EC: {data.eye_color}</Typography>
          </Grid>
          <CardActions>
            <IconButton style={{ marginLeft: 'auto', color: iconColor }} aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </CardContent>
      </Card>
    </React.Fragment>
  )
}

export default Skywalker
