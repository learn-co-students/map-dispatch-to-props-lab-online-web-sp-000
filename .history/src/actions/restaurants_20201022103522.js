import React, { Component } from 'react';
import { connect } from 'react-redux'

class Restaurants extends Component {

  render() { 
    let restaurants = this.props.restaurants.map((r, i) => <li key={i}>{r.name}</li>)
    return ( 
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
     );
  }
}
const mapStateToProps = state => {
  console.log('hi');
  return { restaurants:state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);