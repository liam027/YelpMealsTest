const countUniqueMeals = require('./count_unique_meals')

describe('compare meals', () => {

  test('example case', () => {
    const testCase = [
      {
        name: "basic burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "bacon burger",
        ingredients: ["Patty", "Bun", "Bacon", "Lettuce"]
      },
      {
        name: "large burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "tiny burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      }
    ]
    expect(countUniqueMeals(testCase)).toEqual(2)
  })

  test('all meals are unique', () => {
    const testCase = [
      {
        name: "basic burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "bacon burger",
        ingredients: ["Patty", "Bun", "Bacon", "Lettuce"]
      },
      {
        name: "chicken burger",
        ingredients: ["Chicken", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "CRAZY burger",
        ingredients: ["Pineapple", "Bun", "Tomato", "Lettuce"]
      }
    ]
    expect(countUniqueMeals(testCase)).toEqual(4)
  })

  test('all recipes are the same', () => {
    const testCase = [
      {
        name: "basic burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "small burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "large burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "tiny burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      }
    ]
    expect(countUniqueMeals(testCase)).toEqual(1)
  })

  test('ingredients of different length', () => {
    // This assumes we automatically treat meals with a different number
    // of ingredients as unique (no filtering for duplicate ingredients).
    const testCase = [
      {
        name: "basic burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "pickle burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce", "Pickles"]
      },
      {
        name: "regular burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      },
      {
        name: "tiny burger",
        ingredients: ["Patty", "Bun", "Tomato", "Lettuce"]
      }
    ]
    expect(countUniqueMeals(testCase)).toEqual(2)
  })

})