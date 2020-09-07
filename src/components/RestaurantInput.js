import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    console.log('changing name field', event.target.value)
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    console.log('changing location field', event.target.value)
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log('submit', this.props, this.state)
    this.props.addRestaurant(this.state)
    // add missing code
  }

  render() {
    return(
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnNameChange(event)}
            id="name"
            placeholder="restaurant name" />
        </p>
        <p>
          <input
            type="text"
            onChange={(event) => this.handleOnLocationChange(event)}
            id="location"
            placeholder="location" />
        </p>
        <input type="submit" />
      </form>
    );
  }
};



const mapDispatchToProps = dispatch => {
  console.log('mapdispatchtoprops')
  return {
    addRestaurant: (restaurant) => {
      dispatch(addRestaurant(restaurant))
    }
  };
 };

 export default connect(null , mapDispatchToProps)(RestaurantInput);
//connect this component by wrapping RestaurantInput below
