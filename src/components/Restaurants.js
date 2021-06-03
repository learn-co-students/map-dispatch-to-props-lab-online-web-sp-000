import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

    render() {

        let restaurants = this.props.restaurants.map(
            (restaurant, index) => <li key={index}>{restaurant.name} | {restaurant.location}</li>);

        return (
            <div>
                <ul>
                    {restaurants}
                </ul>
            </div>
        );
    }
}

export default connect(state => ( { restaurants: state.restaurants }))(Restaurants);
