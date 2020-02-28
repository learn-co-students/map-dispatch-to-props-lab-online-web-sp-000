export const addRestaurant = (restaurant) => {
  return {
    type: 'ADD_RESTAURANT',
    restaurant: {name: restaurant.name, location: restaurant.location}
  };
};
