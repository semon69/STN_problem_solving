const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function sumOfEvenNumbers(numbersArray) {
  return numbersArray.reduce((accumulator, current) => {
    if (current % 2 === 0) {
      return accumulator + current;
    } else {
      return accumulator;
    }
  }, 0);
}


const sum = sumOfEvenNumbers(numbers);
console.log(sum);
