// Problem Description

// Write a program to input three numbers(A, B & C) from user and print the maximum element among A, B & C in each line.

// Problem Constraints


// 1 <= A <= 1000000

// 1 <= B <= 1000000

// 1 <= C <= 1000000



// Input Format


// First line is a single integer A.
// Second line is a single integer B.
// Third line is a single integer C.




// Output Format

// One line containing an integer as per the question.



// Example Input


// Input 1:


// 5 
// 6 
// 7
// Input 2:


// 1000 
// 10000 
// 100000



// Example Output

// Output 1:

// 7
// Output 2:

// 100000


// Example Explanation

// Explanation 1:

// Clearly, among 5, 6 and 7, 7 is maximum.
// Explanation 2:

// Clearly, among 1000, 10000 and 100000, 100000 is maximum.

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
  let a =Number(inputs[0]);
  let b =Number(inputs[1]);
  let c = Number(inputs[2]);

  if(a>b && a>c){
      console.log(a);
  }else if(b>a && b>c){
      console.log(b);
      
  }else{
      console.log(c)
  }

}