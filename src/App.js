import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import {connect} from 'react-redux'


export class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput addRestaurant />
        <Restaurants />
      </div>
    );
  }
};



export default connect(state => ({restaurants: state.resaurants}))(App);
