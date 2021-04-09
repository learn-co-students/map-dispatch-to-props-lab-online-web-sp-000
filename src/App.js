import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addRestaurant } from './actions/restaurants';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};



export default App;
