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

  handleOnSubmit = event => {
    event.preventDefault();
    // add missing code
    // debugger
    this.props.addRestaurant(this.state)
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


//connect this component by wrapping RestaurantInput below
// export default connect( RestaurantInput
// const mapStateToProps = state => {
//   // debugger
//   return { restaurants: state.restaurants }
// }

// const mapDispatchToProps = dispatch => {
//   // debugger
//   return {
//     addRestaurant: (restaurant) => {
//       dispatch(addRestaurant(restaurant))
//     }
//   };
// };
 
// export default connect(state => ({ restaurants: state.restaurants }), mapDispatchToProps)(App);

  export default connect(null, {addRestaurant})(RestaurantInput);