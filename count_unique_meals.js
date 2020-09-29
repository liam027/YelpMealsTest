const countUniqueMeals = (meals) => {
  // Return the number of meals that have a unique ingredients list
  let numUniqueMeals = 0

  while (meals.length > 0) {
    let uniqueMeal = meals.pop()
    numUniqueMeals += 1

    // Remove the meals that have the same ingredients as our unique meal
    meals = meals.filter( (meal) => {
      return !haveSameIngredients(uniqueMeal, meal)
    })
  }

  function haveSameIngredients(targetMeal, otherMeal) {
    let ingredientsMatch = true;

    if (targetMeal.ingredients.length !== otherMeal.ingredients.length) {
      ingredientsMatch = false
    }
    else {
      let targetMealIngredients = targetMeal.ingredients.sort()
      let otherMealIngredients = otherMeal.ingredients.sort()

      for(let i = 0; i < targetMealIngredients.length; i++ ) {
        if (targetMealIngredients[i] !== otherMealIngredients[i]) {
          ingredientsMatch = false;
        }
      }
    }
    return ingredientsMatch;
  }

  return numUniqueMeals
}

module.exports = countUniqueMeals








