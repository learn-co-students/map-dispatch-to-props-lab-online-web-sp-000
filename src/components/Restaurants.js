import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from '../actions/restaurants';

class Restaurants extends Component {

  handleOnClick = (e) => {
    this.props.addRestaurant();
  }

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.name}</li>);

    return (
      <div>
        <ul>
          {restaurants}
          <button onClick={(event) => this.handleOnClick(event)}>
          Click
          </button>
          <p>{this.props.restaurants.length}</p>
        </ul>
      </div>
    );
  }
};

export default connect(state => ({ restaurants: state.restaurants}), { addRestaurant })(Restaurants);
