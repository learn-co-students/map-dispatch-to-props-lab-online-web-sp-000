import React, { Component } from 'react';
import { Connect } from 'redux-react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';

//export 
class App extends Component {
  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};


// const mapDispatchToProps = (dispatch) => {
//       console.log("We're MAPPING");
//        addRestaurant: () => {
//       dispatch(addRestaurant())
// }

// export default App;
export default connect(null, mapDispatchTOProps)(App);