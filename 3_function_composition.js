// Function to square a number
function square(num) {
  return num * num;
}

// Function to double a number
function double(num) {
  return num * 2;
}

// Function to add 5 to a number
function addFive(num) {
  return num + 5;
}

// Compose functions to create a new function
function composedFunction(num) {
  return addFive(double(square(num)));
}

const result = composedFunction(3);
console.log(result);
