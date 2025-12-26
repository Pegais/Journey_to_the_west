
// Problem Description
// Given three numbers A, B and C. Add them and print the sum.


// Input Format
// Three space separated integers A, B, and C in the first line.


// Output Format
// Print in a single line the sum of A, B and C.



// Example Input
// Input 1: 2 3 -1

// Input 2: 7 -4 0


// Example Output
// Output 1: 4

// Output 2: 3







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

function main(input) {
  // Write your code here
  // Use console.log to output the result
  const [a,b,c]=[...input]
  console.log(a,b,c)
  let sum= Number(a)+Number(b)+Number(c);
  console.log(sum,"this is sum")

}