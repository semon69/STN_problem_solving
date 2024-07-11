
function isLeapYear(year) {
  // Leap year is divisible by 4, not divisible by 100 unless also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const year = 2088;

// Check and print results
if (isLeapYear(year)) {
  console.log(` ${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}
