function greet(name) {
    return "Hello, " + name;
  }
  const greetA = (name) => "Hello " + name;
  
  function multiply(a, b) {
    return a * b;
  }
  const multiplyA = (a, b) => a * b;
  
  function calculateArea(radius) {
    const area = Math.PI * radius * radius;
    return area;
  }
  const calculateAreaA = (radius) => Math.PI * radius * radius;
  
  function checkEvenOdd(num) {
    if (num % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  const checkEvenOddA = (num) => (num % 2 === 0 ? "Even" : "Odd");
  
  function createUser(name, age) {
    return {
      name: name,
      age: age,
    };
  }
  const createUserA = (name, age) => { return { name: name, age: age }; };
  
  function greet2(name, message) {
    if (message === undefined) {
      message = "Welcome!";
    }
    return message + " " + name;
  }
  const greet2A = (name, message) => name ? 'Welcome!' : message + ' ' + name
  
  // Testing greet functions
  console.log(greet("John"));       // "Hello, John"
  console.log(greetA("John"));      // "Hello John"
  
  // Testing multiply functions
  console.log(multiply(5, 3));      // 15
  console.log(multiplyA(5, 3));     // 15
  
  // Testing calculateArea functions
  console.log(calculateArea(5));     // ~78.54
  console.log(calculateAreaA(5));    // ~78.54
  
  // Testing checkEvenOdd functions
  console.log(checkEvenOdd(4));     // "Even"
  console.log(checkEvenOddA(7));    // "Odd"
  
  // Testing createUser functions
  console.log(createUser("Alice", 25));    // { name: "Alice", age: 25 }
  console.log(createUserA("Bob", 30));     // { name: "Bob", age: 30 }
  
  // Testing greet2 functions
  console.log(greet2("John"));            // "Welcome! John"
  console.log(greet2("John", "Hi"));      // "Hi John"
  console.log(greet2A("John"));           // "Welcome! John"
  console.log(greet2A("John", "Hi"));     // "Hi John"
  
  // function Counter() {
  //   this.count = 0;
  //   setInterval(function () {
  //     this.count++;
  //     console.log(this.count); // What will `this` refer to here?
  //   }, 1000);
  // }
  
  // function processNumbers(numbers) {
  //   const evenNumbers = numbers.filter(function (num) {
  //     return num % 2 === 0;
  //   });
  
  //   return evenNumbers.map(function (num) {
  //     return num * 2;
  //   });
  // }
  
  // function squares(numbers) {
  //   const result = [];
  //   for (let i = 0; i < numbers.length; i++) {
  //     result.push(numbers[i] * numbers[i]);
  //   }
  //   return result;
  // }
  
  // function outerFunction(x) {
  //   function innerFunction(y) {
  //     return x + y;
  //   }
  //   return innerFunction(5);
  // }
  