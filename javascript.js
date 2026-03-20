//TASK 1: Find the second largest number in an array of numbers.
const numbers = [15, 86, 45, 68, 97, 32, 65];

function findSecondLargest(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (current > largest) {
      secondLargest = largest;
      largest = current;
    } else if (current > secondLargest && current !== largest) {
      secondLargest = current;
    }
  }

  return secondLargest;
}

const result = findSecondLargest(numbers);
console.log("The second largest number is:", result);

//TASK 2: Returns unique elements.

const getUnique = (arr1, arr2) => [...new Set([...arr1, ...arr2])];

const x = [1, 2, 3];
const y = [2, 3, 4];

console.log(getUnique(x, y));


//TASK 3: Student score analysis.

let students = [
  { name: 'Gunbir', age: 21, scores: [86, 90, 92] },
  { name: 'Jitender', age: 25, scores: [88, 90, 70] },
  { name: 'Jatt', age: 22, scores: [55, 82, 78] }
];

let topStudentName = '';
let highestAvg = 0;

students.forEach(student => {
  let total = 0;
  student.scores.forEach(score => total += score);
  let average = total / student.scores.length;

  if (average > highestAvg) {
    highestAvg = average;
    topStudentName = student.name;
  }
});
console.log(`Top Student: ${topStudentName} with an average score of ${highestAvg.toFixed(2)}`);