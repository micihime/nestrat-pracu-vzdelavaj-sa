// SYNTAX: const newArray = originalArray.map(callback(element, index, array));

// Examples
// 1. Multiply Each Element by 2
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]

// 2. Convert Strings to Uppercase
const fruits = ['apple', 'banana', 'cherry'];
const uppercasedFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercasedFruits); // ['APPLE', 'BANANA', 'CHERRY']

// 3. Extract Specific Properties from Objects
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// 4. Add the Index to Each Element
const letters = ['a', 'b', 'c'];
const indexedLetters = letters.map((letter, index) => `${index}: ${letter}`);
console.log(indexedLetters); // ['0: a', '1: b', '2: c']

// 5. Transform Nested Arrays
const nestedArrays = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArrays.map(arr => arr.join('-'));
console.log(flattened); // ['1-2', '3-4', '5-6']

// Exercises
// Given an array of numbers, create a new array where each number is doubled.
const input1 = [1, 2, 3, 4];
// Expected output: [2, 4, 6, 8]
const output1 = input1.map(input => input *2)

// Convert an array of strings to uppercase.
const input2 = ["hello", "world", "javascript"];
// Expected output: ["HELLO", "WORLD", "JAVASCRIPT"]
const output2 = input2.map(input => input.toUpperCase())

// Extract the name property from an array of objects.
const input3 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];
// Expected output: ["Alice", "Bob", "Charlie"]
const output3 = input3.map(input => input.name)

// Given an array of numbers, return their square roots.
const input4 = [4, 9, 16, 25];
// Expected output: [2, 3, 4, 5]
const output4 = input4.map(input => Math.sqrt(input))

// Return a new array where each element is a string that includes the original value and its index.
const input5 = ["apple", "banana", "cherry"];
// Expected output: ["0: apple", "1: banana", "2: cherry"]
const output5 = input5.map((input, index) => index + ': ' + input)

// Return a new array indicating whether each number in the array is even or odd.
const input6 = [1, 2, 3, 4, 5];
// Expected output: ["odd", "even", "odd", "even", "odd"]
const output6 = input6.map(input => (input % 2 === 0) ? 'Even' : 'Odd')

// Convert an array of date strings to a more readable format.
const input7 = ["2024-12-01", "2024-12-10", "2024-12-25"];
// Expected output: ["01 December 2024", "10 December 2024", "25 December 2024"]
const output7 = input7.map(input => new Date(input).toDateString())

// Given an array of product names, create SEO-friendly URL slugs.
const input8 = ["Red Shoes", "Blue Shirt", "Green Hat"];
// Expected output: ["red-shoes", "blue-shirt", "green-hat"]
const output8 = input8.map(input => input.toLowerCase().replace(" ", "-"))

// Flatten an array of arrays using map.
const input9 = [[1, 2], [3, 4], [5, 6]];
// Expected output: [1, 2, 3, 4, 5, 6]
const output9 = input9.flat()

//Create a new array where each object has an added property fullName combining firstName and lastName.
const input10 = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];
// Expected output: [
//   { firstName: "John", lastName: "Doe", fullName: "John Doe" },
//   { firstName: "Jane", lastName: "Smith", fullName: "Jane Smith" }
// ]
const output10 = input10.map(input => {return {...input, fullName: input.firstName + ' ' + input.lastName}})