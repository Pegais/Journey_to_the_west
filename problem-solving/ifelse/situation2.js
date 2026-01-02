// Problem Description

// Write a program that takes in a number N as input and does the following:

// if N is a multiple of 3, print Fizz
// if N is a multiple of 5, print Buzz
// if N is a multiple of both 3 and 5, print FizzBuzz
// Problem Constraints:

// 1 <= N <= 1000

// Input Format

// There is only 1 single line in the input, which is the integer N.

// Output Format

// Print Fizz / Buzz / FizzBuzz depending on the value N.

// Example Input

// Input 1:-
// 9
// Input 2:-
// 15


// Example Output

// Output 1:-
// Fizz
// Output 2:-
// FizzBuzz

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main(inputString);
});

function main(inputs) {
  // Write your code here
  // Use console.log to output the result
  let n = Number(inputs[0]);
  if(n%3===0 && n%5===0){
  console.log("FizzBuzz")
  }
  else if(n%3===0){
      console.log("Fizz");
  }else if(n%5===0){
      console.log("Buzz");
  }

}