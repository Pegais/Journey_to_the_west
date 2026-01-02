// // 
// Problem Description

// Write a program to input a number(A) from user and print 1 if it is positive, -1 if it is negative, 0 if it's neither positive nor negative.



// Problem Constraints

// 1 <= A <= 1000000



// Input Format

// One line containing an integer A.



// Output Format

// One line each 0/1/-1 as per the question.



// Example Input

// Input 1:

// 50
// Input 2:

// -101
// Input 3:

// 0


// Example Output

// Output 1:

// 1
// Output 2:

// -1
// Output 3:

// 0


// Example Explanation

// Explanation 1:

// Clearly, 50 is positive.
// Explanation 2:

// Clearly, -101 is negative.
// Explanation 3:

// Clearly, 0 is neither positive nor negative.
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
  const a =Number(inputs[0]);
  if(a===0){
      console.log(0);
  }else if(a>0){
      console.log(1);
  }else{
      console.log(-1)
  }

}