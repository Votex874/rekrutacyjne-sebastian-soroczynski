import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';

import { deletingSkywalker } from 'features/skywalkers/actions'
import { connect } from 'react-redux';

const styles = () => createStyles({
  cardStyles: {
    minWidth: '300px',
    boxShadow: '0px 0px 15px 2px rgba(255, 255, 144, 1), inset 0px 0px 15px 2px rgba(255, 255, 144, 1)'
  },
  borderCard: {
    border: '3px solid #000'
  }
})

interface DispatchProps {
  onDelete: (id: number) => number
}

interface StateProps {
  id: number,
  data: {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string;
    created: string;
    edited: string;
    url: string;
  }
}

type Props = StateProps & DispatchProps & WithStyles<typeof styles>;

class Skywalker extends Component<Props> {
  constructor(props) {
    super(props)

  }

  render() {
    const { data, onDelete, id, classes } = this.props
    const colorDependentOfGender = data.gender === 'male' ? '#00ABFF' : '#FF54EB';
    return (
      <React.Fragment>
        <Card className={classes.cardStyles}>
          <CardContent className={classes.borderCard} style={{ borderColor: colorDependentOfGender }} >
            <Typography gutterBottom variant="h5" component="h1" >
              N: {data.name}
            </Typography>
            <Grid container justify="space-between">
              <Typography>H: {data.height} cm</Typography>
              <Typography>W: {data.mass === 'unknown' ? data.mass : data.mass + 'kg'}</Typography>
              <Typography>EC: {data.eye_color}</Typography>
            </Grid>
            <CardActions>
              <IconButton
                onClick={() => onDelete(id)}
                style={{ marginLeft: 'auto', color: colorDependentOfGender }} aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </CardContent>
        </Card>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = {
  onDelete: deletingSkywalker
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(Skywalker))
