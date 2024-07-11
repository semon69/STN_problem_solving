const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Edward", age: 40, gender: "male" },
];

function filterAndMapPeople(peopleArray) {
  return peopleArray
    .filter((person) => person.gender !== "female")
    .map((person) => person.name);
}

const result = filterAndMapPeople(people);
console.log(result);
