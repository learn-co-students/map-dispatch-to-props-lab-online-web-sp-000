import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {
    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (restaurant_name) => dispatch({type: "ADD_RESTAURANT", name: restaurant_name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
