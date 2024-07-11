const cars = [
    { make: 'Toyota', model: 'Camry', year: 2018 },
    { make: 'Honda', model: 'Accord', year: 2020 },
    { make: 'Ford', model: 'Mustang', year: 2016 },
    { make: 'Chevrolet', model: 'Malibu', year: 2019 }
  ];
  
  
  function sortCarsByYear(carsArray) {
    return carsArray.sort((a, b) => a.year - b.year);
  }
  
  // Print the sorted array
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);