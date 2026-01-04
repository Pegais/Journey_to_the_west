// Problem Description

// Given an integer A representing an year, Return 1 if it is a leap year else return 0.

// A year is leap year if the following conditions are satisfied:
// Year is multiple of 400.
// Else the year is multiple of 4 and not multiple of 100.


// Problem Constraints

// 1 <= A <= 109



// Input Format

// First and only argument is an integer A



// Output Format

// Return 1 if it is a leap year else return 0



// Example Input

// Input 1

//  A = 2020
// Input 2:

//  A = 1999


// Example Output

// Output 1

//  1
// Output 2:

//  0


// Example Explanation

// Explanation 1

//  2020 is a leap year as it is a multiple of 4 and not a multiple of 100.
// Explanation 2:

//  1999 is not a leap year.
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
  let a = Number(inputs[0]);
  if((a%400===0) || (a%4===0 && a%100 !==0)){
     console.log(1);
  }else{
      console.log(0);
  }

}