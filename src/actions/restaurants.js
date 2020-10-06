export const addRestaurant = (restaurant) => {
  console.log(`In addRestaurant, restaurant is ${restaurant}`);
  return {
    type: "ADD_RESTAURANT",
    restaurant,
  };
};
