import React from "react";
import { connect } from "react-redux";
import { addRestaurant } from "../actions/restaurants";

class RestaurantInput extends React.Component {

	state = {
		name: "",
		location: ""
	}

	handleOnNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	handleOnLocationChange = (event) => {
		this.setState({
			location: event.target.value
		})
	}

	handleOnSubmit = (event) => {
		event.preventDefault();
		this.props.addRestaurant(this.state);
		this.setState({
			name: "",
			location: ""
		});
	}

	render() {
		return(
			<form onSubmit={this.handleOnSubmit}>
				<p>
					<input
						type="text"
						value={this.state.name}
						onChange={this.handleOnNameChange}
						id="name"
						placeholder="restaurant name" />
				</p>
				<p>
					<input
						type="text"
						value={this.state.location}
						onChange={this.handleOnLocationChange}
						id="location"
						placeholder="location" />
				</p>
				<input type="submit" />
			</form>
		)
	}

}

const mapDispatchToProps = (dispatch) => {
	return {
		addRestaurant: (restaurant) => dispatch(addRestaurant(restaurant))
	}
}

export default connect(null, mapDispatchToProps)(RestaurantInput)
