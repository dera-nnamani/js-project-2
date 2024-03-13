//function to reverse a string
function reverseString(str) {
  // Split the string into an array of characters, reverse it, and then join it back into a string
  return str.split("").reverse().join("");
}

// Example usage:
const originalString = "Hello, world!";
const reversedString = reverseString(originalString);
console.log(reversedString); // Output: "!dlrow ,olleH"

//function  that counts the number of characters in a string
function countCharacters(str) {
  // Return the length of the string
  return str.length;
}

// Example usage:
const myString = "Hello, world!";
const characterCount = countCharacters(myString);
console.log(characterCount); // Output: 13

//function to capitalize words
function capitalizeWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back into a sentence
  return capitalizedWords.join(" ");
}

// Example usage:
const sentence = "this is a sentence to capitalize";
const capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: "This Is A Sentence To Capitalize"

//function to find the maximum and minimum values in an array
function findMax(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  let max = arr[0]; // Initialize max with the first element of the array

  // Iterate through the array to find the maximum value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if the current element is greater
    }
  }

  return max;
}

function findMin(arr) {
  // Check if the array is empty
  if (arr.length === 0) {
    return undefined; // Return undefined if the array is empty
  }

  let min = arr[0]; // Initialize min with the first element of the array

  // Iterate through the array to find the minimum value
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; // Update min if the current element is smaller
    }
  }

  return min;
}

// Example usage:
const numbers = [3, 5, 1, 9, 2, 7, 4];
const maxValue = findMax(numbers);
const minValue = findMin(numbers);
console.log("Maximum value:", maxValue); // Output: Maximum value: 9
console.log("Minimum value:", minValue); // Output: Minimum value: 1

//function to sum numbers in an array
function sumArray(arr) {
  let sum = 0;

  // Iterate through the array and add each element to the sum
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// Example usage:
const numbers = [3, 5, 1, 9, 2, 7, 4];
const totalSum = sumArray(numbers);
console.log("Sum of array:", totalSum); // Output: Sum of array: 31

//a function that filters
function filterArray(arr, condition) {
  // Use the filter method to create a new array with elements that satisfy the condition
  return arr.filter(condition);
}

// Example usage:
const numbers = [3, 5, 1, 9, 2, 7, 4];

// Filter out even numbers
const filteredNumbers = filterArray(numbers, (num) => num % 2 !== 0);
console.log("Filtered array:", filteredNumbers); // Output: Filtered array: [3, 5, 1, 9, 7]

// function for factorial
function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Recursive case: factorial of n is n times factorial of (n - 1)
  return n * factorial(n - 1);
}

// Example usage:
const number = 5;
const result = factorial(number);
console.log(`Factorial of ${number} is ${result}`); // Output: Factorial of 5 is 120

//function to check prime numbers
function isPrime(number) {
  // Check if the number is less than 2 (not a prime number)
  if (number < 2) {
    return false;
  }
  // Check if the number is divisible by any number from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // If divisible, not a prime number
    }
  }
  return true; // If not divisible, it's a prime number
}

// Example usage:
const number1 = 7;
console.log(`${number1} is prime?`, isPrime(number1)); // Output: 7 is prime? true

const number2 = 12;
console.log(`${number2} is prime?`, isPrime(number2)); // Output: 12 is prime? false

//function for the fibonacci sequence
function fibonacciSequence(numTerms) {
  // Check if the number of terms is less than or equal to 0
  if (numTerms <= 0) {
    return [];
  }
  // Initialize the Fibonacci sequence with the first two terms (0 and 1)
  const sequence = [0, 1];

  // Generate subsequent terms of the Fibonacci sequence
  for (let i = 2; i < numTerms; i++) {
    const nextTerm = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextTerm);
  }

  return sequence;
}

// Example usage:
const numTerms = 10;
const fibonacci = fibonacciSequence(numTerms);
console.log("Fibonacci sequence:", fibonacci); // Output: Fibonacci sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
