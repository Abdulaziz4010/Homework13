function multiplyObjectValues(obj, n) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key] * n;
    }
  }

  return result;
}

const obj = { a: 2, b: 3, c: 4 };
const n = 3;
const res = multiplyObjectValues(obj, n);
console.log(res);

//

function countWordsWithA(str) {
  const words = str.split(" ");

  let count = 0;

  for (const word of words) {
    if (word.includes("a") || word.includes("A")) {
      count++;
    }
  }

  return count;
}

const inputString = "Assalomu alaykum ";
const result = countWordsWithA(inputString);
console.log(result);

//

function createLengthObject(arr) {
  const result = {};

  for (const str of arr) {
    result[str] = str.length;
  }

  return result;
}

const inputArray = ["text", "world", "laptop"];
const outputObject = createLengthObject(inputArray);
console.log(outputObject);

//
function countOccurrences(arr) {
  const counts = {};

  for (const item of arr) {
    if (counts[item]) {
      counts[item]++;
    } else {
      counts[item] = 1;
    }
  }

  return counts;
}

const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];
const animalCounts = countOccurrences(animals);
console.log(animalCounts);

//6-masala
function ageDifference(people) {
  people.sort((a, b) => a.age - b.age);

  const youngest = people[0].age;

  const oldest = people[people.length - 1].age;

  const difference = oldest - youngest;

  return difference;
}

const people = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

const result1 = ageDifference(people);
console.log(result);

// 7-masala

function getTruthyFalsy(arr) {
  const truthy = arr.filter((item) => Boolean(item));

  const falsy = arr.filter((item) => !Boolean(item));

  return { truthy, falsy };
}

const inputArray1 = [false, 1, 10, "", null, "sultonqul", 1.13, 0];
const result2 = getTruthyFalsy(inputArray);
console.log(result);

// 8-masala

function minMaxWord(sentence) {
  const words = sentence.split(" ");

  let minWord = words[0];
  let maxWord = words[0];

  for (const word of words) {
    if (word.length < minWord.length) {
      minWord = word;
    }
    if (word.length > maxWord.length) {
      maxWord = word;
    }
  }

  return { minWord, maxWord };
}

const sentence = "Men dasturlash kursida o'qiyman";
const result5 = minMaxWord(sentence);
console.log(result);
