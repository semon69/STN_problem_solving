const numbers = [1, 2, 2, 3, 4, 4, 6, 6, 7, 8, 8, 9, 10];

function getUniqueNumbers(numbersArray) {
  return Array.from(new Set(numbersArray));
}

// Get unique numbers and print the result
const uniqueNumbers = getUniqueNumbers(numbers);
console.log(uniqueNumbers);
