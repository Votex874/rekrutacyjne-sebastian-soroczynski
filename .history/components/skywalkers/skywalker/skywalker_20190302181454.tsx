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
  constructor(props) {
    super(props)

  }
  render() {
    const { data } = this.props
    const borderColor = data.gender === 'male' ? '2px solid #00ABFF' : '2px solid #FF54EB';
    const iconColor = data.gender === 'male' ? '#00ABFF' : '#FF54EB';
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
}


const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = {
  onDelete: deletingSkywalker
};

export default connect(mapStateToProps, mapDispatchToProps)(Skywalker)
