import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const styles = () => createStyles({
  cardStyles: {
    minWidth: '300px',
    boxShadow: '0px 0px 15px 2px rgba(255, 255, 144, 1), inset 0px 0px 15px 2px rgba(255, 255, 144, 1)'
  },
  borderCard: {
    border: '3px solid #000'
  }
})

class Skywalker extends Component {
  handleDeleteJedi = (id) => {
    if (typeof this.props.handleDelete === 'function') {
      this.props.handleDelete(id)
    }
  }

  render() {
    const { data, handleDelete, id, classes } = this.props
    const colorDependentOfGender = data.gender === 'male' ? '#00ABFF' : '#FF54EB';
    return (
      <React.Fragment>
        <Card className={classes.cardStyles}>
          <CardContent className={classes.borderCard} style={{ borderColor: colorDependentOfGender }} >
            <Typography gutterBottom variant="h5" component="h1" style={{ textShadow: '1px 1px 2px yellow' }} >
              N: {data.name}
            </Typography>
            <Grid container justify="space-between">
              <Typography>H: {data.height} cm</Typography>
              <Typography>W: {data.mass === 'unknown' ? data.mass : data.mass + 'kg'}</Typography>
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

export default (withStyles(styles)(Skywalker))
