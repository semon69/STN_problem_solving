const students = [
  { name: "Alice", grades: [80, 75, 90] },
  { name: "Bob", grades: [85, 70, 95] },
  { name: "Charlie", grades: [90, 85, 80] },
  { name: "Diana", grades: [95, 80, 85] },
];

function sortStudentsByAverageGradeDescending(studentsArray) {
  studentsArray.sort((a, b) => {
    const avgGradeA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgGradeB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;

    return avgGradeB - avgGradeA;
  });

  return studentsArray;
}

const sortedStudents = sortStudentsByAverageGradeDescending(students);
console.log(sortedStudents);
