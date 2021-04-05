import React, { Component } from 'react'
import { addRestaurant } from '../actions/restaurants'
import { connect } from 'react-redux'

export class RestaurantInput extends Component {
  state = { name: '', location: '' }

  handleOnNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleOnLocationChange = e => {
    this.setState({ location: e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    this.props.addRestaurant(this.state)
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <p>
          <input
            type="text"
            onChange={(e) => this.handleOnNameChange(e)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => this.handleOnLocationChange(e)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return { addRestaurant: (r) => dispatch(addRestaurant(r)) }
}

export default connect(null, mapDispatchToProps)(RestaurantInput)
