// Task 1: Using forEach()
let favoriteCities = [
  "San Francisco",
  "Los Angeles",
  "San Diego",
  "Sunnyvale",
  "Palo Alto",
];
favoriteCities.forEach((city) => console.log(city.toUpperCase()));
// SAN FRANCISCO
// LOS ANGELES
// SAN DIEGO
// SUNNYVALE
// PALO ALTO

// Task 2: Transforming with map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map((num) => num * num);
console.log(squares);
// [1, 4, 9, 16, 25]

// Task 3: Filtering with filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter((num) => num >= 80);
console.log(highScores);
// [85, 90, 100]

// Task 4: Finding with find() and findIndex()
let favoriteFood = [
  "salmon nigiri",
  "tuna nigiri",
  "Lion King Roll",
  "steak",
  "geoduck",
];
let foodWithMoreThanFourLetters = favoriteFood.filter(
  (food) => food.length > 4,
);
let firstFoodWithMoreThanFourLetters = favoriteFood.find(
  (food) => food === foodWithMoreThanFourLetters[0],
);
let indexOfFirstFoodWithMoreThanFourLetters = favoriteFood.findIndex(
  (food) => food === foodWithMoreThanFourLetters[0],
);
console.log(
  `first food with more than four letters: ${firstFoodWithMoreThanFourLetters}`,
);
console.log(
  `index of first food with more than four letters: ${indexOfFirstFoodWithMoreThanFourLetters}`,
);
// first food with more than four letters: salmon nigiri
// index of first food with more than four letters: 0

// Task 5: Checking conditions with some() and every()
let temperatures = [55, 51, 60, 65, 69];
let temperaturesAboveNinety = temperatures.some((temp) => temp > 90);
let everyTemperatureAboveFifty = temperatures.every((temp) => temp > 50);
let results = [temperaturesAboveNinety, everyTemperatureAboveFifty];
console.log(results);
// [false, true]

// Task 6: Reducing with reduce()
let totalBudget = 500;
let prices = [50, 40, 60, 100];
let remainingBudget = prices.reduce(
  (budget, currentPrice) => budget - currentPrice,
  totalBudget,
);
console.log(`remainingBudget: $${remainingBudget}`);
// remainingBudget: $250
