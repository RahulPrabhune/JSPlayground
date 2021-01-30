// ANCHOR Sequence generator
const range = (start, end, step) =>
  Array.from({ length: (end - start) / step + 1 }, (_, i) => start + i * step);
console.log(range(2, 40, 4));
console.log(
  range("A".charCodeAt(0), "Z".charCodeAt(0), 1).map((x) =>
    String.fromCharCode(x)
  )
);
// ANCHOR Generate numbers
const numbers = (count, multiple) =>
  Array.from({ length: count }, (_, i) => i * multiple);
console.log(numbers(5, 2));

// ANCHOR Create and modify array
function modArray(x){
  return x * 2
}
console.log(Array.from("123", modArray));

// ANCHOR Check if array
// Array.isArray is preferred over instanceof because it works through 98-ioiframes.
console.log(Array.isArray([]));

// ANCHOR REST
function getArray(...arr) {
  return arr;
}
console.log(getArray(1, 2, 3));

// ANCHOR SPREAD
function arrToArgs(x, y, z) {
  return x + y + z;
}
console.log(arrToArgs(...[1, 2, 3]));

// User of Spread
let arr1 = [1,2,3];
let arr2 = [...arr1];
console.log(arr2 === arr1);


// ANCHOR EVERY
console.log([12, 54, 18, 130, 44].every((x) => x >= 10));

// ANCHOR Prime number
function isPrime(num) {
  if (num === 1) {
    return true;
  } else if (num === 2) {
    return false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
}
console.log([4, 6, 8, 9, 12, 53, -17, 2, 5, 7, 31, 97, -1, 17].filter(isPrime));

// ANCHOR Search Engine
function hasString(str){
  return str.toLowerCase().indexOf("a") !== -1
}
console.log(
  ["rahul", "shalaka", "vihaan"].filter(hasString)
);

// ANCHOR FIND
console.log(
  [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
  ].find(({ name }) => name === "apples")
);

// ANCHOR FINDINDEX
console.log(
  ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"].findIndex(
    (ele) => ele === "grapefruit"
  )
);

// ANCHOR REDUCE
function myreducer(acc, ele)  {
  console.log(Number.isInteger(ele));
  console.log(typeof acc == 'string');

  console.log(acc);
  return acc = acc + ele}
console.log([1, 2, 3, 4].reduce(myreducer));
console.log([1, 2, ...[3, 4]]);
// ANCHOR Make array flat (Recursive)
function flatArr(arr, d = 1) {
  return d > 0
    ? arr.reduce((acc, ele) => {
        return acc.concat(Array.isArray(ele) ? flatArr(ele, d - 1) : ele);
      }, [])
    : arr.slice();
}
console.log(flatArr([1, 2, [3, 4, [5, 6]]], "Infinity"));

// ANCHOR FOREACH
[1, 2, 3, 4].forEach((ele, i, arr) => console.log(ele));

// ANCHOR INCLUDES
console.log(["cot", "dog", "bat"].includes("dog"));

// ANCHOR MAP
console.log([1, 4, 9, 16].map((x) => x * 2));

// ANCHOR REDUCE
console.log(
  [
    [0, 1],
    [2, 3],
    [4, 5],
  ].reduce(function (a, b) {
    return a.concat(b);
  }, [])
);

// ANCHOR REVERSE
console.log([1, 4, 9, 16].reverse());

// ANCHOR POP PUSH SHIFT UNSHIFT
{
  let array = [1, 4, 9, 16];
  array.pop();
  console.log(array);
  array.push(30);
  console.log(array);
  array.shift();
  console.log(array);
  array.unshift(22);
  console.log(array);
}

// ANCHOR SLICE
console.log(["Banana", "Orange", "Lemon", "Apple", "Mango"].slice(1, 3));

// ANCHOR SOME
console.log([1, 2, 3, 4, 5].some((ele) => ele % 2 === 0));

// ANCHOR SORT
console.log(
  [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ].sort((a, b) => a.value - b.value)
);
console.log(
  [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ].sort((a, b) => {
    let aName = a.name.toLowerCase();
    let bName = b.name.toLowerCase();
    if (aName === bName) {
      return 0;
    } else {
      return aName > bName ? 1 : -1;
    }
  })
);

// ANCHOR SPLICE splice (index, number-of-elements)
console.log([1, 2, 3, 8, 5, 6].splice(4, 1));

// ANCHOR ERROR
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    // Pass remaining arguments (including vendor specific ones) to parent constructor
    super(...params);

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    this.name = "CustomError";
    // Custom debugging information
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz", "bazMessage");
} catch (e) {
  console.log(e.name);
  console.log(e.foo);
  console.log(e.message);
  console.log(e.stack);
}

// ANCHOR Create Table of multiples
function arrayOfMultiples(num, length) {
  return Array.from({ length: length }, (_, i) => num * (i + 1));
}
console.log(arrayOfMultiples(7, 5));

// ANCHOR Triangular Number Sequence
function triangle(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, ele) => acc + ele
  );
}
console.log(triangle(6));

// ANCHOR Return the Objects Keys and Values
function keysAndValues(obj) {
  return [Object.keys(obj), Object.values(obj)];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));

// ANCHOR Convert Key, Values in an Object to Array
function objectToArray(obj) {
  return Object.entries(obj);
}
console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
);

// ANCHOR Get Sum of People's Budget
function getBudgets(arr) {
  return arr.reduce((acc, { budget }) => acc + budget, 0);
}
console.log(
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);

// ANCHOR Remove Trailing and Leading Zeros
function removeLeadingTrailing(n) {
  return parseFloat(n);
}
console.log(removeLeadingTrailing(3.04000));

// ANCHOR Basic Calculator
function calculator(num1, operator, num2) {
  return {
    "-": num1 - num2,
    "+": num1 + num2,
    "/": num1 / num2,
    "*": num1 * num2,
  }[operator];
}
console.log(calculator(4, "+", 4));

// ANCHOR ReverseAndNot
function reverseAndNot(i) {
  return parseInt(i.toString().split("").reverse().join("") + i);
}
console.log(reverseAndNot(123));

// ANCHOR Hitting the Jackpot
function testJackpot(result) {
  return result.every((ele) => ele === result[0]);
}
console.log(testJackpot(["SS", "SS", "SS", "SS"]));

// ANCHOR Get the Century
function century(year) {
  const century = Math.ceil(year / 100);
  return century !== 21 ? `${century}th century` : `${century}st century`;
}
console.log(century(1000));

// ANCHOR Binary count
function countOnes(i) {
  return (i >>> 0).toString(2).replace(/0/g, "").length;
}
console.log(countOnes(100));

// ANCHOR Seven Boom!
function sevenBoom(arr) {
  return arr.includes(7) ? "Boom" : "not boom";
}
console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));

// ANCHOR The Empty Square Sequence
function emptySq(step) {
  return Math.pow(step * 2, 2) - step * 4;
}
console.log(emptySq(3));

// ANCHOR Oddish vs. Evenish
function oddishOrEvenish(num) {
  return [...num.toString()].reduce((acc, ele) => acc + +ele, 0) % 2
    ? "Oddish"
    : "Evenish";
}
console.log(oddishOrEvenish(43));

// ANCHOR Tower of Hanoi
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}
console.log(towerHanoi(3));

// ANCHOR How Many Days Between Two Dates
function getDays(date1, date2) {
  return new Date(date1 - date2).getDate() - 1;
}
console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));

// ANCHOR Reversing a Binary String
function reversedBinaryInteger(num) {
  return parseInt([...(num >>> 0).toString(2)].reverse().join(""), 2);
}
console.log(reversedBinaryInteger(10));

// ANCHOR LCM of Two Numbers
function lcm(n1, n2) {
  return n2 % n1 ? n1 * n2 : Math.max(n1, n2);
}
console.log(lcm(5, 15));

// ANCHOR Numbers in Strings
function numInStr(arr) {
  return arr.filter((ele) => /^\d/.test(ele));
}
console.log(numInStr(["1a", "a", "2b", "b"]));

// ANCHOR Reverse the Odd Length Words
function reverseOdd(str) {
  return str
    .split(" ")
    .map((ele) => (ele.length % 2 ? [...ele].reverse().join("") : ele))
    .join(" ");
}
console.log(reverseOdd("One two three four"));

// ANCHOR White Spaces Between Lower and Uppercase Letters
function insertWhitespace(s) {
  return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}
console.log(insertWhitespace("SheWalksToTheBeach"));

// ANCHOR Positive Dominant
function isPositiveDominant(a) {
  return Array.from(new Set(a)).reduce(
    (acc, ele) => (ele != 0 ? (ele > 0 ? ++acc : --acc) : acc),
    0
  ) > 0
    ? true
    : false;
}
console.log(isPositiveDominant([5, 4, 3, 0, 0, -5, -9, -6, -2]));

// ANCHOR 
console.log(Array.from(new Set([600, 700, 700, 30, 700, 1000])))

console.log([1,2,5,18,16].sort((a,b) => a - b ));

console.log([1,2, 3, 4, 5, 6, 7, 20, "Infinity"].reduce((acc, ele, i, arr) => acc = acc + ele, 0));

// ANCHOR Get max points note for each student
function getStudentsWithNamesAndTopNotes(students) {
  return students.map(({ name, notes }) => {
    return {
      name: name,
      notes: Math.max(...notes),
    };
  });
}
console.log(
  getStudentsWithNamesAndTopNotes([
    { name: "John", notes: [3, 5, 4] },
    { name: "Rahul", notes: [4] },
  ])
);

//ANCHOR Book Shelf
function Book(title, author) {
  this.title = title;
  this.author = author;
}
Book.prototype.getTitle = function () {
  return "Title: " + this.title;
};
Book.prototype.getAuthor = function () {
  return "Author: " + this.author;
};

const PP = new Book("Pride and Prejudice", "Jane Austen");
const H = new Book("Hamlet", "William Shakespeare");
const WP = new Book("War and Peace", "Leo Tolstoy");
console.log(WP.title);
// Instantiate your Book constructor here

//ANCHOR Same Length
function sameLength(s) {
  let zeros = s.match(/0+/g).map((ele) => ele.length);
  let ones = s.match(/1+/g).map((ele) => ele.length);
  return zeros.length === ones.length
    ? zeros.every((ele, index) => ele === ones[index])
    : false;
}
console.log(sameLength("110011100010"));

//ANCHOR Combination
function combinations(...items) {
  return items.reduce((acc, ele) => (ele != 0 ? (acc = acc * ele) : acc), 1);
}
console.log(combinations(2, 3, 0));

//ANCHOR Concatenate to Form Target Array
function canConcatenate(arr, target) {
  return (
    arr
      .reduce((acc, ele) => acc.concat(ele), [])
      .sort()
      .toString() === target.sort().toString()
  );
}
console.log(
  canConcatenate(
    [
      [2, 1, 3],
      [5, 4, 7, 6, 7],
    ],
    [1, 2, 3, 4, 5, 6, 7]
  )
);

//ANCHOR C*ns*r*d Str*ngs
function uncensor(str, vowels) {
  let v = [...vowels];
  let count = 0;
  return [...str].reduce(
    (acc, ele, index, arr) => acc.concat(ele === "*" ? v[count++] : ele),
    ""
  );
}
console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

//ANCHOR RGB to Hex Color Converter
function rgbToHex(col) {
  return (
    "#" +
    col
      .match(/\d+/g)
      .map((v) => (+v).toString(16).padStart(2, "0"))
      .join("")
  );
}

console.log(rgbToHex("rgb(0, 128, 192)"));

//ANCHOR Sum of Missing Numbers
function sumMissingNumbers(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let start = sortedArr[0];
  let total = 0;
  Array.from({ length: sortedArr[sortedArr.length - 1] - start }, (_, i) => {
    if (!sortedArr.includes(++start)) {
      total += start;
    }
  });
  return total;
}
console.log(sumMissingNumbers([10, 20, 30, 40, 50, 60]));

//ANCHOR Pandigital Numbers
function isPandigital(num) {
  return Array.from(new Set([...num.toString()].map((ele) => parseInt(ele))))
    .length === 10
    ? true
    : false;
}
console.log(isPandigital(6043981957247));

//ANCHOR Find broken key
function findBrokenKeys(str1, str2) {
  return Array.from(
    new Set(
      [...str1].reduce(
        (acc, ele, index, arr) => (ele != str2[index] ? acc.concat(ele) : acc),
        []
      )
    )
  );
}
console.log(findBrokenKeys("starry night", "starrq light"));

//ANCHOR Find most repeated item in an array

const findRepectedNuber = array => {
  const obj = {}
  for(let ele of array){
    if(obj[ele] === undefined){
      obj[ele] = 1;
    }else {
      obj[ele]++
    }
  }
  let repeation = 0;
  let arrEle;
  for(let o in obj){
    if(repeation < obj[o]){
      repeation = obj[o];
      arrEle = o;
    }
  }
  return arrEle;
}
console.log(findRepectedNuber([2,3,4,3,1,6,7,7,7,7,4,4]))