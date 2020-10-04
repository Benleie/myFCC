// 01.explore-differences-between-the-var-and-let-keywords
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";
  console.log(quote)
}
catTalk();

// 02-compare-scopes-of-the-var-and-let-keywords
function checkScope() {
    // 'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }
  checkScope()

// 03-declare-a-read-only-variable-with-the-const-keyword
function printManyTimes(str) {
    "use strict";
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i+=2) {
      console.log(SENTENCE);
    }
}
printManyTimes("freeCodeCamp");

// 04-mutate-an-array-declared-with-const
const s = [5, 7, 2];
//change it to [2, 5, 7]
function editInPlace() {
  'use strict';
  s[0] = 2
  s[1] = 5
  s[2] = 7
}
editInPlace();
console.log(s)

// 05-prevent-object-mutation
function freezeObj() {
    'use strict';
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS)
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//TypeError: Cannot assign to read only property 'PI' of object '#<Object>'

//06-use-arrow-functions-to-write-concise-anonymous-functions
const magic = () => {
    "use strict";
    return new Date();
  }


// 07-write-arrow-functions-with-parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2)
console.log(myConcat([1, 2], [3, 4, 5]));

// 08-set-default-parameters-for-your-functions
const increment = (number, value = 1) => number + value;

// 09-use-the-rest-parameter-with-function-parameters
const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0)
}

const sum = (...args) => {
    console.log(...[...args])
    return args.reduce((a, b) => a + b, 0)
}
sum(1, 2, 3)


// 10
// use-the-spread-operator-to-evaluate-arrays-in-place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);


let obj = {
    a: 1,
    b: "ben"
}

let obj2 = {
    ...obj,
    c: "hhh"
}
try {console.log(...obj2)}
catch(e) { console.log(e)} //TypeError: Found non-callable @@iterator
console.log(obj2)


// 11
// use-destructuring-assignment-to-extract-values-from-objects


// 12
// use-destructuring-assignment-to-assign-variables-from-objects
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};
  
const { 
    today: highToday, 
    tomorrow: highTomorrow 
} = HIGH_TEMPERATURES


// 13
// use-destructuring-assignment-to-assign-variables-from-nested-objects
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Only change code below this line
  const { today: {
    low: lowToday,
    high: highToday
  }} = LOCAL_FORECAST
  
  
  // Only change code above this line
  
// 14
// 15
// 16
// 17
// 18
// 19
// 20
// 21
// 22
  