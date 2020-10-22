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
const mapDispatchToProps = dispatch => {
  console.log(hi);
}

export default connect(mapDispatchToProps, (Restaurants));