import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  // State Declaration
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray)
  }

  function handleLiClick(foodId) {
    const addHeatFoodArr = foods.map(food => {
      if (foodId === food.id) {
        food.heatLevel += 1;
        return food;
      } else {
        return food;
      }
    })
    setFoods(addHeatFoodArr)
  }
  // Updates setFilter state to equal the option selected from the filter
  function handleFilterChange(e) {
    setFilterBy(e.target.value)
  }
  // Creates new array by filtering foods such that cuisine is equal to the filtered selection
  const foodsToDisplay = foods.filter(food => filterBy === "All" ? true : food.cuisine === filterBy)
  // Renders list of food items based on foodstoDisplay array 
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <select onChange={handleFilterChange} name="filter">
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
