import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

export class App extends Component {
  handleOnClick = (event) => {
    this.props.addRestaurant();
  }

  render() {
    return (
      <div className="App">
        <RestaurantInput onClick={this.handleOnClick} />
        <Restaurants />
      </div>
    );
  }
};

export default App;
