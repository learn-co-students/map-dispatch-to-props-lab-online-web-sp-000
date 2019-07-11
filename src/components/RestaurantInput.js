import React, { Component } from 'react';
import { addRestaurant } from '../actions/restaurants';
import { connect } from 'react-redux';

export class RestaurantInput extends Component {

  state = {
    name: '',
    location: ''
  }

  handleOnNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnLocationChange = event => {
    this.setState({
      location: event.target.value
    });
  }

//have access to the addRestaurant func thru props (bc passed into connect) and can access the payload (data being used to update state..in this case is adding a restaurant) can just be accessed by this.state (forms often have they're own state so we want to pass in our restaurant entered into addRestaurant() as an arg)
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
  }


  render() {
    // debugger

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

// mapDispatchToProps = (dispatch) => {
//   return {
//     addRestaurant: () => {
//       dispatch(addRestaurant())
//     }
//   }
// }

//connect this component by wrapping RestaurantInput below
// the great thing abt the store is that we can take what we need and leave the rest. all I need is the function, don't care about Restaurants array in this form component.
export default connect(null, { addRestaurant })(RestaurantInput)
