// Problem Description

// Write a program to input an integer from user and print 1 if it is odd otherwise print 0.

// Problem Constraints

// 1 <= N <= 1000000



// Input Format

// One line containing an integer N.



// Output Format

// Print either 1 or 0 as per the question.



// Example Input

// Input 1:

// 5
// Input 2:

// 1000


// Example Output

// Output 1:

// 1
// Output 2:

// 0


// Example Explanation

// Explanation 1:

// Clearly, 5 is odd.
// Explanation 2:

// Clearly, 1000 is even. 

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
  let n =Number(inputs[0]);
  if(n!==0 && n%2===0){
      console.log(0)
  }else{
      console.log(1)
  }

}