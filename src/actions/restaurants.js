export const addRestaurant = (restaurant) => {
  
  // I'm pretty sure this entire object is the action object in the reducer
  
  return {
    type: 'ADD_RESTAURANT',
    restaurant
  };
};