const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'Diana', age: 28 }
  ];
  
  
  function findAndModifyAge(peopleArray, personName, newAge) {
    const person = peopleArray.find(person => person.name === personName);
    if (person) {
      person.age = newAge;
    }
    return peopleArray;
  }
  

  const updatedPeople = findAndModifyAge(people, 'Bob', 20);
  console.log(updatedPeople);
  