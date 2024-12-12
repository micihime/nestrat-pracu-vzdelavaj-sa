// SYNTAX: const newArray = originalArray.filter(callback(element, index, array));

// Examples
// 1. Filter Even Numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

// 2. Filter Strings with More than 5 Characters
const words = ['apple', 'banana', 'cherry', 'kiwi'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // ['banana', 'cherry']

// 3. Filter Objects Based on a Property
const users = [
  { id: 1, name: 'Alice', active: true },
  { id: 2, name: 'Bob', active: false },
  { id: 3, name: 'Charlie', active: true }
];
const activeUsers = users.filter(user => user.active);
console.log(activeUsers); // [{ id: 1, name: 'Alice', active: true }, { id: 3, name: 'Charlie', active: true }]

// 4. Remove Falsy Values
const values = [0, 1, '', null, 'hello', undefined, false, true];
const truthyValues = values.filter(Boolean);
console.log(truthyValues); // [1, 'hello', true]

// 5. Filter Negative Numbers
const diffNumbers = [-3, -1, 0, 2, 5];
const positiveNumbers = diffNumbers.filter(num => num >= 0);
console.log(positiveNumbers); // [0, 2, 5]

// Exercises
// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const input1 = [1, 2, 3, 4]
// Expected output: [2, 4]
const output1 = input1.filter(input => input % 2 === 0)

// Write a function that filters an array of words, keeping only those with more than 4 characters.
const input2 = ['cat', 'elephant', 'dog', 'giraffe']
// Expected output: ['elephant', 'giraffe']
const output2 = input2.filter(input => input.length > 4)

// Create a function that filters an array, returning only the positive numbers.
const input3 = [-5, 2, 0, -1, 4]
// Expected output: [2, 4]
const output3 = input3.filter(input => input > 0)

// Write a function that filters an array, removing all null and undefined values.
const input4 = [1, null, 3, undefined, 5]
// Expected output: [1, 3, 5]
const output4 = input4.filter(input => input)

// Given an array of user objects, return only those who are 18 or older.
const input5 = [
    { name: 'Alice', age: 17 },
    { name: 'Bob', age: 20 },
    { name: 'Charlie', age: 15 }
];
// Expected output: [{ name: 'Bob', age: 20 }]
const output5 = input5.filter(input => input.age >= 18)

// Write a function that filters out all non-prime numbers from an array of integers.
const input6 = [1, 2, 3, 4, 5, 6]
// Expected output: [2, 3, 5]
const output6 = input6.filter(input => {
  for(let i = 2, s = Math.sqrt(input); i <= s; i++) {
      if(input % i === 0) return false;
  }
  return input > 1;
})

// Given an array of objects with a status property, filter out those with status: 'inactive'.
const input7 = [
    { id: 1, status: 'active' },
    { id: 2, status: 'inactive' },
    { id: 3, status: 'active' }
];
// Expected output: [{ id: 1, status: 'active' }, { id: 3, status: 'active' }]
const output7 = input7.filter(input => input.status !== 'active')

// Write a function that filters a 2D array, keeping only rows where the sum of the row's elements is greater than 10.
const input8 = [[1, 2], [5, 6], [7, 8]]
// Expected output: [[5, 6], [7, 8]]
const output8 = input8.filter(input => input[0] + input[1] > 10) //TODO: what if it is longer array? or shorter?

// Given an array of objects, filter those that meet a condition and return an array of one of their properties.
const input9 = [
    { name: 'Apple', price: 150 },
    { name: 'Banana', price: 50 },
    { name: 'Cherry', price: 200 }
];
// Expected output: ['Apple', 'Cherry']
const output9 = input9.filter(input => input.price > 100)

// Write a function that filters an array of strings, keeping only those that contain a specific letter.
const input10 = ['cat', 'bat', 'rat', 'hit']
// Expected output: ['cat', 'bat', 'rat']
const output10 = input10.filter(input => input.includes('a'))
