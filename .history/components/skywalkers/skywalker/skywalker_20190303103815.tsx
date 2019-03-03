import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { connect } from 'react-redux';
import { deletingSkywalker } from 'features/skywalkers/actions'

class Skywalker extends Component {

  handleDeleteJedi = (id) => {
    if (typeof this.props.handleDelete === 'function') {
      this.props.handleDelete(id)
    }
  }

  render() {
    const { data, handleDelete, id } = this.props
    const borderColor = data.gender === 'male' ? '3px solid #00ABFF' : '3px solid #FF54EB';
    const iconColor = data.gender === 'male' ? '#00ABFF' : '#FF54EB';
    const minWidth = '300px'
    return (
      <React.Fragment>
        <Card style={{ minWidth: minWidth, boxShadow: '0px 0px 75px 10px rgba(255, 255, 255, 1)' }}>
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
              <IconButton onClick={() => this.handleDeleteJedi(id)} style={{ marginLeft: 'auto', color: iconColor }} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}

export default Skywalker
