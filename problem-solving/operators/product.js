// Problem Description

// Given two numbers A and B. Multiply them and print the product.
// Problem Constraints

// 105 <= A, B <= 106
// Input Format
// Two space separated integers A and B in the first line.
// Output Format
// Print in a single line the product of A and B.
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
  let str = inputs[0]
  let numbers =str.split(' ');
  let a =Number(numbers[0]);
  let b =Number(numbers[1]);

  let product =a*b;
  console.log(product)
}