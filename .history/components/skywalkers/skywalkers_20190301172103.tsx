import { deletingSkywalker } from 'features/skywalkers/actions'
import { getSkywalkers } from 'features/skywalkers/selectors'

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class SkywalkersList extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data: ''
    }
  }
  componentDidMount = () => {
    this.setState({
      data: this.props.state
    })
  }
  render() {
    console.log(this.state.data, 'jediki')
    return (
      1
    )
  }
}

const mapStateToProps = (state) => {

  return {
    state
  }
}

export default connect(mapStateToProps)(SkywalkersList)
